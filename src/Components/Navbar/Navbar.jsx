import './Navbar.css'
export const Navbar = () => {
  return (
    <div>
        <nav className='container'>
            <div className="logo">
                <img src="/images/logo.jpg" alt="Nike_logo" />
            </div>
            <ul>
                <li href="#">Menu</li>
                <li href="#">Location</li>
                <li href="#">About</li>
                <li href="#">Contact</li>
            </ul>
            <button>Login</button>
        </nav>
    </div>
  )
}
