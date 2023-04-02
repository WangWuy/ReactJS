import { memo, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { logoutAction } from "../../store/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom"
import { qlNguoiDungService } from "../../services/userService";
import axios from 'axios';
import { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Swal from "sweetalert2";

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogout = (e) => {
        dispatch(logoutAction());
    }

    const [userLogin, setUserLogin] = useState({});

    useEffect( () => {
        axios({
            url:'http://127.0.0.1:8000/users/current-user/',
            method:'GET', 
            headers:{
                'Authorization': `Bearer 6YzuFy9nlUnR9YzjjKYZAukv9CDaWz`,
            }
        }).then(res => {
           setUserLogin(res.data)
          })
       }, []);

    const formik = useFormik({
        enableReinitialize : true,
        initialValues: {
            firstName: userLogin.first_name,
            lastName: userLogin.last_name,
            userName: userLogin.username,
            passWord: '',
            email: userLogin.email,
        },
        onSubmit: (values) => {
            console.log(values);
            axios({
                url:`http://127.0.0.1:8000/users/${userLogin.id}`,
                method:'PUT', 
                param: {},
                headers:{
                    'Authorization': `Bearer 6YzuFy9nlUnR9YzjjKYZAukv9CDaWz`,
        
                }
            }).then(res => {
                Swal.fire(
                    'Good job!',
                    'You clicked the button!',
                    'success'
                )
              })
        },validationSchema: Yup.object().shape({
            // passWord: Yup.string().required('(*) Mật khẩu Không được bỏ trống'),
      })
      })
   


    return (
        <Layout showSidebar>
            <Col lg={12}>
                <div className="central-meta">
                    <div className="about">
                        <div className="d-flex flex-row mt-2">
                            <ul className="nav nav-tabs nav-tabs--vertical nav-tabs--left" >
                                <li className="nav-item">
                                    <a href="#edit-profile" className="nav-link" data-toggle="tab" ><i className="fa fa-pencil"></i> Chỉnh sửa thông tin cá nhân</a>
                                </li>
                            </ul>
                            <div className="tab-content">
                                <div className="" id="edit-profile" >
                                    <div className="set-title">
                                        <h5>Chỉnh sửa thông tin cá nhân</h5>
                                    </div>
                                    <div className="setting-meta">
                                        <div className="change-photo">
                                            <figure><img src="{userLogin?.first_name}" alt=""/></figure>
                                            <div className="edit-img">
                                                <form className="edit-phto">
                                                    <label className="fileContainer">
                                                        <i className="fa fa-camera-retro"></i>
                                                        Thay đổi avatar
                                                    <input type="file" />
                                                    </label>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stg-form-area">
                                        <form i className="c-form" onSubmit={formik.handleSubmit}>
                                            <Row>
                                            <Col lg={6}>
                                                <label>Họ</label>
                                                <input type="text" value={formik.values.firstName} placeholder="..." name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            </Col>
                                            <Col lg={6}>
                                                <label>Tên</label>
                                                <input type="text" value={formik.values.lastName} placeholder="..." name="lastName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            </Col>
                                            </Row>
                                            <div className="uzer-nam">
                                                <label>Tài khoản</label>
                                                <input type="text" value={formik.values.userName} placeholder="..." name="userName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            </div>
                                            <div className="uzer-nam">
                                                <label>Nhập mật khẩu mới</label>
                                                <input type="password" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                                <div className="text text-danger">{formik.errors.passWord && formik.touched.passWord ? (<div>{formik.errors.passWord}</div>) : null} </div>
                                            </div>
                                            <div>
                                                <label>Email</label>
                                                <input type="text" value={formik.values.email} placeholder="abc@gmail.com" name="email" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                            </div>
                                            <div>
                                                <button type="submit" data-ripple="">Lưu</button>
                                                <button onClick={() => navigate('/')} type="submit" data-ripple="">Huỷ</button>
                                            </div>
                                        </form>
                                        {/* <form className="c-form"  onSubmit={formik.handleSubmit}>
                                    
                                                <input type="text" placeholder="..." name="firstName" onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                                                <div className="text text-danger">{formik.errors.firstName && formik.touched.firstName ? (<div>{formik.errors.firstName}</div>) : null} </div>
                                                <button type="submit" data-ripple="">Lưu</button>
                                            </form> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>	
            </Col>
        </Layout>
    )
}
export default memo(Registration);