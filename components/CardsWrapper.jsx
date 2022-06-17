import { useData } from '../hooks/useData';
import CardApi from './CardApi';
import { Loading } from './Loading';

function CardsWrapper() {
  const { filterAPi, apis, isLoading } = useData();
  function filteredApi() {
    if (!filterAPi.type) return apis;
    const newArr = apis.filter((obj) => {
      const key = obj[filterAPi.type].toLowerCase();
      return key.includes(filterAPi.value.toLowerCase());
    });
    return newArr;
  }
  return (
    <div className="col-span-3 space-y-8 pt-4">
      {isLoading ? <Loading /> : (
        <>
          <div>
            {!filterAPi.value ? (
              <h3 className="font-bold text-lg text-[#979899]">
                Todas as
                {' '}
                api's
                :
              </h3>
            ) : (
              <h3 className="font-normal text-lg text-[#979899]">
                Resultados para:
                <span className="font-bold text-lg text-[#979899]">
                  {' '}
                  {filterAPi.value}
                </span>
              </h3>
            )}
          </div>
          <section>
            <div
              className="grid grid-cols-3 gap-6"
            >
              {filteredApi().length === 0 ? (<p className="col-span-3 text-base text-center">Nenhum resultado encontrado.</p>) : (
                filteredApi().map((api) => (
                  <div key={api.id} className="hover:scale-105 transition-all cursor-pointer">
                    <CardApi api={api} numberLength={30} />
                  </div>
                )))}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default CardsWrapper;
