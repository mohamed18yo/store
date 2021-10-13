import { CustomeButton } from "./button.style";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


function Butn(props) {
  return (
    <CustomeButton
      disabled={props.isLoading}
      isGray={props.isGray}
      radius={props.radius}
      width={props.width}
      onClick={props.handleClick}
      style={props.style}
      to={props.link}
      as={props.link?"":"button"}
    >
      {props.text}  <ShoppingCartIcon></ShoppingCartIcon>
    </CustomeButton >
  );
}
export default Butn;
