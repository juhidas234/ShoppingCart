import { useEffect, useState } from "react";
import axios from "axios";
import ProductList from "../components/ProductList/ProductList";
import Banner from "../components/Banner/Banner";

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Banner />
      <ProductList products={products} />
    </div>
  );
};

export default AllProducts;
