import { FlexRow, IneerSection, Line, SectionRole, Typography } from "../../Global.style";
import { AddressSection, FooterBox } from "./footer.style";


import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
function Footer(){
    return<SectionRole>
        <IneerSection style={{alignItems: "flex-start"}}>
            <FooterBox>
            <Typography  style={{margin:"0 0"}} fontSize={32}>  العنوان</Typography>
             <Line style={{marginRight: "0px"}} color={"#fcdd06bf"} height={"5px"}></Line>    
             <Line color={"#a0a0a0"} height={"1px"} width={"100%"}></Line>

            <AddressSection >
                <FlexRow style={{}}>
                <Typography fontSize={18}>  <LocationOnIcon/> السعودية - الرياض</Typography>
                </FlexRow>
                <FlexRow style={{}}>
                <Typography fontSize={18}> <MailOutlineIcon/> info@exstra.com</Typography>
                </FlexRow>
                <FlexRow style={{}}>
                <Typography fontSize={18}><PhoneIcon/>+966582622161</Typography>
                </FlexRow>
             </AddressSection>
            </FooterBox>
          
        </IneerSection>
    </SectionRole>
}

export default Footer;