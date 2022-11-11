import './LoginForm.Modules.scss'
import Navbar from '../navbar/Navbar'

const LoginForm = (props) => {
    return (
        <>
            <Navbar />
            <section>
                <article className="form">
                    <h1>Mit Email Anmelden</h1>
                    <input onChange={(e) => { props.setusername(e.target.value) }} type="text" />

                    <input onChange={(e) => { props.setpassword(e.target.value) }} type="password" />

                    <button className="loginBtn" onClick={props.login}>Registrieren</button>
                </article>
            </section>
        </>
    )
}

export default LoginForm