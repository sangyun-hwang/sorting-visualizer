export type Step = {
  type: "compare" | "swap" | "done"
  indices: [number, number]
  array: number[]
}