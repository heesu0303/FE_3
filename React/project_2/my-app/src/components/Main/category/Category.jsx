import React from "react";
import "../category/category.css";

export default function Category({ category }) {
    console.log(category);
    return (
        <dl className="category">
            <dt className="a11y-hidden">Category</dt>
            {category.map((item, index) => (
                <dd key={index}>{item}</dd>
            ))}
        </dl>
    );
}
