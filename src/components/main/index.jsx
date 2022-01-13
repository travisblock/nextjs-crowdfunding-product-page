import Modal from 'components/modal';
import { useState } from 'react';
import MainContent from './content';
import MainHeading from './heading';
import MainPricing from './pricing';
import style from './style.module.css';

const lists = [
    {
        id: 0,
        title: 'Pledge with no reward',
        desc: 'Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via email.',
    },
    {
        id: 1,
        title: 'Bamboo Stand',
        pledge: '$25',
        qty: 101,
        desc: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list."
    },
    {
        id: 2,
        title: 'Black Edition Stand',
        pledge: '$75',
        qty: 64,
        desc: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
    },
    {
        id: 3,
        title: 'Mahogany Special Edition',
        pledge: '$200',
        qty: 2,
        desc: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included."
    }
]

export default function Main() {
    const [selected, setSelected] = useState(null);
    const [modal, setModal] = useState(false);

    function selectHandler(id) {
        setSelected(id);
        setModal(true);
    }

    return (
        <main className={style.main}>
            <MainHeading onModal={() => setModal(true)} />
            <MainPricing />
            <MainContent 
                onSelect={(id) => selectHandler(id)}
            />
            <Modal 
                title="Back this project"
                desc="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"
                lists={lists}
                isOpen={modal}
                selected={selected}
                setselected={setSelected}
                onClose={() => {
                    setModal(false);
                    setSelected(null);
                }}
            />
        </main>
    )
}