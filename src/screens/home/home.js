



import FeaturedProductsSection from "./featuerdProductSection";
import HeroSection from "./heroSection";
import AppleSection from './appleSection'
import SonySection from './sonySection'
import {fProduct,product,AppleProduct,SonyProduct} from './product';

function Home(){
    return<>
    <HeroSection products={product}/>
    <FeaturedProductsSection products={fProduct}/>
    <AppleSection products={AppleProduct}/>
    <SonySection products={SonyProduct}/>
    </>
}

export default Home;