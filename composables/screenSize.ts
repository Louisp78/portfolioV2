export const useScreenSize = () => {
  const isUnderMd = ref<boolean>(false)

  const checkScreenSize = () => {
    // Assuming 'md' is 768px; adjust based on your breakpoints
    isUnderMd.value = window.innerWidth < 768
  }

  onMounted(() => {
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
  })

  onBeforeUnmount(() => {
    window.removeEventListener('resize', checkScreenSize)
  })

  return {
    isUnderMd,
  }
}
