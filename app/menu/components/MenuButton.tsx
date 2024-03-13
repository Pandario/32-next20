import React from 'react'

type Props = {}

export default function MenuButton({}: Props) {
  return (
    <div className="py-12 text-center bg-slate-200">
    <a
      href="menu/MenuCaart.pdf"
      download="TestMenu.pdf"
      className="text-3xl px-4 py-3 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-500 transition-colors duration-200"
    >
      Download Menu
    </a>
  </div>
  )
}