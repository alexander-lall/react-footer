import {
    Container,
    H1,
    Wrapper,
    SignUpForm,
    Email,
    Button
} from './newsletter.styles';

const Newsletter = () => {
    return (
        <Container>            
            <Wrapper>
                <H1>Newsletter</H1>
                <SignUpForm>
                    <Email type='email'/>
                    <Button>Sign Up</Button>
                </SignUpForm>                
            </Wrapper>
        </Container>
    )
}

export default Newsletter;