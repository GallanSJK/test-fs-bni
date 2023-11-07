import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Footer() {
    return (
        <>
            <section className="Footer">
                <Container>
                    <Row className='pt-5'>
                        <Col xs={12} lg={12}>
                            <div className='text-center'>
                                <h3>Silahkan login untuk masuk</h3>
                                <Link to='/login'>
                                    <div className="py-3 d-grid gap-2 col-lg-6 col-sm-12 mx-auto">
                                        <Button className="btn btn-primary">Login</Button>
                                    </div>
                                </Link>
                                <p>Belum punya akun ?
                                    <Link to='/login' className='text-decoration-none'><b> Daftar Sekarang</b></Link>
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>                
        </>
    )
}