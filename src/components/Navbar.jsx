import React from 'react'
import Image from 'next/image'
export default function Navbar() {
  return (
    <div className="fixed top-[0] left-[0]  bg-white z-[100]">
      <header className="flex  justify-between h-20 items-center py-3 px-32 w-screen">
        <div className=""><Image width={50} height={50} alt="" src="/ahead-logo.png" /></div>
        <div className="">
          <ul className="flex gap-8 items-center">
            <li className="cursor-pointer font-semibold ">Emotions</li>
            <li className="cursor-pointer font-semibold ">Manifesto</li>
            <li className="cursor-pointer font-semibold ">
              Self-awareness test
            </li>
            <li className="cursor-pointer font-semibold ">Work With Us</li>
          </ul>
        </div>
        <div className="">
          <button className="cursor-pointer text-white bg-black rounded-full px-5 py-3 font-semibold">
            Download app
          </button>
        </div>
      </header>
    </div>
  )
}
