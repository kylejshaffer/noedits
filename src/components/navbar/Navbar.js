import './navbar.css'

const navItems = [
    {id: 0, title: "Home", path: "./"},
    {id: 1, title: "Live", path: "./live"},
    {id: 2, title: "Press", path: "./press"},
    {id: 3, title: "News", path: "./news"},
    {id: 4, title: "Contact", path: "./contact"}
]

const NavBar = () => {
    return (
        <nav className="navbar">
            <div className='nav-container'>
                <ul className="nav-menu">
                {navItems.map((item) => {
                    return (
                    <li key={item.id} className='nav-item'>
                        <a href={item.path}>{item.title}</a>
                    </li>
                    )
                })}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;