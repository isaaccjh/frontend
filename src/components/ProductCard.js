import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useAnimate } from "framer-motion";

export default function ProductCard(props) {

    return (<>
        <Link to={`${props.product.id}`}>
            <div className="group shadow-lg mt-2 h-[220px] rounded-lg grid bg-[#ECEFF0] p-3">
                <div className="bg-[#ECEFF0]">
                    {props.variants && props.variants.length > 0 ? (
                        <img className="h-[100px] bg-[#ECEFF0]" src={props.variants[0].image_url} alt="" />
                    ) : (
                        <p>No variants available</p>
                    )}
                </div>
                <div className="ml-1 mt-10 px-1 bg-[#ECEFF0] ">
                    <h3 className="group-hover:underline group-hover:underline-offset-2 bg-[#ECEFF0]">{props.product.name}</h3>
                    <div className="text-gray-900 flex items-center justify-between bg-[#ECEFF0]">
                        <p className="text-s bg-[#ECEFF0]">${(Math.min.apply(Math, props.variants.map(v => v.cost))) / 100} - ${(Math.max.apply(Math, props.variants.map(v => v.cost))) / 100} </p>
                        {props.variants && props.variants.length > 0 ? (
                            <p className="text-xs uppercase mr-1 bg-[#ECEFF0]">{props.variants.length} variants</p>
                        ) : (
                            <p className="text-xs uppercase mr-1 bg-[#ECEFF0]">No variants</p>
                        )}
                    </div>
                </div>
            </div>
        </Link >
    </>)
}