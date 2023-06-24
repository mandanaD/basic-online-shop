import "./SearchResult.css"
import {Link} from "react-router-dom";

const SearchResult = (props) => {
    let result;
    if (props.result.length <= 5) {
        result = props.result
    } else {
        result = props.result.slice(0, 5)
    }
    let search = result.map((item, index) => {
        return (
            <Link to={`/products/${item.id}`} key={index}>
                <li className={"list-item"} onClick={props.emptyHandler} >
                    <img src={item.img} alt=""/>
                    <div>
                        {item.name}
                    </div>
                </li>
            </Link>
        )
    })
    if (search.length === 0) {
        search =
            <li className={"list-item"}>
                نتیجه ای یافت نشد!
            </li>
    }
    return (
        <div className={"result-container"}>
            <ul className={"list-group"}>
                <li className={"list-item"}>
                    نتیجه جستجو:
                </li>
                {search}
            </ul>
        </div>
    );
}

export default SearchResult;