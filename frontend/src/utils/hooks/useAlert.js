import {useMemo, useState} from "react"

export const useAlert = (message) => {
  const [alert, setAlert] = useState(true)

  useMemo(() => {
    message && setTimeout(() => setAlert(false), 3000)
  }, [message])

  return [alert]
}