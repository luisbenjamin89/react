import './Welcome.css'

function Welcome({user}) {
  const name = user.split(' ')[0]

  return (
    <>
      <p className="welcome">
        {user ? `Bien ${name}` : 'log in to get started'}
      </p>
      <img src="logo.png" alt="Logo" className="logo" />
    </>
  )
}

export default Welcome
