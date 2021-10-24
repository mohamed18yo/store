import {
  HeroBox,
  FixedIneerSection,
  HeroTitle,
  SliderImage,
  SideBox,
  FixedRow,
  Arrow,
  Dot,Dis,
} from "./home.style";
import { Typography, SectionRole } from "../../Global.style";
import Butn from "../../components/button/button";
import { useState } from "react";
import SwipeableViews from "react-swipeable-views";
import { useDispatch } from "react-redux";

import { AddCartItem } from "../../redux/Cart/cartAction";
import { Link } from "react-router-dom";

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

function HeroSection({ products }) {
    const dispatch= useDispatch()
  const [index, setIndex] = useState(0);
  const handleChangeIndex = () => {};
  return (
    <SectionRole color={"#F2F2F2"}>
      <FixedIneerSection>
        <SwipeableViews
          style={Object.assign({}, styles.root, styles.root)}
          index={index}
          onChangeIndex={handleChangeIndex}
        >
          {products.map((items) => (
            <HeroBox key={items._id}>
              <SideBox style={{ maxWidth: "500px" }}>
              
                <Typography style={{marginBottom:0, marginTop:0}} fontSize={23} color={"#242424"}>
                  تسوق الان بـ {items.price} ر.س
                  <br />
                 
                  <HeroTitle as={Link} to={`/product/${items._id}`}>{items.name}</HeroTitle>
                </Typography>
               
                <Dis>قسط بدفعة1000ريال مقدمة والباقي على 24 شهر</Dis>
                <Butn
                  radius={"20px"}
                  style={{ height: 47 }}
                  text={`${items.avilabel ? "شراء الان" : "احجز مسبقاً"}`}
                  link={"/cart"}
                  handleClick={() => {
                    dispatch(AddCartItem(items,1))
                  }}
                />
              </SideBox>
              <SideBox>
                <SliderImage src={items.images[0]} width={"100%"} />
              </SideBox>
            </HeroBox>
          ))}
        </SwipeableViews>
        <FixedRow>
          <Arrow
            onClick={() => {
              if (index === 0) {
                setIndex(2);
              } else {
                setIndex(index - 1);
              }
            }}
            isLeft={true}
          >
            &#10095;
          </Arrow>
          {products.map((el, i) => (
            <Dot
              onClick={() => {
                setIndex(i);
              }}
              isGray={index !== i}
            />
          ))}

          <Arrow
            onClick={() => {
              if (index === 2) {
                setIndex(0);
              } else {
                setIndex(index + 1);
              }
            }}
          >
            &#10095;
          </Arrow>
        </FixedRow>
      </FixedIneerSection>
    </SectionRole>
  );
}
export default HeroSection;
