import Carousel from 'react-bootstrap/Carousel';

function HerbadexCarousel({title, secondTitle, thirdTitle, fImg, sImg, tImg}:
  {title: String, secondTitle: String, thirdTitle: String, fImg: string, sImg: string, tImg: string}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={fImg} alt="Image de plante" style={{width: "100%"}}/>
        <Carousel.Caption>
          <h3 style={{textShadow: "1px 1px 2px black", textAlign: 'center'}}>{title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sImg} alt="Image de plante" style={{width: "100%"}}/>
        <Carousel.Caption>
        <h3 style={{textShadow: "1px 1px 2px black", textAlign: 'center'}}>{secondTitle}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={tImg} alt="Image de plante" style={{width: "100%"}}/>
        <Carousel.Caption>
        <h3 style={{textShadow: "1px 1px 2px black", textAlign: 'center'}}>{thirdTitle}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HerbadexCarousel;