import FooterShimmer from './FooterShimmer';
import HeaderShimmer from './HeaderShimmer';
import WidgetShimmer from './WidgetShimmer';

export default function DetailsShimmer() {
  return (
    <div className="animate-pulse relative flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden">
      <HeaderShimmer />
      <main className="w-full grow flex items-center justify-center relative h-screen bg-light-background dark:bg-dark-background">
        <section className="container w-[calc(100vw-2rem)] md:w-[56rem] my-9 space-y-8 flex flex-col justify-center items-center mb-16">
          <section className="w-full">
            <div className="h-5 w-44 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            <div className="flex md:flex-row flex-col justify-between items-center">
              <div className="h-3 md:w-2/3 pt-4 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
              <div className="w-full md:w-auto divide-y dark:divide-gray-700 space-y-3">
                <div className="pt-4">
                  <div className="space-y-1">
                    <div className="h-3 w-28 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
                    <div className="h-3 w-36 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
                  </div>
                </div>
                <div className="pt-4">
                  <div className="space-y-1">
                    <div className="h-3 w-28 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
                    <div className="h-3 w-36 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-full flex flex-col justify-center items-center space-y-5">
            <div className="w-full flex items-center justify-between border-b-[1px] pb-1 dark:border-gray-700">
              <div className="h-5 w-44 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
              <div className="h-5 w-28 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            </div>
            <div className="h-16 w-full bg-slate-200 dark:bg-slate-600 rounded-2xl" />
          </section>

          <section className="w-full flex flex-col justify-center items-center space-y-5">
            <div className="h-5 w-44 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            <div className="w-full flex items-center">
              <div className="space-y-3 grow">
                <div className="h-5 w-44 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
                <div className="h-5 w-44 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
              </div>
              <div className="flex">
                <div className="h-11 w-28 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
              </div>
            </div>
          </section>

          <div className="h-16 w-full bg-slate-200 dark:bg-slate-600 rounded-2xl" />
        </section>
      </main>
      <WidgetShimmer />
      <FooterShimmer />
    </div>
  );
}
