import React from 'react'
import { Bar, Logo, LogosWrapper, Link } from './styles'
import reactLogo from '../../assets/react.svg'
import viteLogo from '/vite.svg'

export default function Header() {
  return (
    <Bar>
      <LogosWrapper>
        <Link href="https://vite.dev" target="_blank" rel="noreferrer">
          <Logo src={viteLogo} alt="Vite logo" />
        </Link>
        <Link href="https://react.dev" target="_blank" rel="noreferrer">
          <Logo className="react" src={reactLogo} alt="React logo" />
        </Link>
      </LogosWrapper>
    </Bar>
  )
}


