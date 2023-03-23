import { useAuth0 } from '@auth0/auth0-react';
import { Link, useNavigate } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { loginAction } from '../../store/actions/auth.action';
import { AuthContext, AuthDispatchContext, OAuth2Context } from '../../store/contexts/auth.context';
import { useForm } from 'react-hook-form';
import { emailValidationProperty, passwordValidationPropery } from '../../utils/validations/auth';

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginSubmit = (data) => {
        
    }


    return (
        <AuthLayout>
            <div className="form-title">
                Đăng nhập
                <span></span>
            </div>
            <form onSubmit={handleSubmit(handleLoginSubmit)} className="we-form" >
                <input {...register(emailValidationProperty.name, emailValidationProperty.options)} placeholder='Email' />
                <span>{errors.email && <p className='form-error'>{errors.email.message}</p>}</span>
                <input {...register(passwordValidationPropery.name, passwordValidationPropery.options)} type='password' placeholder='Password' />
                <span>{errors.password && <p className='form-error'>{errors.password.message}</p>}</span>
                <input type="checkbox" /><label>Lưu mật khẩu</label>
                <Link to='/forgot-password' className="forgot" >Quên mật khẩu</Link>
                <button>Login</button>
            </form>
            <span>Bạn chưa có tài khoản? <Link className="we-account" to={'/register'} title="">Đăng ký</Link></span>
            <span style={{cursor: 'pointer'}} >Đăng nhập với google</span>
        </AuthLayout>
    )
}

export default Login;


