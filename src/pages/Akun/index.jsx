import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Container from 'react-bootstrap/Container';
import { FooterHome } from "../../components";
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

export default function Akun() {
    return (
        <>
            <section className="Order">
                <Container>
                    <Row className="row-cols-lg-auto pt-3 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-regular fa-user" size="2xl" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Gallan</p>
                            <p className='mb-0'>+6289517619108</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex flex-column px-1'>
                        <p className='mb-0'>Ubah profil
                            <FontAwesomeIcon className='px-1' icon="fa-solid fa-arrow-right" />
                        </p>
                            
                        </Col>
                    </Row>
                </Container>                
            </section>       
            <section className="Data">
                <Container>
                    <Row className="row-cols-lg-auto py-4 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-wallet" size="lg" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Pembayaran</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />                        
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-auto py-4 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-shield-halved" size="lg" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Keamanan</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />                        
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-auto py-4 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-gear" size="lg" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Manajemen Akun</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />                        
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-auto py-4 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-phone" size="lg" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Pusat Bantuan</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />                        
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-auto py-4 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-envelopes-bulk" size="lg" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Syarat dan ketenutuan</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />                        
                        </Col>
                    </Row>
                    <Row className="row-cols-lg-auto py-4 g-0">
                        <Col xs={2} lg={2} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-folder-open" size="lg" />
                        </Col>
                        <Col xs={6} lg={6} className='px-1 d-flex flex-column justify-content-center'>
                            <p className='mb-0'>Kebijakan Privasi</p>
                        </Col>
                        <Col xs={4} lg={4} className='d-flex align-items-center justify-content-center'>
                            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />                        
                        </Col>
                    </Row>
                </Container>
            </section>                     
            <section className='Logout'>
                <Container className='mb-5'>
                    <Link to='/' className='text-decoration-none'>
                        <div className="py-3 d-grid gap-2 col-lg-6 col-sm-12 mx-auto">
                            <Button className="btn btn-danger" type='submit'>Logout</Button>
                        </div>
                    </Link>
                </Container>
            </section>
            <FooterHome />    
        </>
    )
}