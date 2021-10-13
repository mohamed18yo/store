



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

function SonySection({products}) {
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};
       // get screen width 
  const chunkSize =window.innerWidth > 1100 ? 3 : window.innerWidth > 800 ? 2 : 1;  // constract array slider
  
  const splitArr= ()=>{
    const arr1=[...products]
    const newArr=[] 
    while(arr1.length) {newArr.push(arr1.splice(0, chunkSize));}
    console.log("productArray: ",newArr)

    return newArr.map((itemProducts, index) => (
      <FlexRow key={index}>
        {itemProducts.map((pro) => (
          <ProductCard 
          product={pro}
          key={index}
          Id={pro._id}
          Name={pro.name}
          src={pro.image}
          Rate={pro.rating}
          Price={pro.price}
          title={pro.name}
        ></ProductCard>
        ))}
      </FlexRow>
    ));
  };
        
  return (
    <SectionRole  color={"#F7F8FC"}>
      <IneerSection>
        <ProductsBox>
          <Typography  style={{margin:"0 0"}} fontSize={32}>منتجات سوني</Typography>
          <Line style={{}} color={"#fcdd06bf"} height={"7px"}></Line>
          <Line color={"#a0a0a0"} height={"1px"} width={"100%"}></Line>
          <SwipeableViews
              style={Object.assign({}, styles.root, styles.root)}
              index={index}
              onChangeIndex={handleChangeIndex}   
          >
         
            {splitArr()}

           </SwipeableViews>
          <FixedRow  style={{margin:"20px 0 20px"}}>
                    {splitArr().map((dot,i)=>
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

export default SonySection;
