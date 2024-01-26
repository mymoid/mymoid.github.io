import { cookies } from 'next/headers'
import Logo from '../logo'
import ThemeToggle from '../theme-toggle'
import './header.css'
import { Button } from '../button'

export default function Header() {
  const cookieStore = cookies()
  const theme = cookieStore.get('theme')

  return (
    <header className="header">
      <Logo />
      <div className="button-group">
        <Button href="https://developers.mymoid.com/" variant="link">
          Developers
        </Button>
        <ThemeToggle initialValue={theme?.value as 'light' | 'dark'} />
        <Button href="https://mymoid.eu.auth0.com/u/login">
          Create account
        </Button>
      </div>
    </header>
  )
}
