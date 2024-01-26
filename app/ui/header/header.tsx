import Logo from '../logo'
import './header.css'
import { Button } from '../button'

export default function Header() {
  return (
    <header className="header">
      <Logo />
      <div className="button-group">
        <Button href="https://developers.mymoid.com/" variant="link">
          Developers
        </Button>
        <Button href="https://mymoid.eu.auth0.com/u/login">
          Create account
        </Button>
      </div>
    </header>
  )
}
