import style from './style.module.css';

export default function MainPricing() {
    return (
        <section className={`card`}>
            <div className={style.numbers}>
                <div className={style.amount}>
                    <span className={style.title}>$89,914</span>
                    <span className={style.desc}>Of $100,000 backed</span>
                </div>
                <div className={style.separator}></div>
                <div className={style.total}>
                    <span className={style.title}>5,007</span>
                    <span className={style.desc}>total backers</span>
                </div>
                <div className={style.separator}></div>
                <div className={style.days}>
                    <span className={style.title}>56</span>
                    <span className={style.desc}>days left</span>
                </div>
            </div>
            <div className={style.progressBar}>
                <div className={style.progress} style={{ width: '85%' }}></div>
            </div>
        </section>
    )
}