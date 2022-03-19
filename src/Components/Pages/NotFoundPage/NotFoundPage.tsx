import background from "../../../icons/bg.jpg";
import {Header} from "../../Header/Header";
import {Footer} from "../../Footer/Footer";
import styles from "./NotFoundPage.module.css";
import {Link} from "react-router-dom";

export function NotFoundPage() {
    return (
        <div className={styles.notFoundPage} style={{backgroundImage: `url(${background})`}}>
            <Header/>
            <span className={styles.padding}/>
            <div className={styles.wrapper}>
                <h2 className={styles.error}>MISTAAAAAAAAAAAAAAAAAAAKE!</h2>
                <Link to='/'>Return to our universe</Link>
            </div>
            <Footer/>
        </div>
    )
}