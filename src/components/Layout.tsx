import React from "react";
// Components
import Navbar from '@components/navbar/Navbar';
import Footer from "./footer/Footer";

type Props = {
    children: React.ReactNode;
}

const Layout = ({ children } : Props) => {
    return (
        <>
            <Navbar />
            <button
                title="Contact Sale"
                className="fixed z-90 bottom-10 right-8 bg-greenBlue-900 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-blue-1000 text-4xl hover:bg-blue-700 z-10 rotate-[320deg] hover:drop-shadow-2xl">
                    &#9906;
            </button>
            <button
                title="Contact Sale"
                className="fixed z-90 bottom-10 left-8 bg-greenBlue-900 w-16 h-16 rounded-full drop-shadow-lg flex justify-center items-center text-blue-1000 text-3xl hover:bg-blue-700 z-10 hover:drop-shadow-2xl">
                    &#9993;
            </button>
            {children}
            <Footer />
        </>
    )
}

export default Layout;