export function createRunner(generator: Generator<any>) {
  let paused = false

  return {
    next() {
      if (paused) return null
      return generator.next()
    },
    pause() {
      paused = true
    },
    resume() {
      paused = false
    },
  }
}