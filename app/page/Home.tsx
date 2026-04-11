"use client"

import { useEffect, useState } from "react"

export default function Home() {
  const [array, setArray] = useState<number[]>([])

  useEffect(() => {
    generateArray()
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
    </div>
  )
}