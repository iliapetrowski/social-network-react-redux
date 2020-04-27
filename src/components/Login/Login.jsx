import React from "react";
import {Field, reduxForm} from 'redux-form'


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder={'login'}  name={"login"} component={'input'}/>
            </div>
            <div>
                <Field placeholder={'password'} name={"password"} component={'input'}/>
            </div>
            <div>
                <Field component={"input"} type={'checkbox'} name={"rememberMe"}/> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}
//оборачиваем наш логин форм в контейнер(хок) редакс форм и присваиваем ему уникальное имя
const LoginReduxForm =  reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    //что делать после нажатия на кнопку
    const onSubmit=(formData) =>{
        console.log(formData)
    }
    return <div>
        <h1>LOGIN</h1>
        <LoginReduxForm onSubmit={onSubmit} />
    </div>
}
export default Login