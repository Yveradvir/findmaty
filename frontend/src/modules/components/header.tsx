import React from "react";
import {
    Navbar,
    Container,
    Nav,
    Form,
    FormControl,
    Button,
} from "react-bootstrap";

const Header: React.FC = () => {
    return (
        <Navbar bg="dark" variant="dark" className="p-3">
            <Container>
                <Navbar.Brand
                    href="/"
                    className="d-flex align-items-center text-white text-decoration-none"
                >
                    <svg
                        className="bi me-2"
                        width="40"
                        height="32"
                        role="img"
                        aria-label="Bootstrap"
                    >
                        <use xlinkHref="#bootstrap"></use>
                    </svg>
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#" className="text-secondary">
                        Home
                    </Nav.Link>
                    <Nav.Link></Nav.Link>
                </Nav>

                <Form className="d-flex me-3">
                    <FormControl
                        type="search"
                        placeholder="Search..."
                        className="mr-2"
                        aria-label="Search"
                    />
                    <Button variant="outline-light">Search</Button>
                </Form>

                <div>
                    <Button variant="outline-light" className="me-2">
                        Login
                    </Button>
                    <Button variant="warning">Sign-up</Button>
                </div>
            </Container>
        </Navbar>
    );
};

export default Header;
