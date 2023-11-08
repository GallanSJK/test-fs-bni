import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
// import Button from 'react-bootstrap/Button';
import Logo from '../../assets/bluebird.png'
import Back from '../../assets/back.webp'
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
    return (
        <>
            <section className="Login">
                <Container>
                    <Row className='pt-3'>
                        <Col xs={12} lg={12}>
                            <Link to='/'>
                                <Image className='img-fluid img-back' src={Back} />
                            </Link>
                        </Col>
                        <div className='pt-5'>
                            <Col xs={12} lg={12}>
                                <div className='text-center'>
                                    <Image className='img-fluid img-login' src={Logo} />
                                    <h4 className='pt-5'>Silahkan masukkan No. telepon dan password</h4>
                                </div>
                                <Form className='pt-5'>
                                    <p>Masukkan No. Telepon</p>
                                    <Form.Group className="mb-3 form-floating">
                                        <Form.Control type="number" id="floatingInput" placeholder="name@example.com" required />
                                        <Form.Label htmlFor='floatingInput'>No. Telepon</Form.Label>
                                    </Form.Group>
                                    
                                    <p>Masukkan Password</p>
                                    <Form.Group className="mb-3 form-floating">
                                        <Form.Control type="password" id="floatingPassword" placeholder="Password" required />
                                        <Form.Label htmlFor='floatingPassword'>Password</Form.Label>
                                    </Form.Group>
                                    <Link to='/home'>
                                        <div className="py-3 d-grid gap-2 col-lg-6 col-sm-12 mx-auto">
                                            <Button className="btn btn-primary" type='submit'>Login</Button>
                                        </div>
                                    </Link>
                                </Form>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </section>                
        </>
    )
}