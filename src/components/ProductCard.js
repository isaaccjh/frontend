import React from "react";
import { Link } from "react-router-dom";


export default function ProductCard(props) {

    return (<>
        <Link to={`${props.product.id}`}>
            <div className="group shadow mt-2 h-[205px] grid">
                <div className="">
                    {props.variants && props.variants.length > 0 ? (
                        <img className="h-[100px]"src={props.variants[0].image_url} alt="" />
                    ) : (
                        <p>No variants available</p>
                    )}
                </div>
                <div className="ml-1 mt-10 px-1 ">
                    <h3 className="group-hover:underline group-hover:underline-offset-2">{props.product.name}</h3>
                    <div className="text-gray-900 flex items-center justify-between">
                        <p className="text-s">${(Math.min.apply(Math, props.variants.map(v => v.cost)))/100} - ${(Math.max.apply(Math, props.variants.map(v => v.cost)))/100} </p>
                    {props.variants && props.variants.length > 0 ? (
                        <p className="text-xs uppercase mr-1">{props.variants.length} variants</p>
                    ) : (
                        <p className="text-xs uppercase mr-1">No variants</p>
                    )}
                    </div>
                </div>
            </div>
        </Link>
    </>)
}