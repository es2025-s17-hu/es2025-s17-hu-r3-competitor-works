import {useForm} from "react-hook-form";
import api from '../axios.js';
import {useContext, useState} from "react";
import {AuthContext} from "../authContext.jsx";
import {useNavigate} from "react-router";

export default function LoginPage() {
    const [loginError, setLoginError] = useState('');
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    const {
        register,
        formState: { errors },
        handleSubmit
    } = useForm();

    const onSubmit = async (values) => {

        try {
            const { data } = await api.post('/login', {
                username: values.username,
                password: values.password
            });

            login(data.token);
            navigate('/dashboard');
        } catch (e) {
            setLoginError('Invalid credentials');
        }
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)} className={'login-form'}>
                <h1>Log In</h1>
                <p>{loginError}</p>
                <div className={'form-row'}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id={'username'}
                           className={'form-input'}
                           {...register('username', { required: true })}
                    />
                    {errors.username && (<p>Username is required</p>)}
                </div>
                <div className={'form-row'}>
                    <label htmlFor="password">Password</label>
                    <input type="password" id={'password'}
                           className={'form-input'}
                        {...register('password', { required: true })}
                    />
                    {errors.password && (<p>Password is required</p>)}
                </div>
                <div>
                    <button className={'primary-button'}>Log In</button>
                </div>
            </form>
        </>
    )
}