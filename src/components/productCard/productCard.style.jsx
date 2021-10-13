



import styled from 'styled-components';
import { FlexCol } from '../../Global.style';

export const CardBox= styled(FlexCol)`
    width: 300px;
    min-width:285px;
    height:400px;
    padding:1rem;
    margin:0 1.5px 5px;
    background-color:#fff;
    justify-content: space-between;
    align-items: center;
    box-shadow:0px 2px 20px #08091E1A;
    border-radius: 5px;
    /* border: solid 0.5px #000; */
    `;

export const Img= styled('img')`
    width:100%;
    height: auto;
    max-height:50%;
    object-fit: contain;
    `
 export const CenterCol= styled(FlexCol)`
    align-items: center;
 `
