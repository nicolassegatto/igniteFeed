import styles from './Header.module.css'
import igniteLogo from '../../assets/IgniteSimbol.svg'

export function Header() {
   return (
      <header className={styles.header}>
         <img src={igniteLogo} alt="LogoIgnite" />
         <strong>Ignite Feed</strong>
      </header>
   )
}