import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/actions/auth.action";
import SimpleImageSlider from "react-simple-image-slider";
import axios from 'axios';

const Header = () => {
    const sliderImages = [ 
        {
           url: "./images/tuyensinh.jpeg",
        },
     ];

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        dispatch(logoutAction());
    }
    const [banner, setBanner] = useState([]);
    
    const [slider ,setsliderImages] = useState([]);
    useEffect( () => {
        axios({
            url:'http://127.0.0.1:8000/slider/',
            method:'GET', 
            headers:{
                'Authorization': `Bearer 6YzuFy9nlUnR9YzjjKYZAukv9CDaWz`,
            }
        }).then(res => {
            const newBanner = res.data.map(banner=>banner.image)
            setBanner(newBanner) 
            const newSliderBanner = newBanner.map((slider)=>{
                return {url: slider}
            })
            setBanner(newSliderBanner) 
            setsliderImages(newSliderBanner)
          })
       }, []);
       console.log(11, slider);
       console.log(2, sliderImages);
    

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
                    <div className="user-img">
                        <h5></h5>
                        <img src="images/resources/admin.jpg" alt=""/>
                        <span className="status f-online"></span>
                        <div className="user-setting">
                            <span className="seting-title">Thiết lập người dùng</span>
                            <ul className="log-out">
                                <li><a title="" onClick={() => navigate('/registration')}><i className="ti-pencil-alt"></i>Chỉnh sửa thông tin</a></li>
                                <li><a href="logout.html" title="" onClick={handleLogout}><i className="ti-power-off"></i>Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                    <span className="ti-settings main-menu" data-ripple=""></span>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><a className="text-white " onClick={() => navigate('/')} title=""><i className="fa fa-home"></i> Trang chủ</a>
                        </li>
                        <li><a className="text-white " onClick={() => navigate('/registration')} title=""><i className="fa fa-film"></i> Đăng ký</a>
                        </li>
                        <li><a className="text-white " onClick={() => navigate('/admissions')} title=""><i className="fa fa-female"></i> Tuyển sinh</a>
                        </li>
                        <li><a className="text-white " onClick={() => navigate('/falcuty')} title=""><i className="fa fa-graduation-cap"></i> Các khoa</a>
                            <ul>
                                <li><a onClick={() => navigate('/falcuty')} title="">Khoa A</a></li>
                                <li><a onClick={() => navigate('/falcuty')} title="">Khoa A</a></li>
                                <li><a onClick={() => navigate('/falcuty')} title="">Khoa A</a></li>
                                <li><a onClick={() => navigate('/falcuty')} title="">Khoa A</a></li>
                                <li><a onClick={() => navigate('/falcuty')} title="">Khoa A</a></li>
                                <li><a onClick={() => navigate('/falcuty')} title="">Khoa A</a></li>
                            </ul>
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
                        <figure>  
                            <SimpleImageSlider
                                width="100%"
                                height={500}
                                images= {sliderImages}
                                // showBullets={true}
                                // showNavs={true}
                            />
                        </figure>
                    </div>
                </div>
            </section>
        </header>
    )
}
export default Header