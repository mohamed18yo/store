



import FeaturedProductsSection from "./featuerdProductSection";
import HeroSection from "./heroSection";
import SonySection from './sonySection'
import AppleSection from './appleSection'
import {SonyProduct,Hproducts,fProduct,ApplePro,Ipads} from './product';
import DiscountSection from "./discountSection";
import IpadSection from "./ipadSection";

function Home(){

    return<>
    <HeroSection products={Hproducts}/>
    <AppleSection products={ApplePro} />
    <DiscountSection/>
    <SonySection products={SonyProduct}/>
    <IpadSection products={Ipads}/>
    <FeaturedProductsSection products={fProduct}/>
    </>
}

export default Home;