export default function LoadingSkeleton() {
  return (
    <div className="py-6 flex flex-col items-center">
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-8">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-[#2B3B37] rounded w-1/4"></div>
          <div className="h-96 bg-[#2B3B37] rounded"></div>
        </div>
      </div>
    </div>
  );
} 