// import React, { useState, useEffect } from "react"
// import CountButton from './Countbutton/CountButton'
// import SearchBar from './SearchBar/SearchBar'
import Button from './Button/Button'



const App = () => {

  // const [productsState, setProductsState] = useState([])

      // useEffect(() => {
        
      //   fetch('https://fakestoreapi.com/products')
      //       .then(res=>res.json())
      //       .then((productsArray) => {
      //         const newProductsState = productsArray.map((product) => {
      //           return product.title
      //         })
      //         setProductsState(newProductsState)
      //       })
      // }, [])
        
        
        

      // const hasProducts = productsState.length > 0

      return (
      <div>
        <Button>Hello World</Button>
        <Button>Hello World 2</Button>
        <Button>Hello World 3</Button>

        {/* <CountButton incrementBy={1} buttonColor="blue" /> */}
        
        {/* {hasProducts ? <SearchBar products={productsState} /> : "Loading..." } */}
      
        
      </div>
    );
  }

  export default App