const LoginForm = (props) => {
    return(
        <section className="form">
            <h1>Mit Email Anmelden</h1>
            <input onChange={(e) => {props.setusername(e.target.value)}} type="text" />

            <input onChange={(e) => {props.setpassword(e.target.value)}} type="password"/>

            <button className="loginBtn" onClick={props.login}>Registrieren</button>

        </section>
    )
}

export default LoginForm