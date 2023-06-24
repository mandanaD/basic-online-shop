import React from "react";
import "./Home.css";
import {useState} from "react";
import {Link,useHistory} from "react-router-dom";
import {ShoppingCart, Heart, ChevronsLeft, ChevronsRight, ArrowLeft} from "react-feather";

const Home = (props) => {
    const [position, setPosition] = useState({
        populars: 0,
        sale: 0
    });
    let history=useHistory()
    const LeftPopularHandler = () => {
        if (position.populars < 1035) {
            let nPopulars = position.populars + 345
            setPosition({...position, populars: nPopulars})
        }
    }
    const RightPopularHandler = () => {
        if (position.populars > 0) {
            let nPopulars = position.populars - 345
            setPosition({...position, populars: nPopulars})
        }
    }
    const LeftSaleHandler = () => {
        if (position.sale < 1035) {
            let nSale = position.sale + 345
            setPosition({...position, sale: nSale})
        }
    }
    const RightSaleHandler = () => {
        if (position.sale > 0) {
            let nSale = position.sale - 345
            setPosition({...position, sale: nSale})
        }
    }
    const popularX = {transform: ' translateX(' + position.populars + 'px)'}
    const saleX = {transform: ' translateX(' + position.sale + 'px)'}
    const mostPopular = (props.products.sort((a, b) => b.like - a.like)).slice(0, 6)
    const product = mostPopular.map((item, index) => {
        return (
            <Link to={`/products/${item.id}`} key={index}>
                <div className={"popular-product"} style={popularX}>
                    <img src={item.img} alt=""/>
                    <div className={"info"}>
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
    const mostSale = (props.products.sort((a, b) => b.sale - a.sale)).slice(0, 6)
    const mostSaleProduct = mostSale.map((item, index) => {
        return (
            <Link to={`/products/${item.id}`} key={index}>
                <div className={"sale-product"} style={saleX}>
                    <img src={item.img} alt=""/>
                    <div className={"info"}>
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
        <div className="Home-container">
            <div className="pic-holder">
                <Link to={"/products"}>
                    مشاهده بیشتر
                </Link>
            </div>
            <div className={"Carousel"}>
                <div className={"title"}>
                    محبوب ترین ها
                </div>
                <ChevronsRight size={"32px"} style={position.populars === 0 ? {display: "none"} : {display: "block"}}
                               className={"right-pop sign"} onClick={RightPopularHandler}/>
                <ChevronsLeft size={"32px"} style={position.populars === 1035 ? {display: "none"} : {display: "block"}}
                              className={"left-pop sign"} onClick={LeftPopularHandler}/>
                <div className="most-popular">
                    {product}
                    <div className={"popular-product last"} style={popularX}>
                        <div>
                            مشاهده همه
                            <br/>
                            <button onClick={()=>{history.push("/products?popular")}}>
                                <ArrowLeft/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"Carousel"}>
                <div className={"title"}>
                    پرفروش ترین ها
                </div>
                <ChevronsRight size={"32px"} style={position.sale === 0 ? {display: "none"} : {display: "block"}}
                               className={"right-sale sign"} onClick={RightSaleHandler}/>
                <ChevronsLeft size={"32px"} style={position.sale === 1035 ? {display: "none"} : {display: "block"}}
                              className={"left-sale sign"} onClick={LeftSaleHandler}/>
                <div className="most-sale">
                    {mostSaleProduct}
                    <div className={"sale-product last"} style={saleX}>
                        <div>
                            مشاهده همه
                            <br/>
                            <button onClick={()=>{history.push("/products?sale")}}>
                                <ArrowLeft/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Home;
