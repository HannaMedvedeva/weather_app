import styles from './About.module.css';

export function About(){

    return (
        <div className={styles.wrapper}>
            <span className={styles.padding}/>
            <h2 className='pb-2'>Weather is our mood, our mood is like weather.</h2>
            <div className={`card ${styles.card}`}>
                <p>To find out the weather in your city, enter it in any language.<br/>If several cities have the same name, also enter your <b>two-letter country code</b> separated by comma.</p>
                <p>Example: "London, uk" "London, ca"</p>
                <p>Also you can choose measurement in dropdown.</p>
                <p>Your last success request will be stored even after page refresh.</p>
                <p>Hope you will enjoy it!</p>
            </div>
        </div>

    )
}