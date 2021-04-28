import React, { useEffect, useState } from 'react'
import {
  requestPermission,
  PermissionString
} from './utils/locationPermissions'
import Main from './pages/Main'
import Container from './components/Container'
import GrantPermission from './pages/GrantPermission'

const App: React.FC = () => {
  const [permission, setPermission] = useState<PermissionString>(null)

  useEffect(() => {
    if (permission === 'granted' || permission === 'never_ask_again') return
    const handlePermission = async (): Promise<void> => {
      const perm = await requestPermission()
      setPermission(perm)
    }
    handlePermission()
  }, [permission])

  return (
    <Container>
      {permission === 'granted' ? (
        <Main />
      ) : (
        <GrantPermission setter={setPermission} />
      )}
    </Container>
  )
}

export default App
