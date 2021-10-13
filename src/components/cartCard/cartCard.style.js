import styled from "styled-components";
import { FlexRow } from "../../Global.style";

export const SecCard = styled(FlexRow)`
  position: relative;
  justify-content: space-around;
  width: 60%;
  min-width:300px;
  height: 200px;
  height:auto;
  /* background: #f2f2f2 0% 0% no-repeat padding-box; */
  background: #ffdcdc 0% 0% no-repeat padding-box;
  margin: 0 0 1rem;
  border-radius: 16px;
  padding: 0 1rem ;

  @media screen and (max-width:700px){
    font-size:22px;
  }
 
  
`;

export const FixedBox= styled(FlexRow)`
    width:60%;
    min-width:200px;
    flex-direction: column;
    font-size:20px;
    padding:10px;
  
` 
export const Cancel = styled("span")`
  font-size: 30px;
  cursor: pointer;
  position: absolute;
  top: 2px;
  left: 10px;  
`;
export const Counter = styled(FlexRow)`
  padding:1rem;
  background: #fff;
  width: 20%;
  min-width:100px;
  height: 18px;
  background: #ffffff 0% 0% no-repeat padding-box;
  opacity: 1;
  margin:5px; 
  @media screen and (max-width: 400px) {
    height: 12px;
  }
`;

export const ImgCard= styled('img')`
    width: 30%;
    min-width:100px;
    object-fit: contain;
    max-height:150px;
    padding: 10px;
`