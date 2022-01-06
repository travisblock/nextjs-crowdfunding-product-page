import Modal from 'components/modal';
import MainContent from './content';
import MainHeading from './heading';
import MainPricing from './pricing';
import style from './style.module.css';

export default function Main() {
    return (
        <main className={style.main}>
            <MainHeading/>
            <MainPricing />
            <MainContent />
            {/* <Modal 
                title="Back this project"
                desc="Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?"
            /> */}
        </main>
    )
}