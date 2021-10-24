import FeaturedProductsSection from "../home/featuerdProductSection";
import ProductSection from "./productSection";
import {fProduct,AllProduct} from "../home/product"

function Product() {
  return (
    <>
      <ProductSection product={AllProduct} />
      <FeaturedProductsSection products={fProduct}/>
    </>
  );
}

export default Product;
