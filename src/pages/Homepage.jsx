import React from 'react'
import { useNavigate } from 'react-router-dom'

const Homepage = ({token}) => {

    let navigate = useNavigate()

    function handleLogout(){
        sessionStorage.removeItem('token')
        navigate('/')
    }


	return (
        <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-md text-center">
            <h3 className="text-2xl font-semibold mb-4">
              Welcome back, {token.user.user_metadata.full_name}
            </h3>
            <button 
              onClick={handleLogout}
              className="w-full bg-red-500 text-white p-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              Logout
            </button>
          </div>
        </div>
      );
}

export default Homepage;