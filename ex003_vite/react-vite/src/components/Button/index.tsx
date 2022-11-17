import styles from './styles.module.css';
export const Button = () => {
    return (
        <div>
            <div className={styles.square}>
                <button className={styles.button}>Click here</button>
                <p className={styles.legend}>Content</p>
            </div>
        </div>
    )
}