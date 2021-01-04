import React, { useState, createContext } from "react"

export const imageContext = createContext()

const ImagesProvider = ({ children }) => {
  const [images, setImages] = useState([])

  return (
    <imageContext.Provider
      value={{
        images,
      }}
    >
      {children}
    </imageContext.Provider>
  )
}

export default ImagesProvider
