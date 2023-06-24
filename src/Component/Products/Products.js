import React from "react";
import {useState,useEffect} from "react";
import {Link,useLocation} from "react-router-dom";
import {Heart, ShoppingCart} from "react-feather";
import "./Products.css"

const Products = (props) => {
    const [filter, setFilter] = useState("newest")
    let products;
    const location = useLocation();
    const filterChangerHandler = (option) => {
        setFilter(option);
    };
    useEffect(()=>{
        if(location.search){
            setFilter(location.search.slice(1))
        }
    },[location.search])
    const sortOptions = {
        newest: (a, b) => b.id - a.id,
        popular: (a, b) => b.like - a.like,
        sale: (a, b) => b.sale - a.sale,
        cheapest: (a, b) => a.price - b.price,
        expensive: (a, b) => b.price - a.price,
    };
    products = props.products.sort(sortOptions[filter])
    const product = products.map((item, index) => {
        return (
            <Link to={`/products/${item.id}`} key={index}>
                <div className={"products"}>
                    <img src={item.img} alt=""/>
                    <div className={"info-card"}>
                        <p>
                            {item.name}
                            <span>
                            <ShoppingCart style={{marginLeft: '10px', transform: "rotateY(180deg)"}}/>
                            <Heart/>
                        </span>
                        </p>
                        <p>{item.price} تومان </p>
                    </div>
                </div>
            </Link>
        )
    })
    return (
        <div className={"products-container"}>
            <div className={"filter"}>
                <div>
                    مرتب سازی:
                </div>
                <div onClick={() => filterChangerHandler("newest")}
                     className={filter === "newest" ? "active" : "inactive"}>
                    جدیدترین
                </div>
                <div onClick={() => filterChangerHandler("sale")}
                     className={filter === "sale" ? "active" : "inactive"}>
                    پرفروش ترین
                </div>
                <div onClick={() => filterChangerHandler("popular")}
                     className={filter === "popular" ? "active" : "inactive"}>
                    محبوب ترین
                </div>
                <div onClick={() => filterChangerHandler("cheapest")}
                     className={filter === "cheapest" ? "active" : "inactive"}>
                    ارزان ترین
                </div>
                <div onClick={() => filterChangerHandler("expensive")}
                     className={filter === "expensive" ? "active" : "inactive"}>
                    گران ترین
                </div>
            </div>
            <div className="all-products">
                {product}
            </div>
        </div>
    );
}

export default Products;