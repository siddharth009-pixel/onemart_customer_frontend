import React, { useEffect, useState } from 'react';
import './style.css';
import flipkartLogo from '../../images/logo/flipkart.png';
import goldenStar from '../../images/logo/golden-star.png';
import loginImage from '../../images/login-image.png'
import { IoIosArrowDown, IoIosCart, IoIosSearch } from 'react-icons/io';
import MenuHeader from '../MenuHeader'
import { 
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { useDispatch, useSelector } from 'react-redux';
import { login, signOut } from '../../actions/auth.action';
import { Link, Redirect } from 'react-router-dom';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth=useSelector(state=>state.auth)
  const [loginModal, setLoginModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch=useDispatch()
  useEffect(()=>{
    setLoginModal(false)
  },[auth.authenticate])

  const userLogin=()=>{
    const user={email,password}
    dispatch(login(user))
    setEmail('')
    setPassword('')
  }

  const logout=()=>{
    dispatch(signOut())
  }

  const cartPageButton=()=>{
    console.log('sdfghj');
  }

  const renderLoggedInMenu=()=>{
    return(
      <DropdownMenu
      menu={
        <a className="more" onClick={() => setLoginModal(true)}>
          {auth.user.firstname}
        </a>
      }
      menus={[
        { label: 'My Profile', href: '', icon: null },
        { label: 'Flipkart Plus Zone', href: '', icon: null },
        { label: 'Orders', href: '/user/orders', icon: null },
        { label: 'Wishlist', href: '', icon: null },
        { label: 'Rewards', href: '', icon: null },
        { label: 'Gift Cards', href: '', icon: null },
        { label: 'Notifications', href: '', icon: null },
        { label: 'LogOut', href: '', icon: null,onClick:()=>{logout()} },
      ]}
    />
    )
  }

  const renderNonLoggedInMenu=()=>{
    return(
      <DropdownMenu
      menu={
        <a className="more" onClick={() => setLoginModal(true)}>
          Login
        </a>
      }
      menus={[
        { label: 'My Profile', href: '', icon: null },
        { label: 'Flipkart Plus Zone', href: '', icon: null },
        { label: 'Orders', href: '', icon: null },
        { label: 'Wishlist', href: '', icon: null },
        { label: 'Rewards', href: '', icon: null },
        { label: 'Gift Cards', href: '', icon: null },
      ]}
      firstMenu={
        <div className="firstmenu">
          <span>New Customer?</span>
          <a style={{ color: '#2874f0' }}>Sign Up</a>
        </div>
      }
    />
    )
  }

  return (
    <div className="wholeHeader">
    <div className="header">
      <Modal 
        visible={loginModal}
        onClose={() => setLoginModal(false)}
      >
        <div className="authContainer">
          <div className="row">
            <div className="leftspace">
              <h2>Login</h2>
              <p>Get access to your Orders, Wishlist and Recommendations</p>
            </div>
            <div className="rightspace">          

                <MaterialInput 
                  type="text"
                  label="Enter Email/Enter Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div style={{height:'20px'}}>
                </div>

                <MaterialInput 
                  type="password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rightElement={<a href="#">Forgot?</a>}
                />
                <div style={{height:'30px'}}>
                </div>

                <MaterialButton 
                  title="Login"
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  onClick={userLogin}
                />

            </div>
          </div>
        </div>
      </Modal>
      <div className="subHeader">

        {/* logo starts  */}
        <div className="logo">
          <a href="">
            <img src={flipkartLogo} className="logoimage" alt="" />
          </a>
          <a style={{ marginTop: '-10px' }}>
            <span className="exploreText">Explore</span>
            <span className="plusText">Plus</span>
            <img src={goldenStar} className="goldenStar" alt="" />
          </a>
        </div>
      {/* logo ends */}

      {/* searchBar starts */}
        <div style={{
          padding: '0 10px'
        }}>
          <div className="searchInputContainer">
            <input
              className="searchInput"
              placeholder={'search for products, brands and more'}
            />
            <div className="searchIconContainer">
              <IoIosSearch style={{
                color: '#2874f0'
              }} />
            </div>

          </div>
        </div>
        {/* searchBar ends */}
        

        {/* Right Menu starts */}
        <div className="rightMenu">

            { auth.authenticate?
              renderLoggedInMenu():
              renderNonLoggedInMenu()
            }

          {/* Login DropdownMenu starts */}
          {/* <DropdownMenu
            menu={
              <a className="loginButton" onClick={() => setLoginModal(true)}>
                Login
              </a>
            }
            menus={[
              { label: 'My Profile', href: '', icon: null },
              { label: 'Flipkart Plus Zone', href: '', icon: null },
              { label: 'Orders', href: '', icon: null },
              { label: 'Wishlist', href: '', icon: null },
              { label: 'Rewards', href: '', icon: null },
              { label: 'Gift Cards', href: '', icon: null },
            ]}
            firstMenu={
              <div className="firstmenu">
                <span>New Customer?</span>
                <a style={{ color: '#2874f0' }}>Sign Up</a>
              </div>
            }
          /> */}
          {/* Login DropdownMenu ends */}

          
          {/* More DropdownMenu starts */}
          <DropdownMenu
            menu={
              <a className="more">
                <span>More</span>
                <IoIosArrowDown />
              </a>
            }
            menus={[
              { label: 'Notification Preference', href: '', icon: null },
              { label: 'Sell on flipkart', href: '', icon: null },
              { label: '24x7 Customer Care', href: '', icon: null },
              { label: 'Advertise', href: '', icon: null },
              { label: 'Download App', href: '', icon: null }
            ]}
          />
          {/* More DropdownMenu ends */}


          {/* Cart Button starts */}
          <div>
            <Link className="cart" to="/cart">
              <IoIosCart />
              <span style={{ margin: '0 10px',cursor:'pointer' }} onClick={()=>{cartPageButton()}}>Cart</span>
            </Link>
          </div>
        </div>
        {/* Cart Button ends */}

        {/* Right Menu ends */}

      </div>
    
    </div>  
    <div>
      <MenuHeader />
    </div> 
    </div>
    
  )

}

export default Header