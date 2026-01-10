import type { Project } from "~/types/Project"

export const projectListFactory = (t: (key: string) => string, locale: string): Project[] => [
  {
    title: t("projects.maconsigne.title"),
    link: "https://maconsigne.com/",
    btnTitle: t("visit-the-website"),
    imgSrc: "/img/maconsigne.png",
    target: "_blank",
    imgAlt: t("projects.maconsigne.img-alt"),
    description: t("projects.maconsigne.description"),
    skills: ["React Native", "Expo & Co", "Tailwind", "Redux", "EAS", "CI/CD"],
  },
  {
    title: t("projects.lehibou-app.title"),
    link: "https://apps.apple.com/fr/app/lehibou-freelance-it/id6468558589",
    btnTitle: t("download-on-app-store"),
    imgSrc: "/img/lehibou.png",
    target: "_blank",
    imgAlt:
      "Two screenshots of the Lehibou App: the first shows the login screen, and the second displays the iOS widget for freelance availability.",
    description: t("projects.lehibou-app.description"),
    skills: ["React Native", "Expo", "Swift", "Typescript"],
  },
  {
    title: "🍜 SudoSumo",
    link: `/${locale}/sudosumo`,
    btnTitle: t("more-details"),
    imgSrc: "/img/sudosumo.png",
    imgAlt:
      "Desktop screenshot of the SudoSumo app displaying a sudoku puzzle on the screen.",
    description: t("projects.sudosumo.description"),
    skills: [
      "Next.js",
      "React.js",
      "Typescript",
      "TailwindCSS",
      "Java",
      "Spring boot",
      "AWS EC2",
      "AWS RDS",
      "Docker",
      "OAuth2",
      "Sudoku solver algorithms",
    ],
  },
  {
    title: "LivLink",
    imgSrc: "/img/livlink2.png",
    imgAlt:
      "Three screenshots of the LivLink App: the first shows the contacts list, and the second and third display the 'Circle Call' feature.",
    description: t("projects.livlink.description"),
    skills: ["Android", "Kotlin", "Java Spring Boot"],
  },
  {
    title: "Studeam",
    description: t("projects.studeam.description"),
    imgSrc: "/img/studeam1.png",
    imgAlt: t("projects.studeam.img-alt"),
    skills: ["React Native", "Typescript", "Java Spring Boot", "Neo4j"],
  },
]
