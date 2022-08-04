import React, {useState} from 'react'
import AddProduct from './AddProductForm';
import ProductContext from './ProductContext'
import ProductListing from './ProductListing';
function App() {

  const [products, setProducts] = useState([
    {
      id: 1,
      product_name:"Brown Rice Cookies",
      cost:9.99
    },
    {
      id: 2,
      product_name:"Seaweed Cakes",
      cost:10.50
    },
    {
      id: 3,
      product_name:"Soya Milkshake",
      cost:15.00
    }
  ])

  // this context object goes into ProductContext
  const context = {
    // function to get all the products
    getProducts: () => {
      return products;
    },
    addProduct: (productName, cost) => {
      const cloned = [...products, {
        id:  Math.floor((Math.random() * 100000) + 10000),
        product_name: productName,
        cost: cost
      }]
      console.log(cloned);
      setProducts(cloned);
    }
  }

  return (
    <React.Fragment>
      {/* set the value of ProductContext to be the context
      object that we have just created */}
      <ProductContext.Provider value={context}>
        <h1>My Catalog</h1>
        <ProductListing/>
        <AddProduct/>
      </ProductContext.Provider>

    </React.Fragment>

  );
}

export default App;
