import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="E-Commerce"
        className="logo"
        src="https://res.cloudinary.com/dejav3tzf/image/upload/v1662390688/shopping-cart-3d-render-transparent-psd-file_460848-6771_gi6a88.jpg"
      />
      <h1 className="title">Flipkart</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link className="route-link" to="/">
          Home
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/products">
          Products
        </Link>
      </li>
      <li className="link-item">
        <Link className="route-link" to="/cart">
          Cart
        </Link>
      </li>
    </ul>
    <button type="button" className="logout-desktop-btn">
      Logout
    </button>
  </nav>
)

export default Header
