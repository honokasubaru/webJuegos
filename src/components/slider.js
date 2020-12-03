import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./styles/slider.css";

class Slider extends React.Component {
  render() {
    return (
      <Carousel fade={true} interval={30000}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/Where-The-Locals-Go/Montevideo/cityscape-montevideo-uruguay.ngsversion.1473955227104.adapt.1900.1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/Where-The-Locals-Go/Montevideo/cityscape-montevideo-uruguay.ngsversion.1473955227104.adapt.1900.1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/Where-The-Locals-Go/Montevideo/cityscape-montevideo-uruguay.ngsversion.1473955227104.adapt.1900.1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/Where-The-Locals-Go/Montevideo/cityscape-montevideo-uruguay.ngsversion.1473955227104.adapt.1900.1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.nationalgeographic.com/content/dam/travel/rights-exempt/Travel-2016/Where-The-Locals-Go/Montevideo/cityscape-montevideo-uruguay.ngsversion.1473955227104.adapt.1900.1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ytimg.com/vi/DOff7RNz7yw/hqdefault.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://www.muyinteresante.com.mx/wp-content/uploads/2018/05/httpstved-prod.adobecqms.netcontentdamtbgmexicomuyinteresantemxsociedadfotos171123olas.imgo_.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;
