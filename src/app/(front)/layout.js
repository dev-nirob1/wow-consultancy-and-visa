import Navbar from "../components/front/layout/Navbar";


const FrontLayout = ({ children }) => {
    return (
        <main>
            <Navbar/>
            {children}
        </main>
    );
};

export default FrontLayout;