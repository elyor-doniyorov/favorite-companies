import MicIcon from '@material-ui/icons/Mic';
import SettingsIcon from '@material-ui/icons/Settings';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <header className="head">
      <div>
        <Link to="/">
          <ArrowBackIosIcon className="back" />
        </Link>
      </div>
      <div className="header-title">FAVORITE COMPANIES</div>
      <div>
        <MicIcon className="Heade-icons" />
        <SettingsIcon className="Heade-icons" />
      </div>
    </header>
  );
}

export default Header;
