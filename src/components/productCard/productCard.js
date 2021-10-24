import {  Typography } from "../../Global.style";
import { CardBox, CenterCol, Img } from "./productCard.style";
import Butn from "../button/button";
// import Rating from "@material-ui/lab/Rating";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/Cart/cartAction";
import { Link } from "react-router-dom";
import { Dis } from "../../screens/home/home.style";
function ProductCard(props) {
    const dispatch= useDispatch()
    // 
  return (
    <CardBox>
      <Img src={props.src} />
      <CenterCol>
        <Typography color=" #000" as={Link} to={`/product/${props.Id}`} fontSize={"20"}>{props.Name} بــ{props.Price} ر.س</Typography>        
        <Dis> {props.description? (props.description):("قسط بدفعة 1000 ريال مقدمة والباقي على 24 شهر")}</Dis>
      </CenterCol>
      <Butn
        width={"50%"}
        text={"اطلب الان"}
        link={"/cart"}
        handleClick={() => {
            dispatch(AddCartItem(props.product, 1));
        }}
      />
    </CardBox>
  );
}

export default ProductCard;
