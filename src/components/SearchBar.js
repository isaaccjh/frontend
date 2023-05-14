import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";
import FilterBox from "./FIlterBox";

import { MdKeyboardArrowDown, } from "react-icons/md";

export default function SearchBar(props) {
    const [filter, setFilter] = useState(false);
    const [scope, animate] = useAnimate();
    const [filterState, setFilterState] = useState({
        "lure": "",
    });
    
    const navigate = useNavigate();

    const toggleFilter = () => {
        setFilter(!filter);
    };

    const updateFilterState =  (e) => {
        setFilterState({
            ...filterState,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        animate(scope.current, { rotate: filter ? 0  : 180 })
    }, [filter])

    const applyFilter = () => {
        navigate("/products", {
            "state": {
                "filterState": filterState
            }
        })
    }

    const clearFilter = () => {
        navigate("products", {
            "state": {
                "filterState": {}
            }
        })
    }

    return (<>
        <div className="flex mt-1">
            <button onClick={toggleFilter} className="flex ml-0 mx-3 px-4 border-2  items-center">
                <div className="mr-2">Filter</div>
                <div ref={scope}>
                    <MdKeyboardArrowDown />
                </div>
            </button>
            <div className="flex w-3/4">
                <input className="w-3/4" type="text" name="lure" value={filterState.lure} onChange={updateFilterState} />
                <button className="ml-2" onClick={applyFilter}>Apply Filter</button>
                <button className="ml-2" onClick={clearFilter}>Clear</button>
            </div>
               
        </div>
        <div>
            {filter ? <FilterBox filter={filter} /> : null}
        </div>
    </>)

}