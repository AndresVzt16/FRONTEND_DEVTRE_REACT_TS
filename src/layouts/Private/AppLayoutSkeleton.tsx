import Skeleton from "@mui/material/Skeleton";

const AppLayoutSkeleton = () => {
  return (
    <>
      <section className="px-5 pt-5">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 px-5 py-4 shadow-[0_20px_60px_-24px_rgba(15,23,42,0.7)]">
          <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(15,23,42,0.98),rgba(15,23,42,0.92))]" />
          <div className="relative flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div className="flex items-start gap-4">
              <Skeleton variant="rounded" width={48} height={48} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
              <div className="space-y-2">
                <Skeleton variant="rounded" width={180} height={24} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
                <Skeleton variant="text" width={320} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
                <Skeleton variant="text" width={260} height={20} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Skeleton variant="rounded" width={130} height={56} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
              <Skeleton variant="rounded" width={170} height={48} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
            </div>
          </div>
        </div>
      </section>

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
