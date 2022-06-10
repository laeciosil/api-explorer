import CardsWrapper from "./CardsWrapper";
import SidebarCategories from "./SidebarCategories";

function CardsContainer() {
  return (
    <section className='container grid grid-cols-4 gap-6 w-[calc(100vw-2rem)] md:w-[80rem] items-start my-9'>
      <SidebarCategories />
      <CardsWrapper />
    </section>
  );
}

export default CardsContainer;