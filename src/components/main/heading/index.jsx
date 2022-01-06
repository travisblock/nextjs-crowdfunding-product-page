import BookmarkIcon from './bookmarkIcon';
import Logo from './logo';
import style from './style.module.css';

export default function MainHeading() {
    return (
        <section className={`${style.heading} card`}>
            <div className={style.logo}>
                <Logo />
            </div>
            <h1 className={style.title}>
                Mastercraft Bamboo Monitor Riser
            </h1>
            <p className={style.description}>
                A beautifull & handcrafted monitor stand to reduce nexk and eye strain.
            </p>
            <div className={style.cta}>
                <a href="#" className={style.actionBtn}>
                    Back this project
                </a>
                <a href='#' className={style.bookmarkBtn}>
                    <BookmarkIcon />
                    <span>
                        Bookmark
                    </span>
                </a>
            </div>
        </section>
    )
}