import Loadable from "../../components/loadable/Loadable";
import { lazy } from "react";
import "./style.css";

const ProductShowcase = Loadable(lazy(() => import("./ProductShowcase")));
const ProductDetails = Loadable(lazy(() => import("./ProductDetails")));

const ProductPage = () => {
  return (
    <>
      <ProductShowcase />
      <ProductDetails />
    </>
  );
};

export default ProductPage;
