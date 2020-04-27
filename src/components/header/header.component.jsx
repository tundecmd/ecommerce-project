import React, { Component } from 'react'
import './header.styles.scss';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assests/crown.svg';
import { auth } from '../../firebase/firebase.utils';
import { connect } from 'react-redux';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

class Header extends Component {
    
    render() {
        console.log(this.props);
        const { currentUser, hidden } = this.props;
        return <div className="header">
        <Link to='/' className='logo-container'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shop'>
                SHOP
            </Link>
            <Link className='option' to='/contact'>
                CONTACT
            </Link>
            {
                currentUser 
                
                ?   (
                        <div className='option' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </div>
                )
                :
                    (
                        <Link className='option' to='/signin'>
                            SIGN IN
                        </Link>
                )
            }
            <CartIcon className='option' />
        </div>
        {
            hidden ? (null) : (<CartDropdown />)
        }
    </div>
    }
    
}

const mapStateToProps = ({user: {currentUser}, cart: {hidden}}) => {
    return {
        currentUser,
        hidden
    }
}


export default connect(mapStateToProps)(Header);