import React, {useContext} from 'react';
import ProductContext from './ProductContext';

export default function ProductListing() {
    const productContext = useContext(ProductContext);
    return (
        <React.Fragment>
            <ul key="listingid">
                {
                  productContext.getProducts().map(p => {
                    return <li>{p.product_name} (${p.cost})</li>
                  })
                }
            </ul>
        </React.Fragment>
    )
}