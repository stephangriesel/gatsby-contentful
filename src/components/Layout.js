import React from 'react';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'


const layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}

export default layout;
