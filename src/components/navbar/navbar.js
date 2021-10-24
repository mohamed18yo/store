



import { Link } from 'react-router-dom';
import { Typography } from '../../Global.style';
import{NavSection,LogoImg} from './navbar.style';

function NavBar(){
    return <NavSection>
        <Typography as={Link} to={"/"} fontSize={"25"} color={"#fff"}>مؤسسة أنا التقني 
        </Typography>
        <LogoImg  src="https://cdn.salla.sa/zadg/5HaFYbna84WoUSw58hzR6THGdYbjkTxZpGr1jKx2.png" />
    </NavSection>
}
export default NavBar;