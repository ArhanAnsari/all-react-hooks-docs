import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex justify-center items-center">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1 className="text-4xl font-bold mb-4">Vite + React</h1>
      <div className="flex flex-col items-center gap-4">
        <button 
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p className="text-lg">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-lg">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
