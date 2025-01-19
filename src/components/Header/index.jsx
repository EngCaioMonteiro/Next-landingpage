import Image from 'next/image'
import logo from '../../../public/images/logo.svg';
import Link from 'next/link';
import Styles from "./index.module.scss";
import Button from '../Button';

const Header = () => {
    return(
        <div className={Styles.container}>
            <div className={Styles.logotipo}>
                <Image src={logo} alt='logo'></Image>
            </div>
            <div className={Styles.menu}>
                <Link href="/">Home</Link>                    
                <Link href="/">O que fazemos</Link>                    
                <Link href="/">Cases</Link>                
            </div>
            <div className={Styles.action}>
                <Button title="Fale conosco"/>
            </div>
        </div>
    );
}

export default Header;
