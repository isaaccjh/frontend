import React from "react";


export default function ProductCard(props) {
    return (<>
        <a>
            <div>
                <div>
                    {props.variants && props.variants.length > 0 ? (
                        props.variants.map((variant, index) => (
                            <img
                                key={index}
                                src={variant.image_url}
                                alt={variant.name}
                                width="100%"
                            />
                        ))
                    ) : (
                        <p>No variants available</p>
                    )}
                </div>
                <div>
                    <h3>{props.product.name}</h3>
                </div>
            </div>
        </a>
    </>)
}