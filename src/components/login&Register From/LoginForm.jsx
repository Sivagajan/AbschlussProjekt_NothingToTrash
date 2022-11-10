const LoginForm = (props) => {
    return(
        <section className="form">
            <label htmlFor="username">Username</label>
            <input onChange={(e) => {props.setusername(e.target.value)}} type="text" />

            <label htmlFor="password">Password</label>
            <input onChange={(e) => {props.setpassword(e.target.value)}} type="password"/>

            <button className="RegBtn" onClick={props.login}>Registrieren</button>

        </section>
    )
}

export default LoginForm