import { memo } from "react"
import { Button, Col, Container, Form, Row, Badge } from 'react-bootstrap';
import Layout from "../../components/Layout/Layout"
import { logoutAction } from "../../store/actions/auth.action"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import SimpleImageSlider from "react-simple-image-slider";
import Carousel from 'react-elastic-carousel';
import { useEffect } from "react";
import { getCategories } from "../../store/actions/categories.action";


const images = [
	{ url: "./images/resources/slick1.jpg" },
	{ url: "./images/resources/slick1.jpg" },
	{ url: "./images/resources/slick1.jpg" },
	{ url: "./images/resources/slick1.jpg" },
];

const Home = () => {
	const dispatch = useDispatch();
	const categoies = useSelector(state => state.categoriesReducer);

	console.log(categoies);

	const navigate = useNavigate();
	const handleLogout = (e) => {
		dispatch(logoutAction());
	}

	useEffect(() => {
		dispatch(getCategories());
	},[]);


	return (
		<Layout showSidebar>
			<section>
				<div className="gap">
					<Container>
						<Row>
							<Col lg={12}>
								<div className="sliderz-slick">
									<Row>
										{categoies.data.map((category,key) => 
											<Col md={12}>
											<div className="central-meta">
											<h6 className="create-post" onClick={() => navigate('/admissions')}><Badge bg="primary" text="light">{category.name}</Badge></h6>
												<div className="slider-for">
													<div className="slick-slide-item">
														<Carousel itemsToShow={5}
															itemPadding={[0, 0, 8, 8]}
															enableAutoPlay={true}
															autoPlaySpeed={2000}>
															{[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, key) => <img key={key} src="./images/resources/slick1.jpg" className="img-fluid" alt="" />)}
														</Carousel>
													</div>
												</div>
											</div>
										</Col>
											)}
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