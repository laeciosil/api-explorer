function HeaderShimmer() {
  return (
    <header className="grow-0 w-full py-5 bg-light-primary dark:bg-dark-primary flex items-center justify-center border-b-2 border-[#374151] border-opacity-10 dark:border-opacity-70">
      <section className="container w-[80rem] px-3 flex items-center justify-between">
        <div className="h-7 w-44 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
        <div className="hidden -ml-12 w-full max-w-xl lg:flex h-9 bg-slate-200 dark:bg-slate-600 rounded-2xl" />
        <div className="hidden lg:flex gap-5 items-center justify-between">
          <div className="h-5 w-28 bg-slate-200 dark:bg-slate-600 rounded-lg" />
          <div className="h-5 w-24 bg-slate-200 dark:bg-slate-600 rounded-lg" />
          <div className="h-6 w-6 bg-slate-200 dark:bg-slate-600 rounded-full" />
        </div>
        <div className="h-7 w-9 lg:hidden bg-slate-200 dark:bg-slate-600 rounded-2xl" />
      </section>
    </header>
  );
}

export default HeaderShimmer;
