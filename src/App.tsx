import React from 'react'
import './App.css'
import ColorPicker from './pages/ColorPicker'
import LogIn from './pages/LogIn'

function App() {
  const [canAccess, setCanAccess] = React.useState<boolean>(false);

  const handleLogIn = () => {
    setCanAccess(!canAccess)
  }
  return (
    <>
      {canAccess ? <ColorPicker /> : <LogIn handleLogIn={handleLogIn} />}
    </>
  )
}

export default App
