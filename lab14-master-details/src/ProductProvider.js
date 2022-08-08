import { useState, Fragment } from 'react'
import ProductContext from './ProductContext';

// make sure the ProductProvider has props
// ProductProvider is just a component
export default function ProductProvider(props) {
    const [products, setProducts] = useState([
        {
            id: 1,
            product_name: "Brown Rice Cookies",
            cost: 9.99
        },
        {
            id: 2,
            product_name: "Seaweed Cakes",
            cost: 10.50
        },
        {
            id: 3,
            product_name: "Soya Milkshake",
            cost: 15.00
        }
    ])

    const context = {
        getProducts: () => {
            return products;
        },
        addProduct:(newProduct) => {
            setProducts(
                [...products, newProduct]
            )
        },
        getProductById(productId) {
            const p = products.find(p =>{
                return p.id === productId;
            });
            return p;
        }
    }

    // use ProductProvider as a higher order component
    return <ProductContext.Provider value={context}>
        {props.children}
    </ProductContext.Provider>
}