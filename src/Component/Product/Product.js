import React from "react";
import "./Product.css";
import {useParams, Link} from "react-router-dom";
import {useState} from "react";
import {ShoppingBag, Heart, Truck, Shield} from "react-feather";

const Product = (props) => {
    const [selected, setSelected] = useState("S")
    const id = parseInt(useParams().id);
    const product = props.product.find(item => item.id === id)
    if (!product) {
        return <div>محصولی یافت نشد.</div>;
    }
    const selectHandler = (event) => {
        let newVl = event.target.innerText
        setSelected(newVl)
    }
    return (
        <div className={"pro-container"}>
            <div id={"link"}><Link to={"/"}> آنایس </Link> / <Link to={"/products"}>محصولات</Link> / {product.name}
            </div>
            <div className={"product-container"}>
                <img src={product.img} alt={""}/>
                <div className={"product-title"}>
                    <h1>{product.name}</h1>
                    <div id={"price"}>{product.price} تومان</div>
                    <div className={"selector-container"}>
                        <div>انتخاب سایز:</div>
                        <div id={"select"}>
                            <div onClick={selectHandler} className={selected === "S" ? "selected" : "size"}>S</div>
                            <div onClick={selectHandler} className={selected === "M" ? "selected" : "size"}>M</div>
                            <div onClick={selectHandler} className={selected === "L" ? "selected" : "size"}>L</div>
                            <div onClick={selectHandler} className={selected === "XL" ? "selected" : "size"}>XL</div>
                        </div>
                    </div>
                    <div className={"bottom"}>
                        <div className={"icons"}>
                            <Truck style={{marginLeft: "15px"}}/>
                            آماده ارسال
                        </div>
                        <div className={"icons"}>
                            <Shield style={{marginLeft: "15px"}}/>
                            گارانتی اصالت و سلامت فیزیکی کالا
                        </div>
                        <div className={"icons"}>
                            <button>
                                افزودن به سبد خرید <ShoppingBag/>
                            </button>
                            <Heart/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Product;