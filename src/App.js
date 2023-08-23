import React, { useState } from "react";
import Nav from "./navigation/Nav";
import Products from "./products/Products";
// import Recommended from "./recommended/Recommended";
import Sidebar from "./sidebar/Sidebar";
import products from "./db/data";
import Card from "./components/Card";


function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [query, setQuery] = useState("");

  //Input Filter
  const handleInputChange = event => {
    setQuery(event.target.value);
  }

  const filteredItems = products.filter(
    (product)=>product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
    );

    //Radio filter
    const handleChange = (event) => {
      setSelectedCategory(event.target.value);
    };

    //Button filter
    // const handleClick = (event) => {
    //   setSelectedCategory(event.target.value);
    // };

    //Filtering
    function filteredData(products, selected, query) {
      let filteredProducts = products;

      //Filtering Input Items
      if (query) {
        filteredProducts = filteredItems;
      }

      //Selecting filter
      if (selected) {
        filteredProducts = filteredProducts.filter(
          ({ category, color, company, newPrice, title }) =>
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice === selected ||
            title === selected
        );
      }


      return filteredProducts.map(
        ({ img, title, star, reviews, prevPrice, newPrice, company }) => (
          <Card
            key={Math.random()}
            img={img}
            company={company}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        )
      );
    }

    const result = filteredData(products, selectedCategory, query);


  return (
    <>
    <main>
      
      <Nav query={query} handleInputChange={handleInputChange} />
      <Sidebar handleChange={handleChange} />
      {/* <Recommended handleClick={handleClick} /> */}
      <Products result={result} />
      </main>
      
    
    </>
  );
}

export default App;
