import Pagination from 'react-bootstrap/Pagination';
import GetCard from '../sharedComponent/GetCard';
import medos from '../assets/medos.jpg'

function GetPagination() {
    return (
      <div style={{display:'flex', width:'100%', flexDirection:'column', alignItems:'center'}}>
        <Pagination>
          <Pagination.First />
          <Pagination.Prev />
          <Pagination.Item>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Next />
          <Pagination.Last />
        </Pagination>
      </div>
    );
  }

function MyCollection() {
    const plantes = [
      { name: 'Sapin', description: 'C\'est un connifere.' },
      { name: 'Plantes', description: 'c une plantes logique' },
      { name: 'Fleur', description: 'c une plante aussi' },
      { name: 'Pissenlit', description: 'je crois aussi' },
      { name: 'Rose', description: 'aussi' },
      { name: 'Mohamded', description: 'c pas une plantes ca par contre' },
      { name: 'Xav', description: 'non plus' },
      { name: 'Le w', description: 'on sais jamais' },
      { name: 'Test', description: 'big test ca' },
    ];

    var image = medos;
    return(
      <>
        <div style={{ padding:'1rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {plantes.map((name, index) => (
            <GetCard key={index} name={name.name} image={image} id='1'/>
          ))}
        </div>
        <GetPagination/>
      </>
    );
}

export default MyCollection