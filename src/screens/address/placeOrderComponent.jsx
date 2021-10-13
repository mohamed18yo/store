import {
  Typography,
  FlexRow,
  FlexCol,
  ProductImg,
  
} from "../../Global.style";
import {
  ShippingBox,
  OrderDetailsBox,
  CenterBox,
  OrdersBox,
  PaymetnBox,
  Alink
} from "./order.style";
import { useSelector } from "react-redux";

function PlaceOreder() {
  const state= useSelector((state)=>state)
  return (
          <FlexRow style={{ flexWrap: "wrap", alignItems: 'flex-start'}}>
            <ShippingBox style={{justifyCcontent: 'space-around'}}>
              <Typography fontSize={24} color={"#242424"}>
                العنوان 
              </Typography>
              <Typography fontSize={22} color={"#242424"}>
              {state?.userDetailes?.user?.name}
              </Typography>
              <Typography fontSize={16} color={"#707070"}>
                  {state?.cart?.shippingAddress?.country}-
                  {state?.cart?.shippingAddress?.city}
              </Typography>
              <CenterBox>
                <FlexRow>
                  <Typography fontSize={24} color={"#242424"}>
                   تفاصيل الطلبية
                  </Typography>
                  <Typography fontSize={22} color={"#707070"}>
                    تعديل
                  </Typography>
                </FlexRow>
                <OrdersBox>
                  {state.cart.cart.map((item)=><FlexRow key={item._id} style={{ height: "106px" }}>
                    <ProductImg src={item.image} width={135} />
                    <FlexCol style={{ height: "99px" }}>
                      <Typography fontSize={16} color={"#707070"}>
                        {item.name}
                      </Typography>
                      <FlexRow>
                        <Typography fontSize={16} color={"#707070"}>
                          ر.س{item.price} ×{item.qty}
                        </Typography>
                        <Typography fontSize={16} color={"#707070"}>
                          ر.س{item.price}
                        </Typography>
                      </FlexRow>
                    </FlexCol>
                  </FlexRow>
                  )}

                </OrdersBox>
              </CenterBox>
              <PaymetnBox>
                <FlexRow style={{}}>
                  <Typography fontSize={24} color={"#242424"}>
                    
                  </Typography>
                  <Typography fontSize={22} color={"#707070"}>
                  </Typography>
                </FlexRow>
                <Typography fontSize={16} color={"#242424"}>
                </Typography>
              </PaymetnBox>
            </ShippingBox>
            <FlexCol style={{width:'25%',margin:'1rem 0'}}>
              
              <OrderDetailsBox>
                    <Typography fontSize={24} color={"#242424"}>
                      تفاصيل الطلبية 
                    </Typography>
                    <FlexRow >
                      <Typography fontSize={16} color={"#707070"}>
                        السعر
                      </Typography>
                      <Typography fontSize={16} color={"#707070"}>
                        ر.س {state.cart.cart.reduce((acc, item)=>{
                          return acc+item.price*item.qty
                        },0).toFixed(2)}
                      </Typography>
                    </FlexRow>
                    <FlexRow >
                      <Typography fontSize={16} color={"#707070"}>
                        الضريبة
                      </Typography>
                      <Typography fontSize={16} color={"#707070"}>
                        ر.س0.00
                      </Typography>
                    </FlexRow>
                    <FlexRow >
                      <Typography fontSize={16} color={"#707070"}>
                        الشحن
                      </Typography>
                      <Typography fontSize={16} color={"#707070"}>
                        ر.س 0.00
                      </Typography>
                    </FlexRow>
                    <FlexRow >
                      <Typography fontSize={16} color={"#242424"}>
                        الاجمالي
                      </Typography>
                      <Typography fontSize={16} color={"#242424"}>
                        {state?.cart?.cart?.reduce((acc, item)=>{
                          return acc+item.price*item.qty
                        },0).toFixed(2)}ر.س
                      </Typography>
                    </FlexRow>
              </OrderDetailsBox>
              <Alink 
              href={"https://wa.me/966582622161"}
              >تواصل واتساب للدفع</Alink>
               
            </FlexCol>
          </FlexRow>
       
     
  );
}
export default PlaceOreder;
