import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://flagbook.kbxac.xyz/", // replace this with your deployed domain
  author: "kBxAc",
  desc: "A writeup site by team kBxAc",
  title: "flagbook",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en", // html lang code. Set this empty and default will be "en"
  langTag: ["en-EN"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/kBxAc",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/kBxAc",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  }
];
