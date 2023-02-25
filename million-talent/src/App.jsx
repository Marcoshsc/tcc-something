import { useCallback } from "react"
import { useNavigate } from "react-router-dom"

function App() {
  const navigate = useNavigate()

  const navigateToLogin = useCallback(() => {
    navigate('/login')
  })

  const navigateToSignup = useCallback(() => {
    navigate('/signup')
  })

  return (
    <div className="flex flex-col gap-3 items-center justify-center bg-slate-200 w-screen h-screen">
      <h1 className="text-3xl font-mono text-center text-gray-800">
        Million Talent
      </h1>
      <h2 className='text-2xl font-mono text-center text-gray-700'>
        Look around.
      </h2>
      <div className='flex flex-row gap-8 justify-items-center items-center'>
        <button onClick={navigateToLogin} className='font-sans hover:border-slate-400'>Login</button>
        <button onClick={navigateToSignup} className="font-sans hover:border-slate-400">Signup</button>
      </div>
    </div>
  )
}

export default App
