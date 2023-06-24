import React from "react";
import 'vazirmatn/Vazirmatn-font-face.css';
import {Link, useHistory} from "react-router-dom";
import {useState} from "react";
import {ShoppingCart, User, Search} from 'react-feather';
import "./Navbar.css"
import SearchResult from "../SearchResult/SearchResult";

const Navbar = (props) => {
    const [search, setSearch] = useState(false)
    const [searchInput, setSearchInput] = useState("")
    const [searchResult, setSearchResult] = useState({
        product: []
    })
    const history = useHistory()
    const searchHandler = () => {
        setSearch((prevState => !prevState))
    }
    const findResultHandler = (value) => {
        const filteredProducts = props.products.filter((item) =>
            item.name.includes(value)
        );
        setSearchResult({product: filteredProducts})
    };
    const setValueHandler = (value) => {
        setSearchInput(value)
        findResultHandler(value)
    }
    const emptySearchInput = () => {
        setSearchInput("")
        setSearchResult({product: []})
        setSearch(false)
    }
    const sendPathHandler = (event) => {
        if (event.key === "Enter") {
            history.push(`/searchPage?${searchInput}`)
            emptySearchInput()
        }

    }

    return (
        <div className="nav">
            <div className={"brand"}>
                <img src={require('../../../assets/ANAIS.png')} alt=""/>
            </div>
            <div className={'link'}>
                <Link to={"/"}>خانه</Link>
                <Link to={"/products"}>محصولات</Link>
                <Link to={"/"}>خرید</Link>
                <Link to={"/"}>درباره ی ما</Link>
                <Link to={"/"}>سوالی دارید؟</Link>
            </div>
            <div className={'icon'}>
                <div id={"search"} className={search ? "searchOn" : "searchOf"}>
                    <Search onClick={searchHandler} size={"35px"}
                            style={{paddingRight: '10px'}}/>
                    <input onChange={(event) => setValueHandler(event.target.value)} value={searchInput}
                           placeholder={"جستجو..."} onKeyPress={sendPathHandler} type="text"/>
                    {searchInput ? <SearchResult result={searchResult.product} emptyHandler={emptySearchInput}/> : null}
                </div>
                <ShoppingCart size={"35px"}
                              style={{paddingLeft: '10px', transform: "rotateY(180deg)", cursor: "pointer"}}/>
                <User size={"35px"} style={{paddingRight: '10px', cursor: "pointer"}}/>
            </div>
        </div>
    );
}

export default Navbar;