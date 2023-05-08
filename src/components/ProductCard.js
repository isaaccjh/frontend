import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard(props) {

    return (<>
        <Link>
            <div className="shadow">
                <div className="">
                    {props.variants && props.variants.length > 0 ? (
                        <img className="h-[75px]"src={props.variants[0].image_url} alt="" />
                    ) : (
                        <p>No variants available</p>
                    )}
                </div>
                <div>
                    <h3>{props.product.name}</h3>
                    <div className="text-gray-900 flex items-center justify-between">
                        <p>${(Math.min.apply(Math, props.variants.map(v => v.cost)))/100} - ${(Math.max.apply(Math, props.variants.map(v => v.cost)))/100} </p>
                    {props.variants && props.variants.length > 0 ? (
                        <p className="text-xs uppercase mr-1">{props.variants.length} variants</p>
                    ) : (
                        <p>No variants available</p>
                    )}
                    </div>
                </div>
            </div>
        </Link>
    </>)
}