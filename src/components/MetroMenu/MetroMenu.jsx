import React from "react";
import MetroCard from "./MetroCard";

function MetroMenu({ metroMenuItems }) {
    return (
        <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-2">
            {metroMenuItems?.map((item, index) => (
                <MetroCard item={item} key={index}/>
            ))}
        </div>
    );
}

export default MetroMenu;
