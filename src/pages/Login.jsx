import React from 'react'

const Login = () => {
  return (
     <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form>
          <input type="email" placeholder="Email" className="w-full mb-3 p-2 border rounded" />
          <input type="password" placeholder="Password" className="w-full mb-3 p-2 border rounded" />
          <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
            Log In
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login