import type Skill from '~/types/Skill'

// TODO: add recommendation
export default interface Project {
  title: string
  link?: string
  btnTitle?: string
  target?: string
  imgSrc: string
  imgAlt: string
  description: string
  skills: Skill[]
}
