import { Link } from 'react-router-dom';
import AuthLayout from '../../components/AuthLayout/AuthLayout';
import { loginAction } from '../../store/actions/auth.action';
import { useForm } from 'react-hook-form';
import { emailValidationProperty, passwordValidationPropery } from '../../utils/validations/auth';
import { memo, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { HTTP_ERROR } from '../../constants/error.const';

const Login = () => {
  const { register, handleSubmit, setFocus, setError, clearErrors, formState: { errors } } = useForm();
  const [submit, setSubmit] = useState(false);

  const auth = useSelector(state => state.authReducer);
  const dispatch = useDispatch();

  const handleLoginSubmit = async (data) => {
    setSubmit(true);
    dispatch(loginAction(data));
  }

  useEffect(() => {
    const firstError = Object.keys(errors).reduce((field, a) => {
      console.log(field, a);
      return !!errors[field] ? field : a;
    }, null);


    if (firstError) {
      setFocus(firstError);
    }

  }, [errors, setFocus]);

  useEffect(() => {
    if (!submit) {
      clearErrors(HTTP_ERROR);
    }
  }, [submit]);

  useEffect(() => {
    if (auth.message && submit) {
      setError(HTTP_ERROR, {
        message: auth.message
      }, { shouldFocus: true });
    }
  }, [auth.message, submit]);

  return (
    <AuthLayout>
      <div className="form-title">
        Đăng nhập
        <span></span>
      </div>
      <form onSubmit={handleSubmit(handleLoginSubmit)} className="we-form" >
        <input
          {...register(emailValidationProperty.name, emailValidationProperty.options)}
          placeholder='Username'
          onFocus={() => setSubmit(false)}
        />
        <span>{errors.email && <p className='form-error'>{errors.email.message}</p>}</span>
        <input
          {...register(passwordValidationPropery.name, passwordValidationPropery.options)}
          type='password'
          placeholder='Password'
          onFocus={() => setSubmit(false)}
        />
        <span>{errors.password && <p className='form-error'>{errors.password.message}</p>}</span>
        <span>{errors[HTTP_ERROR] && <p className='form-error'>{errors[HTTP_ERROR]?.message}</p>}</span>
        <input type="checkbox" /><label>Lưu mật khẩu</label>
        <Link to='/forgot-password' className="forgot" >Quên mật khẩu</Link>
        <button>Login</button>
      </form>
      <span>Bạn chưa có tài khoản? <Link className="we-account" to={'/register'} title="">Đăng ký</Link></span>
    </AuthLayout>
  )
}

export default memo(Login);


