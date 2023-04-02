import { memo } from "react"
import { Button, Col, Container, Form, Row, Badge } from 'react-bootstrap';
import Layout from "../../components/Layout/Layout"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import Carousel from 'react-elastic-carousel';


const images = [
    { url: "./images/resources/slick1.jpg" },
    { url: "./images/resources/slick1.jpg" },
    { url: "./images/resources/slick1.jpg" },
    { url: "./images/resources/slick1.jpg" },
  ];

const Admissions = () => {
    // const dispatch = useDispatch();
    const navigate = useNavigate();
    // const handleLogout = (e) => {
    //     dispatch(logoutAction());
    // }

    return (
        <Layout showSidebar>
            <section>
				<div className="gap gray-bg">
					<div className="container">
						<div className="row merged20">
							<div className="col-lg-12">
								<div className="forum-warper">
									<h4>Tuyển sinh hệ chính quy</h4>
									<a className="addnewforum pointer" onClick={() => navigate('/')} title=""><i className="fa fa-plus"></i> Trang chủ</a>
								</div>
								<div className="central-meta">
									<div className="forum-list">
										<table className="table table-responsive">
											<thead>
												<tr>
													<th scope="col">forum</th>
												</tr>
											</thead>
											<tbody>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Asset for creating a beautiful website</a>
														<p>list your recommended website and when you start to create your website so please check your laptop window and battery &#58;-&#41;</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Modifications & Useful Snippets</a>
														<p>Share your own custom snippets for modifying the winku template beyond it's limits.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Pricing & Redunds</a>
														<p>Questions regarding pricing and refunds should be posted here.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">SEO Optimization</a>
														<p>Post your SEO optimizations and tips via this thread.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Server Related Errors and Fixes</a>
														<p>Having issues with your server and your hosting company won't help you? Post a comment on the forum for help.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Why should you purchase the winku Template?</a>
														<p>Winku have a great features and created with the logic for making easy to create social website.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Beginner Guides & Tips</a>
														<p>Useful tips, guides and tricks for beginners.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Pricing & Redunds</a>
														<p>Questions regarding pricing and refunds should be posted here.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">SEO Optimization</a>
														<p>Post your SEO optimizations and tips via this thread.</p>
													</td>
												</tr>
												<tr>
													<td>
														<i className="fa fa-comments"></i> 
														<a href="forums-category.html" title="">Asset for creating a beautiful website</a>
														<p>list your recommended website and when you start to create your website so please check your laptop window and battery &#58;-&#41;</p>
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
	
			<section>
				<div className="getquot-baner purple high-opacity">
					{/* <div className="bg-image" style="background-image:url(images/resources/animated-bg2.png)"></div> */}
					<span>Tìm hiểu thêm về tin tuyển sinh của trường? </span>
					<a title="" href="#">Bấm vào đây</a>
				</div>
			</section>
        </Layout>
    )
}
export default memo(Admissions);