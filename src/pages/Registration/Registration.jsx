import { memo, useEffect } from "react";
import Layout from "../../components/Layout/Layout";
import { useDispatch, useSelector } from "react-redux";
import { Col, Row } from 'react-bootstrap';
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form";
import {AiFillCamera} from 'react-icons/ai';
import { getMeAction, updateProfileAction } from "../../store/actions/users.action";
import { profileEmailValidationProperty, profileFirstNameValidationPropery, profileLastNameValidationPropery, profilePasswordValidationPropery, profileUsernameValidationProperty } from "../../utils/validations/update-profile";

const Registration = () => {
    const user = useSelector(state => state.usersReducer);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdateProfileSubmit = (data) => {
       dispatch(updateProfileAction(data,user.data?.id, navigate));
    }

    const handleUpdateAvatar = (e) => {
        console.log(e.target.files[0]);
        dispatch(updateProfileAction({
            username: user.data?.username,
            password: '123456',
            firstName: user.data?.first_name,
            lastName: user.data?.last_name,
            email: user.data?.email,
            avatar: e.target.files[0]
        },user.data?.id));
    }

    useEffect(() => {
        setValue('firstName',user.data?.first_name);
        setValue('lastName',user.data?.last_name);
        setValue('password',user.data?.password);
        setValue('username',user.data?.username);
        setValue('email',user.data?.email);
    },[user.data]);


    useEffect(() => {
        dispatch(getMeAction());
    }, []);


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
                                            <figure><img src={user.data?.avatar} alt="ảnh?" /></figure>
                                            <div className="edit-img">
                                                <form className="edit-phto">
                                                <label className="fileContainer">
                                                        <AiFillCamera/>
                                                        <input onChange={handleUpdateAvatar} type="file" />
                                                    </label>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="stg-form-area">
                                        <form onSubmit={handleSubmit(handleUpdateProfileSubmit)} className="c-form">
                                            <Row>
                                                <Col lg={6}>
                                                    <label>Họ</label>
                                                    <input {...register(profileFirstNameValidationPropery.name, profileFirstNameValidationPropery.options)} type="text" placeholder="Họ" name="firstName" />
                                                    <div className="text text-danger">{errors.firstName && errors.firstName.message}</div>
                                                </Col>
                                                <Col lg={6}>
                                                    <label>Tên</label>
                                                    <input {...register(profileLastNameValidationPropery.name, profileLastNameValidationPropery.options)} type="text" placeholder="Tên" name="lastName" />
                                                    <div className="text text-danger">{errors.lastName && errors.lastName.message}</div>
                                                </Col>
                                            </Row>
                                            <div className="uzer-nam">
                                                <label>Tên đăng nhập</label>
                                                <input {...register(profileUsernameValidationProperty.name, profileUsernameValidationProperty.options)} type="text" placeholder="Tên đăng nhập" name="userName" />
                                                <div className="text text-danger">{errors.username && errors.username.message}</div>
                                            </div>
                                            <div className="uzer-nam">
                                                <label>Nhập mật khẩu mới</label>
                                                <input {...register(profilePasswordValidationPropery.name, profilePasswordValidationPropery.options)} placeholder="Mật khẩu" type="password" />
                                                <div className="text text-danger">{errors.password && errors.password.message}</div>
                                            </div>
                                            <div>
                                                <label>Email</label>
                                                <input {...register(profileEmailValidationProperty.name, profileEmailValidationProperty.options)} type="text" placeholder="abc@gmail.com" name="email" />
                                                <div className="text text-danger">{errors.email && errors.email.message}</div>
                                            </div>
                                            <div>
                                                <button type="submit">Lưu</button>
                                                <button onClick={() => navigate('/')} type="submit" data-ripple="">Huỷ</button>
                                            </div>
                                        </form>
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