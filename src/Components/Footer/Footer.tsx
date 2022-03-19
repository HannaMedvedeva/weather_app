import styles from './Footer.module.css';
import {NavBar} from "../NavBar/NavBar";

export function Footer() {

    return (
        <div>
            <span className={styles.padding}/>
            <footer className={styles.footer}>
                <div className={styles.wrapper}>
                    <NavBar/>
                    <a
                        className={styles.external}
                        href="https://www.flaticon.com/free-icons/weather"
                        title="weather icons"
                        target='_blank'
                        rel="noreferrer"
                    >
                        Weather icons created by Freepik - Flaticon</a>
                </div>
            </footer>
        </div>
    )
}