import type Skill from "./Skill"

export default interface Experience {
  title: string
  location: string
  companie: string
  description: string
  skills: Skill[]
}
