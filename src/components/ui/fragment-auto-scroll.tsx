import { useEffect } from 'react'
import { useLocation } from 'react-router'

function FragmentAutoScroll({ children }: { children: React.ReactNode }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.querySelector(hash)
      element?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [hash])

  return <>{children}</>
}

export { FragmentAutoScroll }
