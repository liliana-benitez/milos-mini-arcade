/* eslint-disable react/no-unescaped-entities */
// import { useState } from 'react'
import arcadeGame from './assets/arcade-game.png'

function App() {

  return (
    <body className="bg-black text-white h-screen flex flex-col justify-between p-4 font-pixelify">
    <h1 className="text-6xl font-bold text-center text-sky-400">
      MILO'S MINI ARCADE
    </h1>

    <section className="grid grid-cols-3 gap-7 place-items-center">
      <div className="border rounded-md border-yellow-300 p-4 h-52 w-52 flex flex-col justify-center items-center text-sky-400 text-xl">
        <img src={arcadeGame} />
        <h3>Pet-a-Milo</h3>
      </div>
      <div className="border rounded-md border-yellow-300 p-4 h-52 w-52 flex flex-col justify-center items-center text-sky-400 text-xl">
        <img src={arcadeGame} />
        <h3>Milo Run</h3>
      </div>
      <div className="border rounded-md border-yellow-300 p-4 h-52 w-52 flex flex-col justify-center items-center text-sky-400 text-xl">
        <img src={arcadeGame} />
        <h3>Super Milo</h3>
      </div>
      <div className="border rounded-md border-yellow-300 p-4 h-52 w-52 flex flex-col justify-center items-center text-sky-400 text-xl">
        <img src={arcadeGame} />
        <h3>Pac Milo</h3>
      </div>
      <div className="border rounded-md border-yellow-300 p-4 h-52 w-52 flex flex-col justify-center items-center text-sky-400 text-xl">
        <img src={arcadeGame} />
        <h3>Snake Milo</h3>
      </div>
      <div className="border rounded-md border-yellow-300 p-4 h-52 w-52 flex flex-col justify-center items-center text-sky-400 text-xl">
        <img src={arcadeGame} />
        <h3>Tic Tac Milo</h3>
      </div>
    </section>

    <footer className="text-center text-slate-800">
      <h6> © COPYRIGHT TINITO CODE STUDIOS 2024</h6>
    </footer>
    </body>
  )
}

export default App
