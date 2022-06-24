import { useData } from '../hooks/useData';

function SidebarCategories() {
  const { categories, setFilterAPi } = useData();
  const changeCategory = (value) => {
    setFilterAPi({ type: 'category', value });
  };
  return (
    <section className="hidden lg:block lg:col-span-1 pl-4 pb-6 shadow rounded-md">
      <div className="divide-y space-y-5">
        <div className="pt-4">
          <h3 className=" text-light-text dark:text-dark-text mb-3 uppercase font-medium">categorias</h3>
          <div className="flex flex-col items-start justify-start space-y-2 h-[530px] scrollbar-thumb-zinc-400 dark:scrollbar-thumb-gray-600  scrollbar-track-transparent scrollbar-thin">
            {categories.map((category) => (
              <button
                type="button"
                key={category.id}
                className="text-[#979899] hover:text-light-secondary transition-all cursor-pointer"
                onClick={() => changeCategory(category.name)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default SidebarCategories;
