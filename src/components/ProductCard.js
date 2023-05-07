import React from "react";


export default function ProductCard(props) {



    return (<>
        <a>
            <div >
                <div>
                    {/* insert image here */}
                </div>
                <div>
                    <h3>{props.product.name}</h3>
                </div>
            </div>

        </a>

    </>)
}