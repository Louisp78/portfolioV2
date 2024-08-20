import type Skill from '~/types/Skill'

export default interface Project {
  title: string
  link: string
  imgSrc: string
  imgAlt: string
  description: string
  skills: Skill[]
  isGame?: boolean
}
