// Dynamically inserts requested stock name
import React from "react";
import Search from "./Search";

const Header = ({ name }) => {
    return ( 
        <div>
            <Search />
        </div>
    );
};

export default Header;