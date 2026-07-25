import Footer from "../components/front/layout/Footer";
import Navbar from "../components/front/layout/Navbar";


const FrontLayout = ({ children }) => {
    return (
        <main>
            <Navbar/>
            {children}
            <Footer/>
        </main>
    );
};

export default FrontLayout;