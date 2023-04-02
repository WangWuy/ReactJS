import { memo } from "react"
import { Button, Col, Container, Form, Row, Badge } from 'react-bootstrap';
import Layout from "../../components/Layout/Layout"
import { logoutAction } from "../../store/actions/auth.action"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from 'react-elastic-carousel';


const images = [
    { url: "./images/resources/slick1.jpg" },
    { url: "./images/resources/slick1.jpg" },
    { url: "./images/resources/slick1.jpg" },
    { url: "./images/resources/slick1.jpg" },
  ];

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        dispatch(logoutAction());
    }

    return (
        <Layout showSidebar>
            <section>
		<div className="gap">
			<Container>
				<Row>
					<Col lg={12}>
						<div className="sliderz-slick">
							<Row>
								<Col md={12}>
									<div className="central-meta">
										<h6 className="create-post" onClick={() => navigate('/admissions')}><Badge bg="primary" text="light">Tuyển sinh hệ chính quy</Badge></h6>
										<div className="slider-for">
											<div className="slick-slide-item">
											<Carousel 	itemsToShow={5}
															itemPadding={[0, 0, 8, 8]}
															enableAutoPlay={true}
															autoPlaySpeed={2000}>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												</Carousel>
											</div>
										</div>
									</div>
								</Col>
								<Col md={12}>
									<div className="central-meta">
										<h6 className="create-post" onClick={() => navigate('/admissions')}><Badge bg="success" text="light">Tuyển sinh hệ liên thông</Badge></h6>
										<div className="slick-multiple">
											<div className="slick-slide-item">
												<Carousel 	itemsToShow={5}
															itemPadding={[0, 0, 8, 8]}
															enableAutoPlay={1}
															autoPlaySpeed={2000}>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												</Carousel>
											</div>
											<div className="slick-slide-item">
												{/* <img src="./images/resources/slick2.jpg" className="img-fluid" alt=""/> */}
											</div>
										</div>
									</div>
									<div className="central-meta">
										<h6 className="create-post" onClick={() => navigate('/admissions')}><Badge bg="warning" text="light">Tuyển sinh cao học</Badge></h6>
										<div className="slick-multiple">
											<div className="slick-slide-item">
											<Carousel 	itemsToShow={5}
															itemPadding={[0, 0, 8, 8]}
															enableAutoPlay={true}
															autoPlaySpeed={2000}>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												</Carousel>
											</div>
										</div>
									</div>
									<div className="central-meta">
										<h6 className="create-post" onClick={() => navigate('/admissions')}><Badge bg="success" text="light">Tuyển sinh thạc sĩ</Badge></h6>
										<div className="slick-multiple">
											<div className="slick-slide-item">
											<Carousel 	itemsToShow={5}
															itemPadding={[0, 0, 8, 8]}
															enableAutoPlay={true}
															autoPlaySpeed={2000}>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												</Carousel>
											</div>
										</div>
									</div>
									<div className="central-meta">
										<h6 className="create-post" onClick={() => navigate('/admissions')}><Badge bg="info" text="light">Tuyển sinh đào tạo từ xa</Badge></h6>
										<div className="slick-multiple">
											<div className="slick-slide-item">
											<Carousel 	itemsToShow={5}
															itemPadding={[0, 0, 8, 8]}
															enableAutoPlay={true}
															autoPlaySpeed={2000}>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												<img src="./images/resources/slick1.jpg" className="img-fluid" alt=""/>
												</Carousel>
											</div>
										</div>
									</div>
								</Col>
							</Row>
						</div>
					</Col>
				</Row>
			</Container>
		</div>
	</section>
        </Layout>
    )
}
export default memo(Home);