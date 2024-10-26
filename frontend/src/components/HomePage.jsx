import React from "react";
import ProductList from "./ProductList";
import SearchResults from "./SearchResults";

function HomePage({ searchTerm }) {
    return (
        <div>
            {searchTerm ? (
                <SearchResults searchTerm={searchTerm} />
            ) : (
                <ProductList />
            )}
        </div>
    );
}

export default HomePage;
