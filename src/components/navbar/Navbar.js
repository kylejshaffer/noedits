import '../../App.css'

const navItems = [
    {
        id: 0,
        title: "Home",
        path: "./"
    },
    {
        id: 1,
        title: "Live",
        path: "./live"
    },
    {
        id: 2,
        title: "Video",
        path: "./video"
    },
    {
        id: 3,
        title: "News",
        path: "./news"
    },
    {
        id: 4,
        title: "Contact",
        path: "./contact"
    }
]

const NavBar = () => {
    return (
        <div className='App'>
            <nav>
                <ul>
                {navItems.map((item) => {
                    return (
                    <li key={item.id}>
                        <a href={item.path}>{item.title}</a>
                    </li>
                    )
                })}
                </ul>
            </nav>
        </div>
    )
}

export default NavBar;