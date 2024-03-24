import Carousel from 'react-bootstrap/Carousel';
import '../style/global.css'

/**
 * @author Wandrille BALLEREAU
 * @description Génère un carrousel formaté selon des textes et des images en entré
 * @param param0 title: le titre principal, secondTitle: le titre secondaire, thirdTitle: le titre tertiaire, fImg: le lien de la 1er image, sImg: le lien de la seconde image, tImg: le lien de la troisième image
 * @returns Un carrousel formatter pret à être affiché
 */
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