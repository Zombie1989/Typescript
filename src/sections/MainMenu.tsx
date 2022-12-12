import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import MenuIcon from '../components/MenuIcon'
import { ShoppingCartType, useShoppingCartContext } from '../contexts/ShoppingCartContext'

const MainMenuSection: React.FC = () => {
  const [ showMenu, setShowMenu ] = useState<boolean>(true)
//  const { totalQuantity } = useShoppingCartContext() as ShoppingCartType

  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <nav className="header">
      <div className="container">
        <div className="header-logo">
          Fixxo.
        </div>
        <div className={`header-menu ${ !showMenu ? "d-grid" : "" }`}>
          <NavLink className="header-link" to="/" end>Home</NavLink>
          <NavLink className="header-link" to="/Categories" end>Categories</NavLink>
          <NavLink className="header-link" to="/Products" >Products</NavLink>
          <NavLink className="header-link" to="/Contacts" end>Contacts</NavLink>
          <NavLink className="header-link" to="/ManageProducts" end>Manage</NavLink>
        </div>
        <div className="menu-icons">
          <MenuIcon link="/search" icon="fa-regular fa-magnifying-glass"/>
          <MenuIcon hideOnMobile={true} link="/compare" icon="fa-regular fa-code-compare"/>
          <MenuIcon hideOnMobile={true} quantity="3" link="/wishlist" icon="fa-regular fa-heart"/>
          <MenuIcon quantity="7" link="/shoppingcart" icon="fa-regular fa-bag-shopping"/>
          



          {/* <button className="menu-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-red">{}</span>
            <i className="fa-regular fa-bag-shopping"></i>
          </button>


          <button className="menu-link-icon" type="button" data-bs-toggle="offcanvas" data-bs-target="#shoppingCart" aria-controls="shoppingCart">
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-theme">{}</span>
            <i className="fa-regular fa-bag-shopping"></i>
          </button> */}
          
          <button onClick={toggleMenu} className="menu-icon btn-menu-icon"><i className="fa-regular fa-bars"></i></button> 
        </div>
      </div>
    </nav>
  )
}

export default MainMenuSection