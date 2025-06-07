import type Experience from "~/types/Experience"

export const experiencesListFactory = (
  t: (key: string) => string,
): Experience[] => [
  {
    title: t("lehibou.job-title"),
    companie: "LeHibou",
    location: t("mauritius"),
    description: t("lehibou.description"),
    skills: ["React Native", "Expo", "Nuxt.js", "Typescript", "Swift"],
  },
  {
    title: t("spliit.job-title"),
    location: "Paris",
    companie: "Spliit",
    description: t("spliit.description"),
    skills: [
      "Excel",
      "Google App Script",
      "PostgreSQL",
      "Typescript",
      "Google Data Studio",
      "React.js",
    ],
  },
]
