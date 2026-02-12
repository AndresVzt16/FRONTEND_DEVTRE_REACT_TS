import Skeleton from "@mui/material/Skeleton";

const AppLayoutSkeleton = () => {
  return (
    <>
      {/* Header */}
      <header className="px-10 py-4 border-b border-gray-300">
        <div className="flex items-center gap-4">
          <Skeleton variant="circular" width={40} height={40} />
          <Skeleton variant="text" width={160} height={28} />
        </div>
      </header>

      <div className="min-h-screen font-family-sans">
        <main className="bg-slate-50 md:flex justify-between gap-7 w-full px-10">
          
          {/* Sidebar / ProfileLinks */}
          <section className="md:w-2/7 mt-7 space-y-4">
            <Skeleton variant="rounded" height={120} />
            <Skeleton variant="rounded" height={40} />
            <Skeleton variant="rounded" height={40} />
            <Skeleton variant="rounded" height={40} />
          </section>

          {/* Content */}
          <section className="md:w-5/7 mt-7 space-y-4">
            {/* NavigationTabs */}
            <Skeleton variant="rounded" height={48} />
            
            {/* Outlet content */}
            <Skeleton variant="rounded" height={160} />
            <Skeleton variant="rounded" height={160} />
          </section>

        </main>
      </div>
    </>
  );
};

export default AppLayoutSkeleton;
