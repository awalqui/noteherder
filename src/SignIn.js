import React from 'react'

import './SignIn.css'

const SignIn = ({ authHandler }) => {
  const authenticate = () => {
    auth
      .signInWithPopup(githubProvider)
      .then((data) => {
        authHandler(data.user)
      })
  }

  return (
    <button
      className="SignIn"
      onClick={authenticate}
    >
      Sign In With GitHub
    </button>
  )
}

export default SignIn