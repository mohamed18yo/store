import {
    ProductBox,
    RowImgs,
    ProductViewBox,
    ProductDisecriptionBox,
    CircleColor,
    SizeField,
    CountBtn,
    CostumeRow,
    ProImg
  } from "./product.style";
  import {
    Typography,
    FlexRow,
    ProductImg,
    Counter,
    SectionRole,
    IneerSection,
  } from "../../Global.style";
  import Butn from "../../components/button/button";
  import { useParams } from "react-router";

//   import BookmarkIcon from "@material-ui/icons/Bookmark";
  import { useDispatch } from "react-redux";
  import { AddCartItem } from "../../redux/Cart/cartAction";
  import {useState} from 'react';

     
    
  function ProductSection({product}) {
    const[count, setCount]= useState(1)
    
    const dispatch= useDispatch()
    const params = useParams();
    const id = params.id;
    const Product= product.find((item) => item._id === id);
   
    const[img, setImg]= useState(Product?.images[0])
    const[siz, setSiz]= useState(Product?.size?.[0])
    return <SectionRole>
        <IneerSection>
          <ProductBox>
              <ProductViewBox>
                <ProImg src={img}  />
                <RowImgs>
                  {Product?.images?.map((item)=><ProductImg onClick={()=>{setImg(`${item}`);}} style={{cursor: "pointer"}} src={`${item}`} width={"30%"} />)}
                </RowImgs>
              </ProductViewBox>

              <ProductDisecriptionBox>
                <CostumeRow >
                  <Typography fontSize={23} color={"#242424"}>
                  {Product?.name}
                  </Typography> 
                  
                  <Typography style={{margin:'1rem 0'}} fontSize={22} color={"#242424"}>
                 {Product?.price}ر.س 
                  </Typography>
                </CostumeRow>
                <Typography fontSize={14}>
                  {Product?.description}
                </Typography>
                <Counter>
                  <CountBtn onClick={()=>{if(count>1){setCount(count-1)}}} style={{ cursor: "pointer" }}  fontSize={30}>
                    ــ
                  </CountBtn>
                  <Typography fontSize={30}> {count}</Typography>
                  <CountBtn onClick={()=>{if(count< Product?.countInStock){setCount(count+1)}}}  style={{ cursor: "pointer" }} fontSize={30}>
                    +
                  </CountBtn>
                </Counter>

               {Product?.color? (<>
               <FlexRow style={{margin:'1rem 0', justifyContent: "flex-start" }}>
                  <Typography color={"#707070"} fontSize={24}>
                    اللون :{" "}
                  </Typography>
                  <Typography fontSize={24} color={"#242424"}>
                    سيلفر
                  </Typography>
                </FlexRow>
                <FlexRow style={{ justifyContent: "flex-start" }}>
                  <CircleColor color={"#FED6BC"}></CircleColor>
                  <CircleColor color={"#EDEAE3"}></CircleColor>
                  <CircleColor color={"#6B7B73"}></CircleColor>
                </FlexRow>
                </>): null}
                {Product?.size? (
                <FlexRow style={{margin:'1rem 0', justifyContent: "flex-start" }}>
                  <Typography color={"#707070"} fontSize={24}>
                     التخزين : 
                  </Typography>
                  <Typography fontSize={24} color={"#242424"}>
                 {siz}GB 
                  </Typography>
                </FlexRow>):null}
                <CostumeRow>
                {Product?.size? (<>
                  <FlexRow style={{minWidth:'300px'}} width={'50%'}>
                    {Product?.size.map((i)=><SizeField isSelected={siz === i} onClick={()=>{setSiz(i)}}> {i}GB</SizeField>)}
                    
                    {/* <SizeField style={{ background: "#000", color: "#fff" }}> 256GB</SizeField>                 
                    <SizeField>512GB</SizeField> */}
                  </FlexRow>
                  </>):null}
                  <FlexRow style={{minWidth:'300px',marginTop:'2rem', justifyContent: "flex-end" }}>
                      {/* <Butn
                        style={{border: "1px solid #fcdd06bf", marginRight:"1rem"}}
                        width={"54px"}
                        text={<BookmarkIcon></BookmarkIcon>}
                        isGray={true}
                        
                        />
                   */}
                      <Butn link={'/cart'}  text={"اضف الى السلة "} handleClick={()=>{
                    if(Product.countInStock){
                      dispatch(AddCartItem(Product,count))
                    }
                  }}/>
                  </FlexRow>
                  
                </CostumeRow>
                
              </ProductDisecriptionBox>
      </ProductBox>
      </IneerSection>
    </SectionRole>
      
  }
  export default ProductSection;
  