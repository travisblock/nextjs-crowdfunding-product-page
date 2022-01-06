import style from './style.module.css';

export default function Hero({ children }) {
    return (
        <section className={style.hero}>
            {children}
        </section>
    )
}