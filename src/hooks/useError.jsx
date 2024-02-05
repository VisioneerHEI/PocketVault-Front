import { useState } from 'react'

const useError = (init, timeout) => {
  const [error, setError] = useState(init)

  setTimeout(() => {
    setError(init)
  }, timeout)

  return [error, setError]
}

export default useError
