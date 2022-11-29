import { FaFacebook, FaInstagram, FaTwitter, FaLinkedinIn } from 'react-icons/fa';

import { 
    Container, 
    Wrapper, 
    Column, 
    Title, 
    Link, 
    LinkIcon
} from './footer.styles';

const Footer = () => {
    return (
        <Container>
            <Wrapper>
                <Column>
                    <Title>Company</Title>
                    <Link to='/'>About Us</Link>
                    <Link to='/'>Our Services</Link>
                    <Link to='/'>Privacy Policy</Link>
                    <Link to='/'>Order Status</Link>
                    <Link to='/'>Affiliate Program</Link>
                </Column>
                <Column>
                    <Title>Get Help</Title>
                    <Link to='/'>FAQ</Link>
                    <Link to='/'>Shipping</Link>
                    <Link to='/'>Returns</Link>
                    <Link to='/'>Payment Options</Link>
                </Column>
                <Column>
                    <Title>Online Shop</Title>
                    <Link to='/'>Watch</Link>
                    <Link to='/'>Bag</Link>
                    <Link to='/'>Shoes</Link>
                    <Link to='/'>Dress</Link>
                </Column>
                <Column>
                    <Title>Follow Us</Title>                 
                    <Link to='/'>
                        <LinkIcon><FaFacebook/></LinkIcon>
                        Facebook
                        </Link>
                    <Link to='/'>
                        <LinkIcon><FaInstagram/></LinkIcon> 
                        Instagram 
                    </Link>
                    <Link to='/'>
                        <LinkIcon><FaTwitter/></LinkIcon> 
                        Twitter
                    </Link>
                    <Link to='/'>
                        <LinkIcon><FaLinkedinIn/></LinkIcon> 
                        LinkedIn
                    </Link>
                </Column>
            </Wrapper>
        </Container>
    )
}

export default Footer;