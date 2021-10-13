



import { Link } from 'react-router-dom';
import { Typography } from '../../Global.style';
import{NavSection,LogoImg} from './navbar.style';

function NavBar(){
    return <NavSection>
        <Typography as={Link} to={"/"} fontSize={"25"} color={"#fff"}>
            <LogoImg src="https://qomrh.com/wp-content/uploads/2019/06/logo23-1030x553.png" />
        </Typography>
    </NavSection>
}
export default NavBar;