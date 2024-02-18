import PerenualPlantList from '../sharedComponent/PerenualPlantList';

function AllCard(){
  return(
        <>
            <div style={{ padding:'1rem', display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
              <PerenualPlantList page='1'/>
            </div>
        </>
    );
}

export default AllCard