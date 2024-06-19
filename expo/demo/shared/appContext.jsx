import React, { createContext, useState, useContext } from 'react'

const AppContext = createContext()

const AppProvider = ({ children, tag }) => {
  const [state, setState] = useState({ tag })

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  )
}

const useAppContext = () => useContext(AppContext)
export { AppProvider, useAppContext }
