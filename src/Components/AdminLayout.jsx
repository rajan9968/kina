import AdminFooter from './Admin/Common/Footer';
import AdminHeader from './Admin/Common/Header';
import { Outlet } from 'react-router-dom';

const AdminLayout = () => {
    return (
        <>
            {/* <AdminHeader /> */}
            <Outlet />
            <AdminFooter />
        </>
    );
};

export default AdminLayout;
