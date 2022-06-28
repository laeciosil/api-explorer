import FooterShimmer from './FooterShimmer';
import HeaderShimmer from './HeaderShimmer';
import WidgetShimmer from './WidgetShimmer';

export default function IndexShimmer() {
  return (
    <div className="animate-pulse relative flex flex-col w-screen h-screen bg-light-background dark:bg-dark-background overflow-x-hidden">
      <HeaderShimmer />
      <main className="w-full grow flex items-center justify-center relative h-screen bg-light-background dark:bg-dark-background">
        <section className="py-6 w-[calc(100vw-2rem)] md:w-[48rem] space-y-10 flex flex-col justify-center items-center">
          <div className="container w-full flex flex-col justify-center items-center gap-4">
            <div className="h-9 w-full bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            <div className="h-9 w-full bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            <div className="mt-6 h-5 w-[calc(100vw-2rem)] sm:w-80 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
          </div>
          <div className="container w-full pl-4 pb-7 md:pb-0 space-y-5">
            <div className="h-3 w-40 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
            <div className="h-28 w-full bg-slate-200 dark:bg-slate-600 rounded-2xl" />
          </div>
        </section>
      </main>
      <WidgetShimmer />
      <FooterShimmer />
    </div>
  );
}
