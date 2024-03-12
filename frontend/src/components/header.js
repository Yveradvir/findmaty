import { Button, Col, Container, Nav, Row } from "react-bootstrap";
import { useLocation } from "react-router-dom";


export default function Header() {
    const currUrl = useLocation();

    const navs = [
        { href: "/home", text: "Home" },
        { href: "/some", text: "Some" },
        { href: "/some2", text: "Some2" },
        { href: "/some3", text: "Some3" },
        { href: "/some4", text: "Some4" },
    ];

    return (
        <Container>
            <header className="py-4">
                <Row className="align-items-center">
                    <Col xs={8} className="d-flex justify-content-between align-items-center">
                        <div className='d-flex align-items-center'>
                            <h1 className="text-primary mb-0">
                                Nassage
                            </h1>
                        </div>
                        <Nav className="nav-pills ms-3">
                            {navs.map((nav, index) => (
                                <Nav.Item key={index}>
                                    <Nav.Link
                                        href={nav.href}
                                        active={currUrl.pathname === nav.href}
                                    >
                                        {nav.text}
                                    </Nav.Link>
                                </Nav.Item>
                            ))}
                        </Nav>
                    </Col>
                    <Col xs={4} className="d-flex justify-content-end">
                        <div className='btn-group'>
                            <Button href='/auth/login' variant="primary">Log In</Button>
                            <Button href='/auth/signup' variant="primary">Sign Up</Button>
                        </div>
                    </Col>
                </Row>
            </header>
        </Container>
    );
}