import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import Voucher from '../../assets/voucher.png'
import Mobil from '../../assets/mobil.png'
import Jam from '../../assets/jam.png'
import 'swiper/css';
import 'swiper/css/pagination';

export default function Slider() {
    return (
        <>
            <section className="Slider">
                <Container>
                    <Row className='pt-5'>
                        <Col xs={12} lg={12}>
                        <div className="carousel-wrapper">
                            <div className="swiper-container">
                        
                                <Swiper 
                                modules={[ Navigation, Autoplay, Pagination, Scrollbar, A11y]}
                                spaceBetween={30}
                                slidesPerView={1}
                                autoplay={{
                                    delay: 2500,
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
                                        <img className='img-fluid' src={Mobil} />
                                        <h3 className='py-5'>Pesan Taksi dan sewa mobil termurah</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={Voucher} />
                                        <h3 className='py-5'>Naik taksi dijalan tetap bisa bayar non tunai dan banyak diskon</h3>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className='text-center'>
                                        <img className='img-fluid' src={Jam} />
                                        <h3 className='py-5'>Efisiensi waktu order sesuai kebutuhan, harga pasti & harga argo</h3>
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