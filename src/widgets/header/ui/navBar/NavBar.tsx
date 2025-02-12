import { Link } from 'react-router-dom'
import styles from './NavBar.module.scss'
export const NavBar = () => {
  return (
    <nav>
      <ul className={styles.navbar}>
        <li>
          <Link to={'/'}>go to home</Link>
        </li>
        <li>
          <Link to={'/aboutUs'}>go to home</Link>
        </li>
      </ul>
    </nav>
  )
}
