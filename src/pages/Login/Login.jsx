import { useAuth0 } from '@auth0/auth0-react';
import { useContext, useEffect, useReducer, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { FaKey } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import { loginAction } from '../../store/actions/auth.action';
import { AuthContext, AuthDispatchContext, OAuth2Context } from '../../store/contexts/auth.context';
const Login = () => {
    const navigate = useNavigate();

    const {loginWithPopup, isAuthenticated} = useContext(OAuth2Context);

    const [isAuth, setIsAuth] = useState(isAuthenticated);

    const dispatch = useContext(AuthDispatchContext);

    useEffect(() => {
        setIsAuth(isAuthenticated);
    });

    const handleLoginOAuth2 = () => {
        loginWithPopup();
    }


    const [userEmail, setUserEmail] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [error, setError] = useState('');
    const [submit, setSubmit] = useState(false);

    const handleChangeEmail = (e) => {
        setUserEmail(e.target.value);
    }

    const handleChangePassword = (e) => {
        setUserPassword(e.target.value);
    }

    const loginSubmitForm = (e) => {
        setSubmit(true);
        if (!userEmail || !userPassword) {
            setError('user email or user password is not null');
            e.preventDefault();
            return;
        }
        setError('');
        dispatch(loginAction(true));
        e.preventDefault();

    }

    useEffect(() => {
        console.log(isAuth);
        if(isAuth){
            dispatch(loginAction(true));
            navigate('/');
        }

    },[isAuth]);

    useEffect(() => {
        if (!error && submit) {
            navigate('/forgot-password');
            setSubmit(false);
        }
    }, [error]);

    return (
        <div className="www-layout">
            <section>
                <div className="gap no-gap signin whitish medium-opacity">
                    <div className="bg-image">
                    </div>
                    <Container>
                        <Row>
                            <Col lg={8} >
                                <div className="big-ad">
                                    <figure>
                                        <img src="images/logo2.png" alt="" />
                                    </figure>
                                    <h1>Welcome to the Pitnik</h1>
                                    <p>
                                        Pitnik is a social network template that can be used to
                                        connect people. use this template for multipurpose social
                                        activities like job, dating, posting, bloging and much more.
                                        Now join & Make Cool Friends around the world !!!
                                    </p>

                                    <div className="fun-fact">
                                        <Row>
                                            <Col lg={3} md={3} sm={4}>
                                                <div className="fun-box">
                                                    <i className="ti-check-box"></i>
                                                    <h6>Registered People</h6>
                                                    <span>1,01,242</span>
                                                </div>
                                            </Col>
                                            <Col lg={3} md={3} sm={4}>
                                                <div className="fun-box">
                                                    <i className="ti-layout-media-overlay-alt-2"></i>
                                                    <h6>Posts Published</h6>
                                                    <span>21,03,245</span>
                                                </div>
                                            </Col>
                                            <Col lg={3} md={3} sm={4}>
                                                <div className="fun-box">
                                                    <i className="ti-user"></i>
                                                    <h6>Online Users</h6>
                                                    <span>40,145</span>
                                                </div>
                                            </Col>
                                        </Row>
                                    </div>
                                    <div className="barcode">
                                        <figure>
                                            <img src="images/resources/Barcode.jpg" alt="" />
                                        </figure>
                                        <div className="app-download">
                                            <span>
                                                Download Mobile App and Scan QR Code to login
                                            </span>
                                            <ul className="colla-apps">
                                                <li>
                                                    <a title="" href="https://play.google.com/store?hl=en">
                                                        <img src="images/android.png" alt="" />
                                                        android
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        title=""
                                                        href="https://www.apple.com/lae/ios/app-store/"
                                                    >
                                                        <img src="images/apple.png" alt="" />
                                                        iPhone
                                                    </a>
                                                </li>
                                                <li>
                                                    <a title="" href="https://www.microsoft.com/store/apps">
                                                        <img src="images/windows.png" alt="" />
                                                        Windows
                                                    </a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="we-login-register">
                                    <div className="form-title">
                                        <FaKey />Đăng nhập
                                        <span></span>
                                    </div>
                                    <Form onSubmit={loginSubmitForm} className="we-form" >
                                        <Form.Control onChange={handleChangeEmail} id='email' placeholder='Email'></Form.Control>
                                        <Form.Control onChange={handleChangePassword} id='password' type='password' placeholder='Password'></Form.Control>
                                        <span style={{ color: 'yellow' }}>{error}</span>
                                        <input type="checkbox" /><label>Lưu mật khẩu</label>
                                        <Link to='/forgot-password' className="forgot underline" >Quên mật khẩu</Link>
                                        <button>Login</button>
                                    </Form>
                                    <span>Bạn chưa có tài khoản? <Link className="we-account underline" to={'/register'} title="">Đăng ký</Link></span>
                                    <span onClick={handleLoginOAuth2} >Đăng nhập với oauth2</span>
                                </div>
                                <hr />
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}

export default Login;
