import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <div className="nav-header">
    <div className="blog-container">
      <h1 className="blog-title">My Blogs</h1>
      <ul className="nav-menu">
        <li className="sub-title">
          <Link to="/" className="nav-link">
            Home
          </Link>
        </li>
        <li className="sub-title">
          <Link to="/about" className="nav-link">
            About
          </Link>
        </li>
        <li className="sub-title">
          <Link to="/contact" className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
    </div>
  </div>
)
export default Header
