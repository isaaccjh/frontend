import { useState } from "react";


export default function SearchBar(props) {
    const [toggleState, setToggleState] = useState(false);

    return (<>
        <div className="flex mt-2">
            <div className="flex border-2 mx-3 px-4 items-center">
                <button>Filter</button>
            </div>
            <div className="flex w-3/4">
                <input className="w-3/4" type="text" />
            </div>
        </div>
    </>)
}