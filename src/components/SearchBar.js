import { useState } from "react";

import Drawer from "./Drawer";


export default function SearchBar(props) {
    const [filter, setFilter] = useState(false);

    const toggleFilter = () => {
        setFilter(!filter);
    };



    return (<>
        <div className="flex mt-2">
            <div className="flex border-2 ml-0 mx-3 px-4 items-center">
                <button className="text-xs" onClick={toggleFilter}>Filter & Sort</button>
            </div>
            <div className="flex w-3/4">
                <input className="w-3/4" type="text" />
            </div>
        </div>
        <div>
            {filter ? <Drawer /> : null}
        </div>
    </>)
}