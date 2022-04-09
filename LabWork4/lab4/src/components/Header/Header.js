import { FiSearch } from 'react-icons/fi';
import '../css/Header.css';
import LOGO from '../../img/logo.png';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={LOGO} alt="logo" />
      </div>
      <div className="header__search search">
        <div className="search__text">what do you want to find?</div>
        <FiSearch className="loop" />
      </div>
    </div>
  );
};

export default Header;
