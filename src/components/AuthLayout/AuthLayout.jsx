import {Col, Container, Row } from 'react-bootstrap';

const AuthLayout = ({children}) => {
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
                                        <img src="./images/logo2.png" alt="" />
                                    </figure>
                                    <h1>Hỗ trợ tuyển sinh</h1>
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
                                            <img src="./images/resources/Barcode.jpg" alt="" />
                                        </figure>
                                        <div className="app-download">
                                            <span>
                                                Download Mobile App and Scan QR Code to login
                                            </span>
                                            <ul className="colla-apps">
                                                <li>
                                                    <a title="" href="https://play.google.com/store?hl=en">
                                                        <img src="./images/android.png" alt="" />
                                                        android
                                                    </a>
                                                </li>
                                                <li>
                                                    <a
                                                        title=""
                                                        href="https://www.apple.com/lae/ios/app-store/"
                                                    >
                                                        <img src="./images/apple.png" alt="" />
                                                        iPhone
                                                    </a>
                                                </li>
                                                <li>
                                                    <a title="" href="https://www.microsoft.com/store/apps">
                                                        <img src="./images/windows.png" alt="" />
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
                               {children}
                               </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </section>
        </div>
    )
}
export default AuthLayout;