import React from "react";
import "./Search.css"
import {Link, useLocation} from "react-router-dom";
import {useState, useEffect} from "react";
import {Heart, ShoppingCart} from "react-feather";

const Search = (props) => {
    const [value, setValue] = useState(" ");
    const [searchResult, setSearchResult] = useState({
        products: []
    })
    const [filter, setFilter] = useState("newest")
    let products;
    const location = useLocation();
    useEffect(() => {
        setValue(location.search.slice(1))
        const pro = props.products.filter((item) => item.name.includes(value))
        setSearchResult({products: pro})
    }, [props.products, value, location.search]);
    const filterChangerHandler = (option) => {
        setFilter(option);
    };
    const sortOptions = {
        newest: (a, b) => b.id - a.id,
        popular: (a, b) => b.like - a.like,
        sale: (a, b) => b.sale - a.sale,
        cheapest: (a, b) => a.price - b.price,
        expensive: (a, b) => b.price - a.price,
    };
    products = searchResult.products.sort(sortOptions[filter])
    let result = products.map((item, index) => {
        return (
            <Link to={`/products/${item.id}`} key={index}>
                <div className={"result-products"}>
                    <img src={item.img} alt=""/>
                    <div className={"result-info"}>
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
    if (result.length === 0) {
        result =
            <div className={"no-result"}>
                نتیجه ای یافت نشد!
            </div>
    }

    return (
        <div className={"search-container"}>
            <div className={"search-border"}>
                <div id={"links"}><Link to={"/"}> آنایس </Link> / <Link to={"/products"}>محصولات</Link> /جستجوی {value}
                </div>
                <div className={"search-filter"}>
                    <div>
                        مرتب سازی:
                    </div>
                    <div onClick={() => filterChangerHandler("newest")}
                         className={filter === "newest" ? "filter-active" : "filter-inactive"}>
                        جدیدترین
                    </div>
                    <div onClick={() => filterChangerHandler("sale")}
                         className={filter === "sale" ? "filter-active" : "filter-inactive"}>
                        پرفروش ترین
                    </div>
                    <div onClick={() => filterChangerHandler("popular")}
                         className={filter === "popular" ? "filter-active" : "filter-inactive"}>
                        محبوب ترین
                    </div>
                    <div onClick={() => filterChangerHandler("cheapest")}
                         className={filter === "cheapest" ? "filter-active" : "filter-inactive"}>
                        ارزان ترین
                    </div>
                    <div onClick={() => filterChangerHandler("expensive")}
                         className={filter === "expensive" ? "filter-active" : "filter-inactive"}>
                        گران ترین
                    </div>
                </div>
            </div>
            <div className="all-results">
                {result}
            </div>
        </div>

    );
}

export default Search;