import { useState, useEffect } from "react";
import { useAnimate } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { MdKeyboardArrowDown, MdOutlineSearch } from "react-icons/md";

export default function SearchBar(props) {
    const [filter, setFilter] = useState(false);
    const [scope, animate] = useAnimate();
    const [filterState, setFilterState] = useState({
        "lure": "",
        "max_price": 0,
        "min_price": 0,
        "max_variants": 0,
        "min_variants": 0
    });

    const navigate = useNavigate();

    const toggleFilter = () => {
        setFilter(!filter);
    };

    const updateFilterState = (e) => {
        setFilterState({
            ...filterState,
            [e.target.name]: e.target.value
        })
    }


    const applyFilter = () => {
        navigate("/products", {
            "state": {
                "filterState": filterState
            }
        })
    }

    const clearVariantFilter = () => {
        navigate("products", {
            "state": {
                "filterState": {
                    ...filterState,
                    "min_variants": 0,
                    "max_variants": 0
                }
            }
        })
    }
    const clearPriceFilter = () => {
        navigate("products", {
            "state": {
                "filterState": {
                    ...filterState,
                    "min_price": 0,
                    "max_price": 0
                }
            }
        })
    }

    return (<>
        <div className="flex mt-1 items-center justify-center">
            <div className="flex gap-8 mt-3">
                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                            <span className="text-sm font-medium"> Price </span>
                            <span className="transition group-open:-rotate-180">
                                <MdKeyboardArrowDown />
                            </span>
                        </summary>

                        <div
                            className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
                        >
                            <div className="w-96 rounded border border-gray-200 bg-white">
                                <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700">
                                        The highest price is $600
                                    </span>

                                    <button
                                        type="button"
                                        className="text-sm text-gray-900 underline underline-offset-4"
                                    >
                                        Reset
                                    </button>
                                </header>

                                <div className="border-t border-gray-200 p-4">
                                    <div className="flex justify-between gap-4">
                                        <label className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceFrom"
                                                placeholder="From"
                                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>

                                        <label className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceTo"
                                                placeholder="To"
                                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
                <div className="relative">
                    <details className="group [&_summary::-webkit-details-marker]:hidden">
                        <summary className="flex cursor-pointer items-center gap-2 border-b border-gray-400 pb-1 text-gray-900 transition hover:border-gray-600">
                            <span className="text-sm font-medium">Variants</span>
                            <span className="transition group-open:-rotate-180">
                                <MdKeyboardArrowDown />
                            </span>
                        </summary>

                        <div
                            className="z-50 group-open:absolute group-open:start-0 group-open:top-auto group-open:mt-2"
                        >
                            <div className="w-96 rounded border border-gray-200 bg-white">
                                <header className="flex items-center justify-between p-4">
                                    <span className="text-sm text-gray-700">
                                        The max amount of variants is
                                    </span>

                                    <button
                                        type="button"
                                        className="text-sm text-gray-900 underline underline-offset-4"
                                    >
                                        Reset
                                    </button>
                                </header>

                                <div className="border-t border-gray-200 p-4">
                                    <div className="flex justify-between gap-4">
                                        <label className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceFrom"
                                                placeholder="From"
                                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>

                                        <label className="flex items-center gap-2">
                                            <span className="text-sm text-gray-600">$</span>

                                            <input
                                                type="number"
                                                id="FilterPriceTo"
                                                placeholder="To"
                                                className="w-full rounded-md border-gray-200 shadow-sm sm:text-sm"
                                            />
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </details>
                </div>
            </div>
            <div>
                <div className="flex w-100 h-[40px] mt-1 items-center">
                    <input className="w-100 ml-8 rounded-lg" placeholder="Search..." type="text" name="lure" value={filterState.lure} onChange={updateFilterState} />
                </div>
            </div>
            <div className="mt-1 group">
                <button className="ml-4 border-2 rounded-lg p-2 group-hover:bg-yellow-400" onClick={applyFilter}>
                    <MdOutlineSearch className=" group-hover:bg-yellow-400" size={25} />
                </button>
            </div>
        </div>
    </>)

}