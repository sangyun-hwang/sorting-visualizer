"use client"

import { bubbleSort } from "@/core/algorithms/bubbleSort"
import { createRunner } from "@/core/runner/createRunner"
import { Step } from "@/core/types"
import { useEffect, useState } from "react"

export default function HomePage() {
  const [array, setArray] = useState<number[]>([])
  const [step, setStep] = useState<Step | null>(null)
  const [speed, setSpeed] = useState(100)
  const generator = bubbleSort(array)
  const runner = createRunner(generator)

  useEffect(() => {
    generateArray()

    const id = setInterval(() => {
      const result = runner.next()

      if (!result || result.done) return

      setStep(result.value)
    }, speed)

    return () => clearInterval(id)
  }, [])

  const generateArray = () => {
    const newArr = Array.from({ length: 20 }, () =>
      Math.floor(Math.random() * 100)
    )
    setArray(newArr)
  }

  return (
    <div className="p-10">
      <button
        onClick={generateArray}
        className="mb-4 px-4 py-2 bg-blue-500 text-white"
      >
        랜덤 생성
      </button>

      <div className="flex items-end gap-1 h-64">
        {array.map((value, idx) => (
          <div
            key={idx}
            className="bg-gray-400 w-3"
            style={{ height: `${value * 2}px` }}
          />
        ))}
      </div>
      <div className="flex items-end gap-1 h-64">
        {step?.array.map((value, idx) => (
          <div
            key={idx}
            style={{
              height: value * 3,
              backgroundColor:
                step.indices.includes(idx) ? 'red' : 'gray',
            }}
          />
        ))}
      </div>
    </div>
  )
}