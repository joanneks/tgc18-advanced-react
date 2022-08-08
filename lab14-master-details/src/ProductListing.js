import { Fragment, useContext } from "react";
import { Link } from "react-router-dom";
import ProductContext from "./ProductContext";

export default function ProductListing() {
    const context = useContext(ProductContext);
    return (
        <Fragment>
            <h1>Product Listings</h1>
            <ul>
                {
                    context.getProducts().map( p => 
                        <li>
                            <Link to={"/product/" + p.id}>
                                {p.product_name}
                            </Link>
                        </li>)
                }
            </ul>
        </Fragment>
    )
}