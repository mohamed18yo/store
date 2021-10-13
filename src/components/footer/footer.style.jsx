


import styled from 'styled-components'
import { FlexCol,FlexRow } from '../../Global.style'

export const FooterBox= styled(FlexCol)`
align-items: flex-start;
justify-content: flex-start;
width:100%;

`

export const AddressSection= styled(FlexRow)`
      @media screen and (max-width:650px){
         flex-direction: column;
  }
`