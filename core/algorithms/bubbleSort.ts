export function* bubbleSort(arr: number[]) {
  const a = [...arr]

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - i - 1; j++) {
      yield {
        type: 'compare',
        indices: [j, j + 1],
        array: [...a],
      }

      if (a[j] > a[j + 1]) {
        ;[a[j], a[j + 1]] = [a[j + 1], a[j]]

        yield {
          type: 'swap',
          indices: [j, j + 1],
          array: [...a],
        }
      }
    }
  }

  return {
    type: 'done',
    indices: [-1, -1],
    array: a,
  }
}