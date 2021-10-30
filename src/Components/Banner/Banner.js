import React, {useState} from 'react'
import { Carousel, Button} from 'react-bootstrap'
import One from '../../Assets/Images/Banner/1.jpg'
import Two from '../../Assets/Images/Banner/2.jpg'
import Three from '../../Assets/Images/Banner/3.jpg'
import Four from '../../Assets/Images/Banner/4.jpg'
import Five from '../../Assets/Images/Banner/5.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect} fade>
        <Carousel.Item interval={1500}  style={{height: '37rem'}}>
            <img
            className="d-block w-100"
            src={One}
            alt="First slide"
            height="100%"
            />
            <Carousel.Caption>
            <Button variant="success" size="lg" style={{borderRadius: '25px', marginBottom: '25px'}}>Shop Now</Button>
            <p>Excepteur non in sunt occaecat labore duis exercitation in.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{height: '37rem'}}>
            <img
            className="d-block w-100"
            src={Two}
            alt="Second slide"
            height="100%"
            />
            <Carousel.Caption>
            <Button variant="success" size="lg" style={{borderRadius: '25px', marginBottom: '25px'}}>Shop Now</Button>
            <p>Ipsum consequat eiusmod deserunt Lorem ipsum elit.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{height: '37rem'}}>
            <img
            className="d-block w-100"
            src={Three}
            alt="Third slide"
            height="100%"
            />
            <Carousel.Caption>
            <Button variant="success" size="lg" style={{borderRadius: '25px', marginBottom: '25px'}}>Shop Now</Button>
            <p>Qui magna veniam proident adipisicing deserunt.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{height: '37rem'}}>
            <img
            className="d-block w-100"
            src={Four}
            alt="Fouth slide"
            height="100%"
            />
            <Carousel.Caption>
            <Button variant="success" size="lg" style={{borderRadius: '25px', marginBottom: '25px'}}>Shop Now</Button>
            <p>Laboris ullamco velit pariatur aute mollit magna commodo laboris.</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500} style={{height: '37rem'}}>
            <img
            className="d-block w-100"
            src={Five}
            alt="Fifth slide"
            height="100%"
            />
            <Carousel.Caption>
            <Button variant="success" size="lg" style={{borderRadius: '25px', marginBottom: '25px'}}>Shop Now</Button>
            <p>Eu veniam adipisicing commodo dolore occaecat reprehenderit deserunt dolore anim Lorem Lorem esse qui.</p>
            </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
    )
}

export default Banner
