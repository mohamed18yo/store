



import { SectionRole,IneerSection } from "../../Global.style";
import { DiscountBox, DiscountImg } from "./home.style";


function DiscountSection(){
    return <SectionRole>
        <IneerSection>
            <DiscountBox>
                <DiscountImg src="/sub-banner1.jpg"/>
                <DiscountImg src="/sub-banner2.jpg"/>
                <DiscountImg src="/sub-banner3.jpg"/>
            </DiscountBox>
           
        </IneerSection>
    </SectionRole>
}

export default DiscountSection;