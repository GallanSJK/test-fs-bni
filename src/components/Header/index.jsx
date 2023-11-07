import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Button from 'react-bootstrap/Button';
import Logo from '../../assets/bluebird.png'
import Id from '../../assets/id.png'
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Header() {
    return (
        <>
            <section className="Header">
                <Container>
                    <Row className='pt-3'>
                        <Col xs={6} lg={6}>
                            <Image className='float-start img-fluid img-header' src={Logo} />
                        </Col>
                        <Col xs={6} lg={6}>
                            <Image className='float-end img-fluid img-header' src={Id} />
                        </Col>
                    </Row>
                </Container>
            </section>                
        </>
    )
}