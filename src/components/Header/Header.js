import './Header.scss';
import { FaTasks } from 'react-icons/fa';

function Header (){
    return (
        <header>
             <div className="title"> <FaTasks  className='icon'/>Todo App</div> 
             <div className="author">by Farouk Afolabi </div> 
             </header>
    );
}

export default Header;