import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import { Navigation, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tes from '../../assets/tes.png'
import 'swiper/css';

export default function Rekomendasi() {
    return (
        <>
            <section className="Rekomendasi">
                <Container className='pb-5'>
                    <h2 className='py-3'>Rekomendasi</h2>
                    <div className="carousel-wrapper">
                        <div className="swiper-container">
                    
                        <Swiper 
                        modules={[ Navigation, Scrollbar, A11y]}
                        spaceBetween={20}
                        slidesPerView={2}
                        loop={true}
                        navigation
                        scrollbar={{ draggable: true }}
                        breakpoints={{ 
                        }}>
                        
                        <SwiperSlide>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Paket Voucher Blubird
                                        </h5>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            EZTrip kemana saja
                                        </h5>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Happy Hour For You
                                        </h5>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </SwiperSlide>
                        <SwiperSlide>
                            <Card className='h-100'>
                                <Card.Img variant="top" src={Tes} />
                                <Card.Body>
                                    <Row>
                                        <Col md={12} lg={12}>
                                        <h5 className="fw-bold">
                                            Tips untuk booking
                                        </h5>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card> 
                        </SwiperSlide>
                        </Swiper>
                        </div> 
                    </div>
                </Container> 

                
            </section>                
        </>
    )
}