import { useContext } from "react";
import { AppContext } from "../context/AppContext";
function SidebarCategories() {
  const { categories } = useContext(AppContext)
  return (
    <section className='col-span-1 px-4 pb-6 shadow rounded-md overflow-hidden'>
      <div className='divide-y space-y-5'>
        <div className='pt-4'>
          <h3 className=' text-light-text dark:text-dark-text mb-3 uppercase font-medium'>categoria</h3>
          <div className='space-y-2'>
            {categories.map((category) => <p key={category.id} className='text-[#979899] hover:text-light-secondary transition-all cursor-pointer'>{category.name}</p>)}
          </div>  
        </div>
      </div>
    </section>
  );
}

export default SidebarCategories;