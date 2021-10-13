



import { ProductsBox, Line,Dot,FixedRow } from "./home.style";
import { Typography,FlexRow, IneerSection, SectionRole } from "../../Global.style";
import ProductCard from "../../components/productCard/productCard";
import {useState} from 'react';
import SwipeableViews from "react-swipeable-views";


const styles = {
  root: {
    position: "relative",
    width: "100%",
  },
  styleIcon: {
    fontSize: 35,
    color: "#fcdd06bf",
    fill: "#fcdd06bf",
    cursor: "pointer",
  },
  styleIconSave: {
    fontSize: 40,
    color: "#242424",
    fill: "#242424",
    opacity: 0.3,
  },
  styleIconArrow: {
    fontSize: 40,
    color: "#242424",
  },
  styleIconArrowBack: {
    fontSize: 40, 
    color: "#707070",
    opacity: 0.3,
  },
};

function FeaturedProductsSection({products}) {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};
// get screen width 
    const chunkSize = window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;
// constract array slider
     const arr=[...products]
      const productArray=[] 

      for (let index = 0; index < arr.length; index++) {
        productArray.push(arr.splice(0, chunkSize))
        
      }
        
  return (
    <SectionRole color={"#F7F8FC"}>
      <IneerSection>
        <ProductsBox>
          <Typography style={{margin:"0 0"}} fontSize={32}>أحدث التصنيفات</Typography>
          <Line style={{ }} color={"#fcdd06bf"} height={"7px"}></Line>
          <Line color={"#a0a0a0"} height={"1px"} width={"100%"}></Line>
          <SwipeableViews
              style={Object.assign({}, styles.root, styles.root)}
              index={index}
              onChangeIndex={handleChangeIndex}   
          >
         
            {productArray.map((item)=>
            <FlexRow key={item._id} style={{ marginTop: 5}}>
                      {item.map((pro)=><ProductCard 
                      product={pro}
                      key={pro._id}
                      Id={pro._id}
                      Name={pro.name}
                      src={pro.image}
                      Rate={pro.rating}
                      Price={pro.price}
                      title={pro.name}
                    ></ProductCard>  )}
                </FlexRow>
            )}

           </SwipeableViews>
          <FixedRow  style={{marginTop:"5px"}}>
                    {productArray.map((dot,i)=>
                        <Dot
                        onClick={() => {
                          setIndex(i);
                        }}
                        isGray={index !== i}
                      />
                    )}
            
            
          </FixedRow>
        </ProductsBox>
      </IneerSection>
    </SectionRole>
  );
}

export default FeaturedProductsSection;
