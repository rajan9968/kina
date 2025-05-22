import Footer from './CommonFiles/Footer';
import Header from './CommonFiles/Header';
import { Outlet } from 'react-router-dom';

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    );
};

export default UserLayout;
