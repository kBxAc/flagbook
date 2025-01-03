export default async function RefetchData() {
    try {
        const response = await fetch("/api/fetchTree");
        if (!response.ok) {
            throw new Error("Failed to fetch data from server");
        }
        const data = await response.json();
        localStorage.setItem("data", JSON.stringify(data)); // Cache the data locally
        return data; // Return the fetched data
    } catch (error) {
        console.error("Error in RefetchData:", error.message);
        return null; // Return null in case of an error
    }
}
