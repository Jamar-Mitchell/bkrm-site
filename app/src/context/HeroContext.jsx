import { createContext, useContext, useState } from 'react'

const heroes = ['default', 'split', 'minimal', 'typewriter', 'photo']
const HeroContext = createContext()

export function HeroProvider({ children }) {
  const [heroVariant, setHeroVariant] = useState('default')
  return (
    <HeroContext.Provider value={{ heroVariant, setHeroVariant, heroes }}>
      {children}
    </HeroContext.Provider>
  )
}

export function useHero() {
  return useContext(HeroContext)
}
