import Footer from "../footer";
import Header from "../header";
import { Outlet } from 'react-router-dom'

const LayoutWebsite = () => {
    return (
        <div>
            <div>
                <Header />
            </div>
            <div>
                <Outlet />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    )
}
export default LayoutWebsite;