import { useState, useEffect } from "react";
import { useAnimate, } from "framer-motion";

import FilterBox from "./FIlterBox";

import { MdKeyboardArrowDown, } from "react-icons/md";

export default function SearchBar(props) {
    const [filter, setFilter] = useState(false);
    const [scope, animate] = useAnimate();
    const [filterState, setFilterState] = useState({
        "lure": "",
    });

    const toggleFilter = () => {
        setFilter(!filter);
    };

    useEffect(() => {
        animate(scope.current, { rotate: filter ? 0  : 180 })
    }, [filter])


    return (<>
        <div className="flex mt-1">
            <button onClick={toggleFilter} className="flex ml-0 mx-3  px-4 border-2  items-center">
                <div className="mr-2">Filter</div>
                <div ref={scope}>
                    <MdKeyboardArrowDown />
                </div>
            </button>
            <div className="flex w-3/4">
                <input className="w-3/4" type="text" />
            </div>
        </div>
        <div>
            {filter ? <FilterBox filter={filter} /> : null}
        </div>
    </>)

}