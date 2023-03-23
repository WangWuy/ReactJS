import AuthLayout from "../../components/AuthLayout/AuthLayout";
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { emailValidationProperty, fullNameValidation, passwordValidationPropery } from '../../utils/validations/auth';


const Register = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleLoginSubmit = (data) => {

    }
    return (
        <AuthLayout>
            <div className="form-title">
                Đăng ký
                <span></span>
            </div>
            <form onSubmit={handleSubmit(handleLoginSubmit)} className="we-form" >
                <input {...register(fullNameValidation.name, fullNameValidation.options)} placeholder='Họ và tên' />
                <span>{errors.fullName && <p className='form-error'>{errors.fullName.message}</p>}</span>
                <input {...register(emailValidationProperty.name, emailValidationProperty.options)} placeholder='Email' />
                <span>{errors.email && <p className='form-error'>{errors.email.message}</p>}</span>
                <input {...register(passwordValidationPropery.name, passwordValidationPropery.options)} type='password' placeholder='Password' />
                <span>{errors.password && <p className='form-error'>Password is required.</p>}</span>
                <input type="checkbox" /><label>Lưu mật khẩu</label>
                <Link to='/forgot-password' className="forgot" >Quên mật khẩu</Link>
                <button>Login</button>
            </form>
            <span>Bạn đã có tài khoản? <Link className="we-account" to={'/login'} title="">Đăng nhập</Link></span>
            <span style={{cursor: 'pointer'}} >Đăng nhập với google</span>
        </AuthLayout>
    )
}

export default Register;