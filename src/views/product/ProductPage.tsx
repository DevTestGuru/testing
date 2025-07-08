import Header from '../../components/ProductComponents/Header'
import ProductDescription from '../../components/ProductComponents/ProductDescription'
import ProductImage from '../../components/ProductComponents/ProductImage'
import Features from '../../components/ProductComponents/Features'
import Footer from '../../components/ProductComponents/Footer'


const ProductPage = () => {
  return (
    <>
      <Header />
      <main>
        <ProductImage />
        <ProductDescription />
        <Features />
      </main>
      <Footer />
    </>
  );
};

export default ProductPage;
