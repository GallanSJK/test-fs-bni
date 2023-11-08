import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Tes from '../../assets/tes.png'
import 'swiper/css';
import 'swiper/css/pagination';

export default function Home() {
    return (
        <>
            <section className="Home">
                <Container className='px-0'>
                    <Row>
                        <Col xs={12} lg={12}>
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
            </section>                
        </>
    )
}