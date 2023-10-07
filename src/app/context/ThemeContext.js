"use client"
import React, { createContext, useState } from 'react'

export const ThemeContext = createContext()

const ThemeContextProvider = ({children}) => {
  const [theme,setTheme] = useState("light")
  const toggle = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  }
  return (
    <ThemeContext.Provider value={{ theme , toggle }}>
      <div className={`theme ${theme}`}>{children}</div>
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider