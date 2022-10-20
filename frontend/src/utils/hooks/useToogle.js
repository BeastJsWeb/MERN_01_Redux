import { useState } from "react"

export const useToogle = () => {
  const [isActive, setIsActive] = useState(false)

  const handleUseModal = () => setIsActive(!isActive)

  return [isActive, handleUseModal]
}