import { createContext, useContext, useState } from 'react'

const themes = {
  d: { name: 'Gold', accent: '#C9A84C' },
  a: { name: 'Mint', accent: '#3EDBB0' },
  b: { name: 'Dark Luxe', accent: '#D4A853' },
  c: { name: 'Earthy', accent: '#B8432F' },
}

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('d')

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      <div data-theme={theme}>
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
