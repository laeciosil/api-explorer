import CardApi from '../components/CardApi';

function CardsWrapper() {
  return (
    <section className='col-span-3'>
      <div className='grid grid-cols-3 gap-6'>
        {[...Array(15)].map((_, index) => <div key={index} className='hover:scale-105 transition-all cursor-pointer'><CardApi /></div>)}
      </div>
    </section>
  );
}

export default CardsWrapper;