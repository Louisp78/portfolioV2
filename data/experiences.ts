import type Experience from "~/types/Experience"

export const experiencesListFactory = (
  t: (key: string) => string,
): Experience[] => [
  {
    title: t("lehibou.job-title"),
    companie: "LeHibou",
    location: t("mauritius"),
    description: t("lehibou.description"),
    skills: [
      {
        title: "React Native",
      },
      {
        title: "Expo",
      },
      {
        title: "Nuxt.js",
      },
      {
        title: "Typescript",
      },
      {
        title: "Swift",
      },
    ],
  },
  {
    title: t("spliit.job-title"),
    location: "Paris",
    companie: "Spliit",
    description: t("spliit.description"),
    skills: [
      {
        title: "Excel",
      },
      {
        title: "Google App Script",
      },
      {
        title: "PostgreSQL",
      },
      {
        title: "Typescript",
      },
      {
        title: "Google Data Studio",
      },
      {
        title: "React.js",
      },
    ],
  },
]
