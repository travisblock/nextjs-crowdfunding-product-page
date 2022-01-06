import style from "./style.module.css"

export default function Modal({ title, desc }) {
    return (
        <>
            <div className={style.modalOverlay}></div>
            <div className={style.modalBox}>
                <div className={style.modal}>
                    <div className={style.modalHead}>
                        <h2 className={style.title}>{ title }</h2>
                        <p className={style.desc}>{ desc }</p>
                        <button className={style.close}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                            <path
                                fillRule="evenodd"
                                d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                opacity="0.4"
                            ></path>
                        </svg>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}