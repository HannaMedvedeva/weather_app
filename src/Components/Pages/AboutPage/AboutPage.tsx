import {Header} from "../../Header/Header";
import {Footer} from "../../Footer/Footer";
import '../common.css';
import styles from './AboutPage.module.css';
import background from "../../../icons/bg.jpg";
import {About} from "../../About/About";

export function AboutPage(){
    return (
        <div className={styles.aboutPage} style={{ backgroundImage: `url(${background})`, backgroundSize: 'cover' }} >
            <Header />
            <About />
            <Footer />
        </div>
    )
}