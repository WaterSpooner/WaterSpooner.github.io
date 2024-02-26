import {Navbar} from './Navbar'
import {Footer} from './Footer'
import styles from '../styles/Home.module.css'
export default function Layout({ children }:any) {
  return (

    <div className={styles.background}>
        <Navbar/>
            <main className={styles.main}>{children}</main>
        <Footer />
    </div>

  )
}