import './Header.scss';
import { FaTasks } from 'react-icons/fa';
import MainMenu from '../MainMenu/MainMenu';

function Header (){
    return (
        <> 
        
        <header>
             <div className="title"> <FaTasks  className='icon'/>Todo App</div> 
             <div className="author">by Farouk Afolabi </div> 
             </header>

             <MainMenu/>
             </>
    );
}

export default Header;