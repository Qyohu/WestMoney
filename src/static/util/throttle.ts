export const throttle = (fn: () => void, delay: number) => {
  let valid: boolean = true
  return function() {
    if (!valid) {
      return false
    }
    valid = false
    setTimeout(() => {
      fn()
      valid = true
    }, delay)
  }
}
