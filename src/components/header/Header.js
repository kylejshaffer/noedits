import bandname from '../../assets/no-edits-name.png'
import albumname from '../../assets/album-name.png'
import './header.css';
import '../../App.css';
import HeaderSocials from './HeaderSocials';

const Header = (props) => {
    return (
        <header className={props.headerstyle}>
            <div className="container header__container">
                <div>
                    <img src={bandname} className="bandname" alt="band-name"/>
                </div>
                <div>
                <img src={albumname} className="albumname" alt="album-name"/>
                </div>
                <HeaderSocials/>
            </div>
        </header>
    );    
}

export default Header;