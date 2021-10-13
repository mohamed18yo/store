import {  Typography } from "../../Global.style";
import { CardBox, CenterCol, Img } from "./productCard.style";
import Butn from "../button/button";
import Rating from "@material-ui/lab/Rating";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/Cart/cartAction";
import { Link } from "react-router-dom";
function ProductCard(props) {
    const dispatch= useDispatch()
  return (
    <CardBox>
      <Img src={props.src} />
      <CenterCol>
        <Typography color=" #000" as={Link} to={`/product/${props.Id}`} fontSize={"20"}>{props.Name}</Typography>
        <Rating
          name="read-only"
          style={{ margin: "" }}
          value={props.Rate}
          readOnly
        />
        <Typography fontSize={"20"}> {props.Price} ر.س</Typography>
      </CenterCol>
      <Butn
        width={"80%"}
        text={" أضف الى السلة"}
        link={"/cart"}
        handleClick={() => {
          if (props.product.countInStock) {
            dispatch(AddCartItem(props.product, 1));
          }
        }}
      />
    </CardBox>
  );
}

export default ProductCard;
