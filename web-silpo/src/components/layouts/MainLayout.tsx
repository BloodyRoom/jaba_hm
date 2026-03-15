
import {Outlet} from "react-router";


const MainLayout = () => {
    return (
        <>
            <div className="pt-6">
                <Outlet />
            </div>
        </>
    )
}

export default MainLayout;