import logo from './logo.png';
import './Header.css';

function Header() {
    return (
        <header className='Header'>
            <div className='Header-logoContainer'>
                <a className='link' href='#'>
                    <img className='Header-logo' src={logo} alt='Logotipo' />
                </a>
            </div>

            <div className='Header-brand'>
                <h1 className='Header-title'>RapiBytes Online</h1>
            </div>
        </header>
    );
}

export default Header;