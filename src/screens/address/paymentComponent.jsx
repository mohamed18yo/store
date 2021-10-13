import {
  Typography,
  Line,
  FlexRow,
  FlexCol,
  ProductImg,
  ErrorMsg,
} from "../../Global.style";
import { ShippingSchema } from "../../validationSchema";
import Butn from "../../components/button/button";
import { Input, Lbox, Rbox } from "./order.style";
import { Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { orderRequest } from "../../redux/order/orderAction";

export function PaymentComponent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const state = useSelector((state) => state);
  const handleSaveShipping = (value) => {
    console.log(value)
    dispatch(orderRequest(value));
    history.push("/proceed-checkout/place-order");
  };

  return (
    <FlexRow style={{ flexWrap: "wrap", alignItems: "flex-start" }}>
      <Formik
        initialValues={{
          name: "",
          phonNum: "",
          city: "",
          address: "",
          postalCode:  "",
        }}
        validationSchema={ShippingSchema}
        onSubmit={handleSaveShipping}
      >
        {({ errors, touched }) => {
          return (
            <Form
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "space-around",
                alignItems: "start",
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
                  {/* Right Side Box "order Details" */}
                  <FlexCol
                style={{ width: "30%",alignItems: "end",margin:"0 0 1rem", minWidth: "300px" }}
              >
                <Rbox>
                  <FlexRow>
                    <Typography fontSize={28} color={"#242424"}>
                      تفاصيل الطلبية
                    </Typography>
                    <Typography fontSize={22} color={"#707070"}>
                      تعديل
                    </Typography>
                  </FlexRow>
                  {state.cart.cart.map((item) => (
                    <>
                      <FlexRow
                        kee={item._id}
                        style={{ width: "100%", height: "106px" }}
                      >
                        <ProductImg
                          src={item.image}
                          width={"auto"}
                          style={{maxHeight:"120px"}}
                        />
                        <FlexCol style={{ height: "99px" }}>
                          <Typography
                            style={{marginBottom: "0px" }}
                           
                            fontSize={18}
                            color={"#707070"}
                          >
                            {item.name}
                          </Typography>
                          <FlexRow>
                            <Typography
                              style={{}}
                              fontSize={18}
                              color={"#707070"}
                            >
                             {item.price}  {item.qty}X<br/>{item.price} ر.س
                            </Typography>
                            
                          </FlexRow>
                        </FlexCol>
                      </FlexRow>
                      <Line width={"100%"} />
                    </>
                  ))}

                  <FlexRow style={{ width: "100%" }}>
                    <Typography fontSize={16} color={"#707070"}>
                      الاجمالي 
                    </Typography>
                    <Typography fontSize={16} color={"#707070"}>
                     
                      {state.cart.cart
                        .reduce((acc, item) => {
                          return acc + item.price * item.qty;
                        }, 0)
                        .toFixed(2)} ر.س
                    </Typography>
                  </FlexRow>
                  <FlexRow style={{ width: "100%" }}>
                    <Typography fontSize={16} color={"#707070"}>
                      الضريبة
                    </Typography>
                    <Typography fontSize={16} color={"#707070"}>
                      ر.س0.00
                    </Typography>
                  </FlexRow>
                  <FlexRow style={{ width: "100%" }}>
                    <Typography fontSize={16} color={"#707070"}>
                      الشحن
                    </Typography>
                    <Typography fontSize={16} color={"#707070"}>
                      ر.س0.00
                    </Typography>
                  </FlexRow>
                  <FlexRow style={{ width: "100%" }}>
                    <Typography fontSize={16} color={"#242424"}>
                      الاجمالي 
                    </Typography>
                    <Typography fontSize={16} color={"#242424"}>
                     
                      {state.cart.cart
                        .reduce((acc, item) => {
                          return acc + item.price * item.qty;
                        }, 0)
                        .toFixed(2)} ر.س
                    </Typography>
                  </FlexRow>
                </Rbox>
                
              </FlexCol>
              {/* Left Box Shipping deatils */}
              <Lbox>
                <Typography fontSize={32} color={"#242424"}>
                  العنوان
                </Typography>
                <FlexRow
                  style={{
                    // width: "774px",
                    flexWrap: "wrap",
                    justifyContent: "space-between",
                  }}
                >
                  <FlexCol
                    style={{ width: "45%", minWidth: "300px", height: "auto" }}
                  >
                    <Typography fontSize={22} color={"#707070"}>
                      الاسم 
                    </Typography>
                    <Input name={"name"}></Input>
                    {errors.name && touched.name ? (
                      <ErrorMsg>{errors.name}</ErrorMsg>
                    ) : null}
                    
                    <Typography fontSize={22} color={"#707070"}>
                    رقم الموبايل للتواصل                   
                    </Typography>
                    <Input name={"phonNum"}></Input>
                    {errors.phonNum && touched.phonNum ? (
                      <ErrorMsg>{errors.phonNum}</ErrorMsg>
                    ) : null}
                    <Typography fontSize={22} color={"#707070"}>
                      اللون
                    </Typography>
                    <Input name={"postalCode"}></Input>
                    {errors.postalCode && touched.postalCode ? (
                      <ErrorMsg>{errors.postalCode}</ErrorMsg>
                    ) : null}
                  </FlexCol>
                  <FlexCol
                    style={{ width: "45%", minWidth: "300px", height: "197px" }}
                  >
                    <Typography fontSize={22} color={"#707070"}>
                      المدينة 
                    </Typography>
                    <Input name={"city"}></Input>
                    {errors.city && touched.city ? (
                      <ErrorMsg>{errors.city}</ErrorMsg>
                    ) : null}
                    <Typography fontSize={22} color={"#707070"}>
                      عنوان الشارع 
                    </Typography>
                    <Input name={"address"}></Input>
                    {errors.address && touched.address ? (
                      <ErrorMsg>{errors.address}</ErrorMsg>
                    ) : null}
                  </FlexCol>
                </FlexRow>
                <Typography fontSize={32} color={"#242424"}>
                </Typography>
                
                <FlexRow
                  style={{
                    width: "100%",
                    justifyContent: "space-between",
                  }}
                ></FlexRow>
              </Lbox>
              <FlexRow
                  style={{ justifyContent: "flex-end", marginTop: "1rem", width:"89%" }}
                >
                  <Butn  text={"تأكيد "} />
                </FlexRow>
            </Form>
          );
        }}
      </Formik>
    </FlexRow>
  );
}
export default PaymentComponent;
