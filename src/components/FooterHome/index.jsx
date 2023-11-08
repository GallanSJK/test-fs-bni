import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";

export default function FooterHome() {
    return (
        <>
            <section className="FooterHome d-block">
                <Container>
                    <ListGroup as="ul">
                    <ListGroup.Item as="li">
                        <Link to='/home'>
                            <FontAwesomeIcon icon="fa-solid fa-house" />
                            <span>Home</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Link to='/promo'>
                            <FontAwesomeIcon icon="fa-solid fa-percent" />
                            <span>Promo</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Link to='/order'>
                            <FontAwesomeIcon icon="fa-solid fa-book" />
                            <span>Order</span>
                        </Link>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Link to='/'>
                            <FontAwesomeIcon icon="fa-solid fa-user" />
                            <span>Akun</span>
                        </Link>
                    </ListGroup.Item>
                    </ListGroup>
                </Container>

                
            </section>                
        </>
    )
}