import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useContext, useEffect, useReducer, useState } from 'react';

const Footer = () => {
    return (
        <footer>
            <Container>
                <Row>
                    <Col lg={4} md={4}>
                        <div class="widget">
                            <div class="foot-logo">
                                <div class="logo">
                                    <a href="index.html" title="">
                                        {/* <img src="images/logo2.png" alt=""> */}
                                        </a>
                                </div>	
                                <p>
                                    The trio took this simple idea and built it into the world’s leading carpooling platform.
                                </p>
                            </div>
                            <ul class="location">
                                <li>
                                    <i class="fa fa-map-marker"></i>
                                    <p>33 new montgomery st.750 san francisco, CA USA 94105.</p>
                                </li>
                                <li>
                                    <i class="fa fa-phone"></i>
                                    <p>+1-56-346 345</p>
                                </li>
                            </ul>
                        </div>
                    </Col>
                    <Col Col lg={2} md={4} sm={6}>
                        <div class="widget">
                            <div class="widget-title"><h4>follow</h4></div>
                            <ul class="list-style">
                                <li><i class="fa fa-facebook-square"></i> <a href="https://web.facebook.com/shopcircut/" title="">facebook</a></li>
                                <li><i class="fa fa-twitter-square"></i><a href="https://twitter.com/login?lang=en" title="">twitter</a></li>
                                <li><i class="fa fa-instagram"></i><a href="https://www.instagram.com/?hl=en" title="">instagram</a></li>
                                <li><i class="fa fa-google-plus-square"></i> <a href="https://plus.google.com/discover" title="">Google+</a></li>
                                <li><i class="fa fa-pinterest-square"></i> <a href="https://www.pinterest.com/" title="">Pintrest</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col Col lg={2} md={4} sm={6}>
                        <div class="widget">
                            <div class="widget-title"><h4>Navigate</h4></div>
                            <ul class="list-style">
                                <li><a href="about.html" title="">about us</a></li>
                                <li><a href="contact.html" title="">contact us</a></li>
                                <li><a href="terms.html" title="">terms & Conditions</a></li>
                                <li><a href="#" title="">RSS syndication</a></li>
                                <li><a href="sitemap.html" title="">Sitemap</a></li>
                            </ul>
                        </div>
                    </Col>
                    <Col Col lg={2} md={4} sm={6}>
                        <div class="widget">
                            <div class="widget-title"><h4>useful links</h4></div>
                            <ul class="list-style">
                                <li><a href="#" title="">leasing</a></li>
                                <li><a href="#" title="">submit route</a></li>
                                <li><a href="#" title="">how does it work?</a></li>
                                <li><a href="#" title="">agent listings</a></li>
                                <li><a href="#" title="">view All</a></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
            <div class="bottombar">
                <Container>
                    <Row>
                        <Col md={12}>
                            <span class="copyright">© Pitnik 2020. All rights reserved.</span>
                            <i>
                                {/* <img src="images/credit-cards.png" alt=""> */}
                                </i>
                        </Col>
                    </Row>
                </Container>
            </div>
        </footer>
    )
}
export default Footer