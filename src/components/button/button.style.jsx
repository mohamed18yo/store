import styled from "styled-components";


import { Link } from "react-router-dom";

export const CustomeButton = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => (props.width ? props.width : "200px")};
  min-height: 45px;
  height: 45px;
  background-color: ${(props) => (props.isGray ? "#f2f2f2" : "#fcdd06bf")};
  color: ${(props) => (props.isGray ? "#242424" : "#242424")};
  border: none;
  border-radius: ${(props) => (props.radius ? props.radius : "10px")};
  font-size: 20px;
  cursor: pointer;
  text-decoration: none;

  margin-bottom:10px;
  /* style: ${(props) => props.style}; */
  ${(props) =>props.disabled? `background:gray;
                               color:white;
                               cursor: none;`: ""}        
`;
