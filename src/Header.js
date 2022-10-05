import React from 'react';
import './css/Header.css';
import logo from './img/amazon.png';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';


export default function Header() {

    const [{ basket, user }, dispatch] = useStateValue();
    // console.log(basket);

    function handleAuthentication() {
        if (user) {
            auth.signOut();
            alert("You have successfully signed out")
        }

    }

    return (
        <div className="header_class">
            <div className='header'>
                <Link to='/'>
                    <img className="header_logo" src={logo} alt="Nothing" />
                </Link>

                <div className="header_search">
                    <input className='header_searchInput' type="text" />
                    <SearchIcon className='header_searchIcon' />

                </div>
                <div className="header_nav">
                    <div onClick={handleAuthentication}
                        className="header_option">
                        <span className='header_optionLineOne'>
                            Hello {!user ? "Guest" : (user.email).split('@')[0] }
                        </span>
                        <Link to={!user && '/login'}>

                            <span className='header_optionLineTwo'>
                                {user ? 'Sign Out' : 'Sign In'}

                            </span>
                        </Link>
                    </div>

                    <div className="header_option1">
                    <Link to={user && '/orders'}>
                        <div className='header_optionLineOne'>
                            Return
                        </div>
                        <span className='header_optionLineTwo'>
                            & Orders
                        </span>

                    </Link>
                    </div>

                    <div className="header_option">
                        <span className='header_optionLineOne'>
                            Your
                        </span>
                        <span className='header_optionLineTwo'>
                            Prime
                        </span>

                    </div>
                    <Link to='/checkout'>

                        <div className="header_optionBasket">
                            <span className='header_optionLineTwo'>Your Cart</span>
                            <ShoppingBagIcon className='basketIcon' />
                            <span className='header_optionLineThree header_optionLineTwo header_basketCount'>{basket?.length}</span>
                        </div>
                    </Link>

                </div>


            </div>
            <div className="header_below">
                <div className="header_below_box">

                    <Link to='/women_clothes'>
                        <span className='header_optionLineTwo categories'>
                            Women's clothing
                        </span>
                    </Link>
                    <Link to='/men_clothes'>
                        <span className='header_optionLineTwo categories'>
                            Men's clothing
                        </span>
                    </Link>
                    <Link to='/electronics'>
                        <span className='header_optionLineTwo categories'>
                            Electronics
                        </span>
                    </Link>
                    <Link to='/jewelery'>
                        <span className='header_optionLineTwo categories'>
                            Jewelery
                        </span>
                    </Link>
                    
                </div>

            </div>
        </div>
    )
}
