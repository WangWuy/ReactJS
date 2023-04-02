import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { loginAction } from '../../store/actions/auth.action';
import { useForm } from 'react-hook-form';
import { emailValidationProperty, passwordValidationPropery } from '../../utils/validations/auth';
import { memo} from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const auth = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const handleLoginSubmit = async (data) => {
    dispatch(loginAction(data));
  }

  return (
    <AuthLayout>
      <div className="form-title">
        Đăng nhập
        <span></span>
      </div>
      <form onSubmit={handleSubmit(handleLoginSubmit)} className="we-form" >
        <input {...register(emailValidationProperty.name, emailValidationProperty.options)} placeholder='Username' />
        <span>{errors.email && <p className='form-error'>{errors.email.message}</p>}</span>
        <input {...register(passwordValidationPropery.name, passwordValidationPropery.options)} type='password' placeholder='Password' />
        <span>{errors.password && <p className='form-error'>{errors.password.message}</p>}</span>
        <span>{auth.message && <p className='form-error'>{auth.message}</p>}</span>
        <input type="checkbox" /><label>Lưu mật khẩu</label>
        {/* <Link to='/forgot-password' className="forgot" >Quên mật khẩu</Link> */}
        <button>Login</button>
      </form>
      <span>Bạn chưa có tài khoản? <Link className="we-account" to={'/register'} title="">Đăng ký</Link></span>
    </AuthLayout>
  )
}

export default memo(Login);


