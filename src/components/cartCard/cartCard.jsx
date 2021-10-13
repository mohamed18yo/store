



import { Typography } from "../../Global.style";
import { SecCard,ImgCard,FixedBox,Cancel,Counter } from "./cartCard.style";
import { useDispatch } from "react-redux";
import { AddCartItem } from "../../redux/Cart/cartAction";
import { Link } from "react-router-dom";

function CartCard(props) {
  const dispatch= useDispatch()

  return (
    <SecCard>
      <ImgCard  src={props.src} />
      <FixedBox>
      <Typography
        color={"#242424"}
        as={Link}
        to={`/product/${props.product._id}/${props.product.name}` }
        fontSize={21}> {props.title} </Typography>
      <Counter>
          <Typography onClick={()=>{
                if(props.product.qty>1){
                  dispatch(AddCartItem(props.product,-1))
                }
              }} style={{cursor:'pointer', fontWeight:600}} fontSize={30}>-</Typography>
          <Typography fontSize={30}> {props.count}</Typography>
          <Typography onClick={()=>{
                if(props.product.qty < props.product.countInStock){
                  dispatch(AddCartItem(props.product,1))
                }
              }} style={{cursor:'pointer'}} fontSize={30}> +</Typography>
      </Counter>
      <Typography style={{margin:"5px 0 0"}} fontSize={20}>{props.price} ر.س</Typography>
      </FixedBox>
      <Cancel onClick={props.deleteFunction}>×</Cancel>
      
    </SecCard>
  );
}
export default CartCard;
