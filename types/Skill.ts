export default interface Skill {
  title: string
  onPress?: (() => void) | undefined
}

// const mapSkill: Map<string, Skill> = new Map<string, Skill>()
// map.set('react-native', {title: 'React Native', onPress: () => {}})
