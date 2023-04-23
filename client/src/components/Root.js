import Navbar from "./Navbar.js";
import {Outlet} from 'react-router-dom';

const Root = () => {
    return (
        <>
        <Navbar/>
        <main>
        <Outlet/>
        </main>
        </>
    )
}
export default Root;