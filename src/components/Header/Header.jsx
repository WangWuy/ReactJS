import {Button, Form } from 'react-bootstrap';
import {useNavigate } from 'react-router-dom';
import { useDispatch } from "react-redux";
import { logoutAction } from "../../store/actions/auth.action";
import { memo } from 'react';
import Slider from '../Sliders/Slider';

const Header = () => {
    

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        dispatch(logoutAction());
    }
    return (
        <header>
            <div className="responsive-header">
                <div className="mh-head first Sticky">
                    <span className="mh-btns-left">
                        <a className="" href="#menu"><i className="fa fa-align-justify"></i></a>
                    </span>
                    <span className="mh-text">
                        <a href="newsfeed.html" title="">
                            <img src="../public/logo2.png" alt=""/>
                            </a>
                    </span>
                    <span className="mh-btns-right">
                        <a className="fa fa-sliders" href="#shoppingbag"></a>
                    </span>
                </div>
                <div className="mh-head second">
                    <form className="mh-form">
                        <input placeholder="search" />
                        <a href="#/" className="fa fa-search"></a>
                    </form>
                </div>
            </div>
            
            <div className="topbar stick">
                <div className="logo">
                    <a title="" href="newsfeed.html">
                        <img src="images/logo.png" alt=""/>
                        </a>
                </div>
                <div className="top-area">
                    <div className="main-menu">
                        <span>
                            <i className="fa fa-braille"></i>
                        </span>
                    </div>
                    <div className="top-search">
                        <Form method="post" className="">
                            <Form.Control type="text" placeholder="Search People, Pages, Groups etc"></Form.Control>
                            <button data-ripple><i className="ti-search"></i></button>
                        </Form>
                    </div>
                    <div className="page-name">
                        <span>Đại học</span>
                    </div>
                    <ul className="setting-area">
                        <li><a href="newsfeed.html" title="Home" data-ripple=""><i className="fa fa-home"></i></a></li>
                        <li><a  title="Help" data-ripple=""><i className="fa fa-question-circle"></i></a>
                            <div className="dropdowns helps">
                                <span>Quick Help</span>
                                <Form method="post">
                                    <Form.Control  type="text" placeholder="How can we help you?"></Form.Control>
                                </Form>
                                <span>Help with this page</span>
                                <ul className="help-drop">
                                    <li><a href="forum.html" title=""><i className="fa fa-book"></i>Community & Forum</a></li>
                                    <li><a href="faq.html" title=""><i className="fa fa-question-circle-o"></i>FAQs</a></li>
                                    <li><a href="career.html" title=""><i className="fa fa-building-o"></i>Carrers</a></li>
                                    <li><a href="privacy.html" title=""><i className="fa fa-pencil-square-o"></i>Terms & Policy</a></li>
                                    <li><a href="#" title=""><i className="fa fa-map-marker"></i>Contact</a></li>
                                    <li><a href="#" title=""><i className="fa fa-exclamation-triangle"></i>Report a Problem</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                    {/* <div className="user-img">
                        <h5></h5>
                        <img src="images/resources/admin.jpg" alt=""/>
                        <span className="status f-online"></span>
                        <div className="user-setting">
                            <span className="seting-title">Thiết lập người dùng</span>
                            <ul className="log-out">
                                <li><a title="" onClick={() => navigate('/update-profile')}><i className="ti-pencil-alt"></i>Chỉnh sửa thông tin</a></li>
                                <li><a href="logout.html" title="" onClick={handleLogout}><i className="ti-power-off"></i>Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div> */}
                    <Button className="mt-3" onClick={handleLogout}>Đăng xuất</Button>
                    <span className="ti-settings main-menu" data-ripple=""></span>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><a className="text-white " onClick={() => navigate('/')} title=""><i className="fa fa-home"></i> Trang chủ</a>
                        </li>
                        <li><a className="text-white " onClick={() => navigate('/update-profile')} title=""><i className="fa fa-film"></i> Đăng ký</a>
                        </li>
                        <li><a className="text-white " onClick={() => navigate('/admissions')} title=""><i className="fa fa-female"></i> Tuyển sinh</a>
                        </li>
                        <li><a className="text-white "  title=""><i className="fa fa-graduation-cap"></i> Các khoa</a>
                        </li>
                        <li><a className="text-white "  title=""><i className="fa fa-heart"></i> Đặt câu hỏi</a>
                        </li>
                        <li><a className="text-white "  title=""><i className="fa fa-forumbee"></i> Forum</a>
                        </li>
                    </ul>
                    
                </nav>
            </div>
                
            <section>
                <div className="">
                    <div className="">
                        <Slider />
                    </div>
                </div>
            </section>
        </header>
    )
}
export default memo(Header);