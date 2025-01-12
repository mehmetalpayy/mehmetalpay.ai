export default function Loading() {
  return (
    <main className="min-h-screen p-8 pb-24 md:p-24">
      <div className="animate-pulse">
        {/* Back button skeleton */}
        <div className="w-24 h-8 bg-gray-200 rounded mb-8"></div>

        <article className="max-w-3xl mx-auto">
          {/* Title skeleton */}
          <div className="h-10 bg-gray-200 rounded w-3/4 mb-4"></div>

          {/* Description skeleton */}
          <div className="h-6 bg-gray-200 rounded w-full mb-8"></div>

          {/* Cover image skeleton */}
          <div className="relative w-full h-[400px] mb-8 bg-gray-200 rounded-lg"></div>

          {/* Content skeleton */}
          <div className="space-y-4">
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-4/6"></div>
          </div>
        </article>
      </div>
    </main>
  );
}
