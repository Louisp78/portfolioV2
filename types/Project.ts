import type Skill from '~/types/Skill'

type ProjectBase = {
  title: string
  imgSrc: string
  imgAlt: string
  description: string
  skills: Skill[]
  target?: string
}

type ProjectWithoutButton = ProjectBase & {
  link?: undefined
  btnTitle?: undefined
}

type ProjectWithButton = ProjectBase & {
  link: string
  btnTitle: string
}

export type Project = ProjectWithButton | ProjectWithoutButton
