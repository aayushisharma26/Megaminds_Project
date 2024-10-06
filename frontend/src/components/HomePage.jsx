import React from "react";
import Navbar from "./Navbar"; 
import ProductList from "./ProductList"; 

function HomePage() {
    return (
        <>
            <Navbar />            
            <div className="mt-12">
                <ProductList />
                
            </div>
        </>
    );
}

export default HomePage;