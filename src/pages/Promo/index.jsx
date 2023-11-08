import Container from 'react-bootstrap/Container';
import { FooterHome } from "../../components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Tes from '../../assets/tes.png'
// import { Link } from "react-router-dom";

export default function Promo() {
    return (
        <>
            <section className="Order">
                <Container>
                    <h1>Promo</h1>
                </Container>                
            </section>            
            <section className='Tabs'>
                <Container className='mb-5'>
                    <Tabs
                    defaultActiveKey="promo"
                    id="fill-tab-example"
                    className="mb-2"
                    fill
                    >
                        <Tab eventKey="promo" title="Promo">
                            <Card className='h-100 mb-3'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Diskon 15% (maks. hingga Rp 15,000)
                                        </h5>
                                        <p className='mb-1'>Hingga 31 DEC 2023</p>
                                        <p className='mb-1 fw-bold'>Kode Promo: GSJK99</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                            <Card className='h-100 mb-3'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Diskon 10% (maks. hingga Rp 10,000)
                                        </h5>
                                        <p className='mb-1'>Hingga 30 DEC 2023</p>
                                        <p className='mb-1 fw-bold'>Kode Promo: GSJK89</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                            <Card className='h-100 mb-3'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Diskon Rp 50,000
                                        </h5>
                                        <p className='mb-1'>Hingga 31 DEC 2023</p>
                                        <p className='mb-1 fw-bold'>Kode Promo: GSJK49</p>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </Tab>

                        <Tab eventKey="mypromo" title="Mypromo">
                        <Card className='h-100 mb-3'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Diskon 85% untuk user baru (10x penggunaan)
                                        </h5>
                                        <p className='mb-1'>Hingga 31 DEC 2023</p>
                                        <h6 className='mb-1 fw-bold d-flex justify-content-between align-items-center'>Kode Promo: GSJK99
                                            <div className='float-right'>
                                                    <Button className="btn btn-primary">Pilih</Button>
                                            </div>
                                        </h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                            <Card className='h-100 mb-3'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Diskon 75rb untuk user baru (4x penggunaan)
                                        </h5>
                                        <p className='mb-1'>Hingga 30 DEC 2023</p>
                                        <h6 className='mb-1 fw-bold d-flex justify-content-between align-items-center'>Kode Promo: GSJK89
                                            <div className='float-right'>
                                                    <Button className="btn btn-primary">Pilih</Button>
                                            </div>
                                        </h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                            <Card className='h-100 mb-3'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Diskon Rp 50,000 untuk user baru (1x penggunaan)
                                        </h5>
                                        <p className='mb-1'>Hingga 31 DEC 2023</p>
                                        <h6 className='mb-1 fw-bold d-flex justify-content-between align-items-center'>Kode Promo: GSJK49
                                            <div className='float-right'>
                                                    <Button className="btn btn-primary">Pilih</Button>
                                            </div>
                                        </h6>
                                            
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </Tab>
                    </Tabs>
                </Container>
            </section>
            <FooterHome />    
        </>
    )
}