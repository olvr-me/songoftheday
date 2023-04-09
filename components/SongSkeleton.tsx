export default function SongSkeleton() {
    return (
        <div className="flex justify-center flex-col ml-1 pb-5">
            <div className="animate-pulse  w-songw h-songh bg-slate-500">
            </div>
            <h3 className="className='text-slate-400'">loading...</h3>
            <h3 className='text-slate-400'>loading...</h3>
        </div>
    );
};