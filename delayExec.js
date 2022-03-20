export const delayExec = (func, delay) => {
  setTimeout(() => {
    func()
  }, delay)
}