import FooterShimmer from './FooterShimmer';
import HeaderShimmer from './HeaderShimmer';
import WidgetShimmer from './WidgetShimmer';

function SearchShimmer() {
  return (
    <div className="animate-pulse relative flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden">
      <HeaderShimmer />
      <main className="w-full grow flex items-start justify-around relative bg-light-background dark:bg-dark-background ">
        <section className="container grid grid-cols-1 sm:grid-cols-2 med:grid-cols-3 lg:grid-cols-4 gap-6 w-[calc(100vw-2rem)] xl:w-[80rem] items-start my-9">
          <section className="hidden lg:block lg:col-span-1">
            <div className="h-[530px] w-full bg-slate-200 dark:bg-slate-600 rounded-2xl" />
          </section>
          <div className="col-span-1 sm:col-span-2 md:col-span-3 space-y-8 ">
            <div className="h-4 w-40 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              <div className="h-28 max-w-[calc(100%-2rem)] lg:w-72  bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            </div>
          </div>
        </section>
      </main>
      <WidgetShimmer />
      <FooterShimmer />
    </div>
  );
}

export default SearchShimmer;
