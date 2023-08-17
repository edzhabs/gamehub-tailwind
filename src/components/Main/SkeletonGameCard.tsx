import getCroppedImageUrl from "../../hooks/image-url";

const SkeletonGameCard = () => {
  return (
    <div className="relative card">
      <div className="animate-pulse shadow-inner w-full">
        <div className="w-full bg-slate-300 dark:bg-slate-700">
          <img className="opacity-5" src={getCroppedImageUrl("")} />
        </div>
        <div className="ml-3 mt-3 rounded h-8 w-32 bg-slate-300 dark:bg-slate-700"></div>

        <div className="py-4 px-3 flex-1 space-y-6">
          <div className="space-y-3">
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded col-span-2"></div>
              <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded col-span-2"></div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
              <div className="h-2 bg-slate-300 dark:bg-slate-700 rounded col-span-1"></div>
            </div>
          </div>
        </div>
        <div className="px-5 py-4 bg-slate-200 dark:bg-slate-500 rounded-full p-2 absolute top-0 m-2"></div>
      </div>
    </div>
  );
};

export default SkeletonGameCard;
