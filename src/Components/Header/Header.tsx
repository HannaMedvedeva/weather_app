import styles from './Header.module.css';
import {NavBar} from "../NavBar/NavBar";

export function Header() {

    return (
        <header className={styles.header}>
            <div className={styles.wrapper}>
               <NavBar enableIcon position='right' />
            </div>
        </header>
    )
}