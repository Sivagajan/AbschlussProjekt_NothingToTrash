import RegisterButton from '../buttons/registerButton/RegisterButton'
import './Navbar.Modules.scss'


const Navbar = () => {
    return (
        <nav>
            <p>nothingtotrash</p>
            <div className="dflex">
                <div className='div1'>
                    <a href="">Marktplatz</a>
                    <a href="">Über uns</a>
                </div>
                <div className='div2'>
                    <a href="#">Log In</a>
                    <RegisterButton/>
                </div>
            </div>
        </nav>
    )
}

export default Navbar