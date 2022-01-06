import contents from './contents';
import style from './style.module.css';

export default function MainContent() {
    return (
        <section className={`card`}>
            <h3 className={style.title}>About this project</h3>
            <p className={style.desc}>
                The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. 
                Placing your monitor at eye level has the potential to improve your posture and make you more comfortable whila at work, helping you stay focused on the task at hand.
            </p>
            <p className={style.desc}>
                Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer to allow notepads, pens, and USB sticks to be stores under the stand.
            </p>
            <div className={style.products}>
                {
                    contents.map((content, index) => {
                        if (content.id === 0 ) return null;
                        return ( 
                            <div className={style.product} key={index}>
                                <div className={style.productHead}>
                                    <h4 className={style.productTitle}>
                                        { content.title }
                                    </h4>
                                    <p className={style.productDesc}>
                                        { content?.sub }
                                    </p>
                                </div>
                                <p className={style.productBody}>
                                    { content.desc }
                                </p>
                                <div className={style.productFoot}>
                                    <span className={style.productPrice}>
                                        { content.qty } <span>left</span>
                                    </span>
                                    <a href="#" className={style.actionBtn}>
                                        Select Reward
                                    </a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>
    )
}