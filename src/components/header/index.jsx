import { useEffect, useState } from 'react';
import IconClose from './iconClose';
import IconMenu from './iconMenu';
import Logo from './logo';
import style from './style.module.css';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    function handleMenu() {
        setIsOpen(!isOpen);
    }

    return (
        <header className={style.header}>
            <div onClick={handleMenu} className={`${style.overlay} ${isOpen ? style.active : style.deactive }`}></div>
            <nav className={style.nav}>
                <Logo className={style.logo} />
                <IconMenu className={`${style.iconMenu} ${!isOpen ? style.iconShow : style.iconHide}`} onClick={handleMenu} />
                <IconClose className={`${style.iconClose} ${isOpen ? style.iconShow : style.iconHide}`} onClick={handleMenu} />
                <ul className={`${style.listMenu} ${isOpen ? style.menuOpen : style.menuClose}`}>
                    <li>
                        <a href="#">About</a>
                    </li>
                    <li>
                        <a href="#">Discover</a>
                    </li>
                    <li>
                        <a href="#">Get Started</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}