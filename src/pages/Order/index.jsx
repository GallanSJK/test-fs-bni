import Container from 'react-bootstrap/Container';
import { FooterHome } from "../../components";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Mobil from '../../assets/mobil.png'
import { Link } from "react-router-dom";

export default function Order() {
    return (
        <>
            <section className="Order">
                <Container>
                    <h1>Order</h1>
                </Container>                
            </section>            
            <section className='Tabs'>
                <Container className='mb-5'>
                    <Tabs
                    defaultActiveKey="riwayat"
                    id="uncontrolled-tab-example"
                    className="mb-5"
                    >
                        <Tab eventKey="riwayat" title="Riwayat">
                            <div className='text-center py-5'>
                                <Image className='img-fluid' src={Mobil} />
                                <h1>Kamu belum pernah membuat order apapun</h1>
                                <Link to='/home'>
                                    <div className="py-3 d-grid gap-2 col-lg-6 col-sm-12 mx-auto">
                                        <Button className="btn btn-primary" type='submit'>Order Sekarang</Button>
                                    </div>
                                </Link>
                            </div>
                        </Tab>
                        <Tab eventKey="aktif" title="Aktif">
                            <div className='text-center'>
                                <Image className='img-fluid' src={Mobil} />
                                <h1>Kamu tidak memiliki order aktif. Yuk buat order baru!</h1>
                                <Link to='/home'>
                                    <div className="py-3 d-grid gap-2 col-lg-6 col-sm-12 mx-auto">
                                        <Button className="btn btn-primary" type='submit'>Order Sekarang</Button>
                                    </div>
                                </Link>
                            </div>
                        </Tab>
                        <Tab eventKey="terjadwal" title="Terjadwal">
                            <div className='text-center'>
                                <Image className='img-fluid' src={Mobil} />
                                <h1>Kamu belum menjadwalkan order apapun.</h1>
                                <Link to='/home'>
                                    <div className="py-3 d-grid gap-2 col-lg-6 col-sm-12 mx-auto">
                                        <Button className="btn btn-primary" type='submit'>Jadwalkan</Button>
                                    </div>
                                </Link>
                            </div>
                        </Tab>
                    </Tabs>
                </Container>
            </section>
            <FooterHome />    
        </>
    )
}