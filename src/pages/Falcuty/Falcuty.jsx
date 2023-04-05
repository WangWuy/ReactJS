import { memo } from "react"
import Layout from "../../components/Layout/Layout"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const navigate = useNavigate();

    return (
        <Layout showSidebar>
            <section>
                <div className="tab-content central-meta">
                    <div className="tab-pane fade show active" id="terms" >
                                            <div className="privacy-meta">
                                                <div className="set-title">
                                                <h5>Khoa A</h5>
                                                <span>Select push and email notifications you'd like to receive.</span>
                                            </div>
                    <p>These cookies allow the Site to remember the choices you make (such as your username, language or the region you are in). For example, the Site uses functionality cookies to remember your language preference. These cookies can also be used to remember changes you have made to text size, font, and other parts of pages that you can customize. They can also be used to provide services you have requested, such as watching a video or commenting on a blog. The information these cookies collect may be anonymous and cannot track your browsing activity on other websites.</p>
                    <h6>GIỚI THIỆU KHOA</h6>
                        <p>
                        We may, in certain circumstances, use Adobe Flash Player to deliver special content, such as video clips or animation. To improve your user experience, Local Shared Objects (commonly known as "Flash cookies") are used to provide features such as remembering your settings and preferences. Flash cookies are stored on your device, but are managed through a different interface than that provided by your web browser. This means that it is not possible to manage Flash cookies through your browser in the same way as you normally would with cookies. Instead, you can access your Flash management tools from the Adobe website in http://www.macromedia.com/support/documentation/en/flashplayer/help/settings_manager.html.</p>
                        
                        <h6>CHƯƠNG TRÌNH ĐÀO TẠO</h6>
                    <p>Tailor-made content cookies help the Site provide enhanced features and display content in a way that is relevant to you. These cookies help the Site determine what information to show you based on how you have used the Site previously. These cookies do not track your browsing activity on other websites.</p>
                       <h6>THÔNG BÁO TUYỂN SINH</h6>
                    <p>First-party cookies are cookies that belong to us, while third-party cookies are cookies that are placed by another party or</p>
                        </div>
                    </div>
                </div>
	        </section>
        </Layout>
    )
}
export default memo(Home);