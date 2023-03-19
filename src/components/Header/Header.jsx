import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';

const Header = () => {
    return (
        <header>
            {/* <div className="wavy-wraper">
                <div className="wavy">
                    <span style="--i:1;">p</span>
                    <span style="--i:2;">i</span>
                    <span style="--i:3;">t</span>
                    <span style="--i:4;">n</span>
                    <span style="--i:5;">i</span>
                    <span style="--i:6;">k</span>
                    <span style="--i:7;">.</span>
                    <span style="--i:8;">.</span>
                    <span style="--i:9;">.</span>
                </div>
            </div> */}
            
            <div className="responsive-header">
                <div className="mh-head first Sticky">
                    <span className="mh-btns-left">
                        <a className="" href="#menu"><i className="fa fa-align-justify"></i></a>
                    </span>
                    <span className="mh-text">
                        <a href="newsfeed.html" title="">
                            {/* <img src="../public/logo2.png" alt=""> */}
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
                <nav id="menu" className="res-menu">
                    <ul>
                        <li><span>Home Pages</span> 
                            <ul>
                                <li><a href="index.html" title="">Pitnik Default</a></li>
                                <li><a href="company-landing.html" title="">Company Landing</a></li>
                                <li><a href="pitrest.html" title="">Pitrest</a></li>
                                <li><a href="redpit.html" title="">Redpit</a></li>
                                <li><a href="redpit-category.html" title="">Redpit Category</a></li>
                                <li><a href="soundnik.html" title="">Soundnik</a></li>
                                <li><a href="soundnik-detail.html" title="">Soundnik Single</a></li>
                                <li><a href="career.html" title="">Pitjob</a></li>
                                <li><a href="shop.html" title="">Shop</a></li>
                                <li><a href="classified.html" title="">Classified</a></li>
                                <li><a href="pitpoint.html" title="">PitPoint</a></li>
                                <li><a href="pittube.html" title="">Pittube</a></li>
                                <li><a href="chat-messenger.html" title="">Messenger</a></li>
                            </ul>
                        </li>
                        <li><span>Pittube</span>
                            <ul>
                                <li><a href="pittube.html" title="">Pittube</a></li>
                                <li><a href="pittube-detail.html" title="">Pittube single</a></li>
                                <li><a href="pittube-category.html" title="">Pittube Category</a></li>
                                <li><a href="pittube-channel.html" title="">Pittube Channel</a></li>
                                <li><a href="pittube-search-result.html" title="">Pittube Search Result</a></li>
                            </ul>
                        </li>
                        <li><span>PitPoint</span>
                            <ul>
                                <li><a href="pitpoint.html" title="">PitPoint</a></li>
                                <li><a href="pitpoint-detail.html" title="">Pitpoint Detail</a></li>
                                <li><a href="pitpoint-list.html" title="">Pitpoint List style</a></li>
                                <li><a href="pitpoint-without-baner.html" title="">Pitpoint without Banner</a></li>
                                <li><a href="pitpoint-search-result.html" title="">Pitpoint Search</a></li>
                            </ul>
                        </li>
                        <li><span>Pitjob</span>
                            <ul>
                                <li><a href="career.html" title="">Pitjob</a></li>
                                <li><a href="career-detail.html" title="">Pitjob Detail</a></li>
                                <li><a href="career-search-result.html" title="">Job seach page</a></li>
                                <li><a href="social-post-detail.html" title="">Social Post Detail</a></li>
                            </ul>
                        </li>
                        <li><span>Timeline</span>
                            <ul>
                                <li><a href="timeline.html" title="">Timeline</a></li>
                                <li><a href="timeline-photos.html" title="">Timeline Photos</a></li>
                                <li><a href="timeline-videos.html" title="">Timeline Videos</a></li>
                                <li><a href="timeline-groups.html" title="">Timeline Groups</a></li>
                                <li><a href="timeline-friends.html" title="">Timeline Friends</a></li>
                                <li><a href="timeline-friends2.html" title="">Timeline Friends-2</a></li>
                                <li><a href="about.html" title="">Timeline About</a></li>
                                <li><a href="blog-posts.html" title="">Timeline Blog</a></li>
                                <li><a href="friends-birthday.html" title="">Friends' Birthday</a></li>
                                <li><a href="newsfeed.html" title="">Newsfeed</a></li>
                                <li><a href="search-result.html" title="">Search Result</a></li>
                            </ul>
                        </li>
                        <li><span>Favourit Page</span>
                            <ul>
                                <li><a href="fav-page.html" title="">Favourit Page</a></li>
                                <li><a href="fav-favers.html" title="">Fav Page Likers</a></li>
                                <li><a href="fav-events.html" title="">Fav Events</a></li>
                                <li><a href="fav-event-invitations.html" title="">Fav Event Invitations</a></li>
                                <li><a href="event-calendar.html" title="">Event Calendar</a></li>
                                <li><a href="fav-page-create.html" title="">Create New Page</a></li>
                                <li><a href="price-plans.html" title="">Price Plan</a></li>
                            </ul>
                        </li>
                        <li><span>Forum</span>
                            <ul>
                                <li><a href="forum.html" title="">Forum</a></li>
                                <li><a href="forum-create-topic.html" title="">Forum Create Topic</a></li>
                                <li><a href="forum-open-topic.html" title="">Forum Open Topic</a></li>
                                <li><a href="forums-category.html" title="">Forum Category</a></li>
                            </ul>
                        </li>
                        <li><span>Featured</span>
                            <ul>
                                <li><a href="chat-messenger.html" title="">Messenger (Chatting)</a></li>
                                <li><a href="notifications.html" title="">Notifications</a></li>
                                <li><a href="badges.html" title="">Badges</a></li>
                                <li><a href="faq.html" title="">Faq's</a></li>
                                <li><a href="contribution.html" title="">Contriburion Page</a></li>
                                <li><a href="manage-page.html" title="">Manage Page</a></li>
                                <li><a href="weather-forecast.html" title="">weather-forecast</a></li>
                                <li><a href="statistics.html" title="">Statics/Analytics</a></li>
                                <li><a href="shop-cart.html" title="">Shop Cart</a></li>
                            </ul>
                        </li>
                        <li><span>Account Setting</span>
                            <ul>
                                <li><a href="setting.html" title="">Setting</a></li>
                                <li><a href="privacy.html" title="">Privacy</a></li>
                                <li><a href="support-and-help.html" title="">Support & Help</a></li>
                                <li><a href="support-and-help-detail.html" title="">Support Detail</a></li>
                                <li><a href="support-and-help-search-result.html" title="">Support Search</a></li>
                            </ul>
                        </li>
                        <li><span>Authentication</span>
                            <ul>
                                <li><a href="login.html" title="">Login Page</a></li>
                                <li><a href="register.html" title="">Register Page</a></li>
                                <li><a href="logout.html" title="">Logout Page</a></li>
                                <li><a href="coming-soon.html" title="">Coming Soon</a></li>
                                <li><a href="error-404.html" title="">Error 404</a></li>
                                <li><a href="error-404-2.html" title="">Error 404-2</a></li>
                                <li><a href="error-500.html" title="">Error 500</a></li>
                            </ul>
                        </li>
                        <li><span>Tools</span>
                            <ul>
                                <li><a href="typography.html" title="">Typography</a></li>
                                <li><a href="popup-modals.html" title="">Popups/Modals</a></li>
                                <li><a href="post-versions.html" title="">Post Versions</a></li>
                                <li><a href="sliders.html" title="">Sliders / Carousel</a></li>
                                <li><a href="google-map.html" title="">Google Maps</a></li>
                                <li><a href="widgets.html" title="">Widgets</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>
                <nav id="shoppingbag">
                    <div>
                        <div className="">
                            <form method="post">
                                <div className="setting-row">
                                    <span>use night mode</span>
                                    <input type="checkbox" id="nightmode"/> 
                                    <label for="nightmode" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Notifications</span>
                                    <input type="checkbox" id="switch2"/> 
                                    <label for="switch2" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Notification sound</span>
                                    <input type="checkbox" id="switch3"/> 
                                    <label for="switch3" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>My profile</span>
                                    <input type="checkbox" id="switch4"/> 
                                    <label for="switch4" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Show profile</span>
                                    <input type="checkbox" id="switch5"/> 
                                    <label for="switch5" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                            </form>
                            <h4 className="panel-title">Account Setting</h4>
                            <form method="post">
                                <div className="setting-row">
                                    <span>Sub users</span>
                                    <input type="checkbox" id="switch6" /> 
                                    <label for="switch6" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>personal account</span>
                                    <input type="checkbox" id="switch7" /> 
                                    <label for="switch7" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Business account</span>
                                    <input type="checkbox" id="switch8" /> 
                                    <label for="switch8" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Show me online</span>
                                    <input type="checkbox" id="switch9" /> 
                                    <label for="switch9" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Delete history</span>
                                    <input type="checkbox" id="switch10" /> 
                                    <label for="switch10" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                                <div className="setting-row">
                                    <span>Expose author name</span>
                                    <input type="checkbox" id="switch11" /> 
                                    <label for="switch11" data-on-label="ON" data-off-label="OFF"></label>
                                </div>
                            </form>
                        </div>
                    </div>
                </nav>
            </div>
            
            <div className="topbar stick">
                <div className="logo">
                    <a title="" href="newsfeed.html">
                        {/* <img src="images/logo.png" alt=""> */}
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
                        <span>Trang chủ</span>
                    </div>
                    <ul className="setting-area">
                        <li><a href="newsfeed.html" title="Home" data-ripple=""><i className="fa fa-home"></i></a></li>
                        <li><a href="#" title="Help" data-ripple=""><i className="fa fa-question-circle"></i></a>
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
                        {/* <img src="images/resources/admin.jpg" alt=""> */}
                        <span className="status f-online"></span>
                        <div className="user-setting">
                            <span className="seting-title">Thiết lập người dùng</span>
                            <ul className="log-out">
                                <li><a href="setting.html" title=""><i className="ti-pencil-alt"></i>Chỉnh sửa thông tin cá nhân</a></li>
                                <li><a href="logout.html" title=""><i className="ti-power-off"></i>Đăng xuất</a></li>
                            </ul>
                        </div>
                    </div>
                    <span className="ti-settings main-menu" data-ripple=""></span>
                </div>
                <nav>
                    <ul className="nav-list">
                        <li><a className="" href="#" title=""><i className="fa fa-home"></i> Home Pages</a>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-film"></i> Pittube</a>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-female"></i> PitPoint</a>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-graduation-cap"></i> Pitjob</a>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-heart"></i> Favourit Page</a>
                        </li>
                        <li><a className="" href="#" title=""><i className="fa fa-forumbee"></i> Forum</a>
                        </li>
                    </ul>
                    
                </nav>
            </div>
                
            <section>
                <div className="page-header">
                    <div className="header-inner">
                        <h2>Slick Sliders</h2>
                        <p>
                            Welcome to Pitnik Social Network. Here you’ll find all the typography, content sources, & ready made elemets as you want. you can use to show on your custom pages.
                        </p>
                    </div>
                    <figure>
                        {/* <img src="images/resources/baner-badges.png" alt=""> */}
                        </figure>
                </div>
            </section>
        </header>
    )
}
export default Header