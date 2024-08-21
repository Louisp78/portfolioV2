export const useSlideRightObsAnim = () => {
  const slideOnObs = ref(null)

  onMounted(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animElt-slideRight')
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    if (slideOnObs.value) {
      observer.observe(slideOnObs.value)
    }
  })
  return { slideOnObs }
}
