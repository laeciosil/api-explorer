import { useContext } from 'react';
import CardApi from '../components/CardApi';
import { AppContext } from '../context/AppContext';

function CardsWrapper() {
  const {byName, setByName} = useContext(AppContext);
  const {apis} = useContext(AppContext);
  const filterByName = () => {
    const arr = apis.filter(api => api.name.includes(byName));
    return arr;
  }
  return (
    <section className='col-span-3'>
      <div 
        className='grid grid-cols-3 gap-6'>
        {filterByName().map((api) => <div key={api.id} className='hover:scale-105 transition-all cursor-pointer'>
          <CardApi api={api} />
      </div>)}
      </div>
    </section>
  );
}

export default CardsWrapper;