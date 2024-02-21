import Carousel from 'react-bootstrap/Carousel';
import '../style/global.css'

function HerbadexCarousel({title, secondTitle, thirdTitle, fImg, sImg, tImg}:
  {title: String, secondTitle: String, thirdTitle: String, fImg: string, sImg: string, tImg: string}) {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={fImg} alt="Image de plante" className='herbadexCarouselImage'/>
        <Carousel.Caption>
          <h3 className='herbadexCarouselCaption'>{title}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={sImg} alt="Image de plante" className='herbadexCarouselImage'/>
        <Carousel.Caption>
        <h3 className='herbadexCarouselCaption'>{secondTitle}</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={tImg} alt="Image de plante" className='herbadexCarouselImage'/>
        <Carousel.Caption>
        <h3 className='herbadexCarouselCaption'>{thirdTitle}</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default HerbadexCarousel;