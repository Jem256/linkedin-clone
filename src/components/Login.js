import styled from "styled-components";




const Login = () => {
    return (
        <Container>
            <Nav>
                <a href="/">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" />
                </a>
            </Nav>

            <div>Login</div>
        </Container>
        
    )
}

const Container = styled.div`
   padding: 0px;
`;

const Nav = styled.nav`
   max-width: 1128px;
`;


export default Login;