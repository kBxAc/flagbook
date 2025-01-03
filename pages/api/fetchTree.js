import axios from "axios";
import * as cheerio from "cheerio";

const startYear = process.env.NEXT_PUBLIC_START_YEAR;

export default async function handler(req, res) {
    const tree = await fetchTree();
    await res.status(200).json({tree});
}

async function fetchTree(repoUrl = process.env.NEXT_PUBLIC_WRITEUP_REPO_URL, branch = "main") {
    const data = [];
    for (let year = startYear; ; year++) {
        const url = `${repoUrl}/tree/${branch}/${year}`;
        // console.log(url);
        try {
            const response = await axios.get(url);
            // console.log(response.status);
            if (response.status !== 200) {
                break;
            }

            const ctfs = await fetchCTFs(repoUrl, branch, year);

            data.push({
                year,
                ctfs
            });

        } catch (error) {
            // console.error(error);
            break;
        }
    }
    // console.log(data);
    return data;
}

async function fetchCTFs(repoUrl, branch, year) {
    const url = `${repoUrl}/tree/${branch}/${year}`;
    const response = await axios.get(url);

    // console.log(year, response.data.toString().includes("test-ctf"));

    const $ = cheerio.load(response.data);
    const ctfs = [];

    var data = $('script[type="application/json"][data-target="react-app.embeddedData"]')
    data = JSON.parse(data.text());

    var tree = data.payload.tree;

    // console.log(data.payload.fileTree['']);

    for (let i = 0; i < tree.items.length; i++) {
        const ctfName = tree.items[i].name.split("/")[0];
        // console.log(ctfName);
        ctfs.push(ctfName);
    }

    var data = [];

    for (let i = 0; i < ctfs.length; i++) {
        const detailsPath = `https://raw.githubusercontent.com/${repoUrl.split("/")[3]}/${repoUrl.split("/")[4]}/refs/heads/main/${year}/${ctfs[i]}/details.json`;
        // console.log(detailsPath);
        var details = await axios.get(detailsPath);
        try {
            details = JSON.parse(details.data);
        } catch (error) {
            details = details.data;
            // console.error(error);
        }
        // details = JSON.parse(details.data);
        data.push({
            folderName: ctfs[i],
            url: `${repoUrl}/tree/${branch}/${year}/${ctfs[i]}`,
            details
        });
    }

    return data;
}