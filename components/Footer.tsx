import styles from '../styles/Home.module.css'
import Image from 'next/image'
export const Footer = () => {
    return (
      <footer className={styles.footer}>
        <span className = "flex items-center  pl-5 text-center"> © Max Spooner 2022 </span>
        <ul className="inline-flex  ml-auto    pr-10" >                                                                                                                                           
          <li><a className="px-1" target="_blank" href="https://github.com/WaterSpooner"><Image src="/icon-github.svg" alt="Github" width={30} height={30}/></a></li>                                                            
          <li><a className="px-1" target="_blank" href="https://www.linkedin.com/in/max-spooner-30177a1b8/"><Image src="/icon-linkedin.svg" alt="Linkedin" width={30} height={30}/></a></li>                                                                                                                              
        </ul>
      </footer>
    );
  }

