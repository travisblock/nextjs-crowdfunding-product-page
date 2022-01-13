import { useEffect, useRef } from "react"
import style from "./modal.module.css"

export default function Modal({ title, desc, isOpen, lists, onClose, selected, setselected }) {
    const cardRef = useRef(null);
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = "17px";
            cardRef?.current?.scrollIntoView({ behavior: "smooth", block: "center" });
        } else {
            document.body.style.overflow = "auto";
            document.body.style.paddingRight = "0";
        }

    }, [isOpen])

    function handleChange(e) {
        setselected(e.target.value);
    }

    return (
        <>
            <div className={`${style.modalOverlay} ${ isOpen ? style.overlayVisible : '' }`} onClick={onClose}></div>
            <div className={`${style.modalBox} ${ isOpen ? style.modalOpen : '' }`}>
                <div className={style.modal}>
                    <div className={style.modalHead}>
                        <h2 className={style.title}>{ title }</h2>
                        <p className={style.desc}>{ desc }</p>
                        <button className={style.close} onClick={onClose}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15">
                                <path
                                    fillRule="evenodd"
                                    d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                                    opacity="0.4"
                                ></path>
                            </svg>
                        </button>
                    </div>
                    <div className={style.modalBody}>
                        { lists.map((list, i) => (
                            <div 
                                className={`${style.card} ${selected == list.id ? style.selected : ''}`} 
                                key={i} 
                                ref={(el) => { selected == list.id ? cardRef.current = el : null }}
                            >
                                <input 
                                    className={style.inputRadioCustom} 
                                    type="radio" 
                                    name="radio" 
                                    id={`radio${i}`} 
                                    value={list.id}
                                    checked={selected == list.id} 
                                    onChange={handleChange}
                                    onClick={() => setselected(list.id)}
                                />
                                <div className={style.cardHead}>
                                    <div className={style.leftHead}>                                        
                                        <div className={style.formRadio}>
                                            <label htmlFor={`radio${i}`}>
                                                <div className={style.circleRadio}></div>
                                                <div className={style.detail}>
                                                    <h3>{list.title}</h3>
                                                    { list.pledge && <span className={style.pledge}>Pledge { list.pledge } or more</span> }
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                    { typeof list.qty != 'undefined' && <span className={style.qty}><h6>{ list.qty } </h6><span>left</span></span> }
                                </div>
                                <div className={style.cardBody}>
                                    <p className={style.cardDesc}>{ list.desc }</p>
                                </div>
                                <div className={style.separator}></div>
                                <div className={style.cardFoot}>
                                    <p className={style.enterPledge}>Enter Your pledge</p>
                                    <div className={style.cta}>
                                        <div className={style.formInput}>
                                            <input type="number"/>
                                        </div>
                                        <button className={style.actionBtn}>Continue</button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}