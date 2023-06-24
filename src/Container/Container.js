import React from "react";
import axios from "axios";
import Wrapper from "../hoc/Wrapper";
import Navbar from "../Component/UI/Navbar/Navbar";
import Home from "../Component/Home/Home";
import {Switch, Route} from "react-router-dom"
import Product from "../Component/Product/Product";
import Products from "../Component/Products/Products";
import Search from "../Component/Search/Search";
import Footer from "../Component/UI/Footer/Footer";

class Container extends React.Component {
    state = {
        products: [],
    };

    componentDidMount() {
        axios
            .get("https://basic-online-shop-default-rtdb.firebaseio.com/product.json")
            .then((response) => {
                this.setState({products: response.data})
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <Wrapper>
                <section>
                    <Navbar
                        products={this.state.products}
                    />
                </section>
                <Switch>
                    <Route exact path="/">
                        <Home
                            products={this.state.products}
                        />
                    </Route>
                    <Route exact path={"/products/:id"}>
                        <Product
                            product={this.state.products}
                        />
                    </Route>
                    <Route exact path={"/products"}>
                        <Products
                            products={this.state.products}
                        />
                    </Route>
                    <Route exact={`/searchPage`}>
                        <Search
                            products={this.state.products}
                        />
                    </Route>
                </Switch>
                <section>
                    <Footer/>
                </section>
            </Wrapper>
        );
    }
}

export default Container;