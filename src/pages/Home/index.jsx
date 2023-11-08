import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tes from '../../assets/tes.png'
import Dompet from '../../assets/dompet.png'
import Mobil from '../../assets/mobil.png'
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <>
            <section className="Home">
                <Container>
                    <Row>
                        <Col xs={12} lg={12} className='px-0'>
                        <div className="carousel-wrapper">
                            <div className="swiper-container">
                        
                                <Swiper 
                                modules={[ Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 3000,
                                    disableOnInteraction: false,
                                }}
                                loop={true}
                                navigation
                                pagination={{ clickable: true }}
                                scrollbar={{ draggable: true }}
                                breakpoints={{ 
                                }}>
                                <SwiperSlide>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={Tes} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={Tes} />
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={Tes} />
                                    </div>
                                </SwiperSlide>
                                
                                </Swiper>
                            </div> 
                        </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className="justify-content-center">
                        <Col lg={12}>
                        <div className="shadow p-3 rounded">
                            <Row className="row-cols-lg-auto g-0">
                                <Col xs={2} lg={2} className='px-1 d-flex align-items-center'>
                                    <img className='img-fluid' src={Dompet} />
                                </Col>
                                <Col xs={10} lg={10} className='px-3'>
                                    <h5>Rp. 50.000</h5>
                                    <h5>Tap to change</h5>
                                </Col>
                            </Row>
                        </div>
                        </Col>
                    </Row>
                </Container>

                <Container>
                    <Row className='pt-3 text-center'>
                        <Col xs={3} lg={3}>
                            <Image className='img-fluid' src={Mobil} />
                            <h5>Ride</h5>
                        </Col>
                        <Col xs={3} lg={3}>
                            <Image className='img-fluid' src={Mobil} />
                            <h5>Rent</h5>
                        </Col>
                        <Col xs={3} lg={3}>
                            <Image className='img-fluid' src={Mobil} />
                            <h5>Delivery</h5>
                        </Col>
                        <Col xs={3} lg={3}>
                            <Image className='img-fluid' src={Mobil} />
                            <h5>Shuttle</h5>
                        </Col>
                    </Row>
                </Container>

                
            </section>                
        </>
    )
}