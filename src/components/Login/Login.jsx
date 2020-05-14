import React from "react";
import {reduxForm} from 'redux-form'
import {createField, Input} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router";
import styles from '../common/FormsControls/FormsControls.module.css'

const maxLength25 = maxLengthCreator(25);
const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}

            {error && <div className={styles.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
//оборачиваем наш логин форм в контейнер(хок) редакс форм и присваиваем ему уникальное имя
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    //что делать после нажатия на кнопку
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe)
    }
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}
const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, {login})(Login)