import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailValidationProperty, fullNameValidation, passwordValidationPropery } from '../../utils/validations/auth';
import { useDispatch, useSelector } from 'react-redux';
import { loginAction } from '../../store/actions/auth.action';
import { useFormik } from 'formik';
import axios from 'axios';
import { useState } from "react";

const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const handleLoginSubmit = (data) => {
        dispatch(loginAction(data));
    }

    const [userRegister, setUserLogin] = useState({});

    const formik = useFormik({
        enableReinitialize : true,
        initialValues: {
            email: userRegister.email,
            username: userRegister.username,
            password: userRegister.password
        },
        onSubmit: (values) => {
            const formData = new FormData();
            formData.append('email', values.email);
            formData.append('username', values.username);
            formData.append('password', values.password);
            axios({
                url:'http://127.0.0.1:8000/users/',
                method:'POST', 
                data: formData,
                headers:{
                    'Authorization': `Bearer 6YzuFy9nlUnR9YzjjKYZAukv9CDaWz`,
                }
            }).then(res => {})
        },
      })

    return (
        <AuthLayout>
            <div className="form-title">
                Đăng ký
                <span></span>
            </div>
            <form onSubmit={formik.handleSubmit} className="we-form" >
                <input placeholder='Email' name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                <span>{errors.email && <p className='form-error'>{errors.email.message}</p>}</span>

                <input placeholder='Username' name="username" onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                <span>{errors.email && <p className='form-error'>{errors.email.message}</p>}</span>

                <input type='password' placeholder='Password' name="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>

                <span>{errors.password && <p className='form-error'>{errors.password.message}</p>}</span>
                <input type="checkbox" /><label>Lưu mật khẩu</label>
                {/* <Link to='/forgot-password' className="forgot" >Quên mật khẩu</Link> */}
                <button type="submit">Đăng ký</button>
            </form>
            <span>Bạn đã có tài khoản? <Link className="we-account" to={'/login'} title="">Đăng nhập</Link></span>
            {/* <span style={{cursor: 'pointer'}} >Đăng nhập với google</span> */}
        </AuthLayout>
    )
}

export default Register;