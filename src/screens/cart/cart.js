


import { useSelector, useDispatch } from "react-redux";
import CartCard from "../../components/cartCard/cartCard";
import Butn from "../../components/button/button";
import { CartBox,ItemBox, RightBox,EmptyBox } from "./cart.style";

import { Typography, Line,ProductImg,IneerSection, SectionRole } from "../../Global.style";
import { DeleteCartItem } from "../../redux/Cart/cartAction";
// import Meta from "../../../components/meta/meta";
function Cart() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const isEmpty= state.cart.cart.length > 0
  return<>
  {/* <Meta
        title={'ProShop-Cart'}
        description={"ProShop-Cart"}
      /> */}
   {isEmpty? (<SectionRole>
        <IneerSection>
          <CartBox>
            <ItemBox>
              {state.cart.cart.map((item) => (
                <CartCard
                  src={item.image}
                  product={item}
                  price={item.price}
                  title={item.name}
                  count={item.qty}
                  deleteFunction={() => {
                    dispatch(DeleteCartItem(item._id));
                  }}
                ></CartCard>
              ))}
            </ItemBox>
            <RightBox>
              <Typography color={"#242424"} fontSize={25}>
                الاجمالي ({state.cart.cart.length}) منتج 
              </Typography>
              {/* <Typography isThrough={true} color={"#242424"} fontSize={24}>$999.97</Typography> */}
              <Typography color={"#242424"} fontSize={28}>
                الاجمالي 
                {state.cart.cart
                  .reduce((acc, item) => {
                    return acc + item.price * item.qty;
                  }, 0)
                  .toFixed(2)}ر.س
              </Typography>
              <Line width={'100%'} color={"#cbcbcb"} />
              <Butn
                link={"/proceed-checkout/shipping-address"}
                width={"100%"}
                text={"حجز الطلبية "}
              />
            </RightBox>
          </CartBox>
        </IneerSection>
      </SectionRole>):(<>
                        <SectionRole>
                          <IneerSection>
                            <EmptyBox>
                              <Typography fontSize={32} color={"#242424"}>
                                السلة فارغة 
                              </Typography>
                              <ProductImg src={"/emptyCart.png"} width={320} />
                            </EmptyBox>
                           </IneerSection>
                        </SectionRole>
                        
                      </>
      )}
    </>
}
export default Cart;
