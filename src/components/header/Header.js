import bandname from '../../assets/no-edits-name.png'
import HeaderSocials from './HeaderSocials';
import NavBar from '../navbar/Navbar';
import './header.css';
import '../../App.css';

const Header = (props) => {
    return (
        <header className={props.headerstyle}>
            <div className="container header__container">
                <div>
                    <img src={bandname} className="bandname" alt="band-name"/>
                </div>
                <NavBar/>
                <HeaderSocials/>
            </div>
        </header>
    );    
}

export default Header;