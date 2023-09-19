import React from 'react'
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from 'react-router-dom';
import './Header.css';
// import { colors } from '@mui/material';
import {useStateValue} from './StateProvider'

function Header() {

    const [{basket}, dispatch] = useStateValue();
  return (
    <>
        <div className="header_div">
            <div className="header_stylings">
                <div className="header_logo">
                    <Link to = '/' style={{textDecoration:"none", color:"white"}}>
                        <StorefrontIcon fontSize='large' className='logo_icon'/>
                    </Link>
                    <h2 className='header_text'>Amazon clone Shop App</h2>
                </div>
                <div className="header_search">
                    <input type = 'text' className='search_text'/>
                    <SearchIcon className='search_icon'/>
                </div>
                <div className="header_nav">
                    <div className="user">
                        <p>Welcome</p>
                        <p>User</p>
                    </div>
                    <div className="logout">
                        <p>Logout</p>
                    </div>
                    <div className="shop_bag">
                        <Link to = '/checkout' style={{textDecoration:"none", color:"white"}}>
                            <ShoppingBagIcon />
                            <p style = {{margin:5}} id = "no_of_iteams_in_cart">{basket.length}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Header