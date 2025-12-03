export default function Loading() {
  return (
    <main className="min-h-screen bg-sand">
      <section className="section py-16 sm:py-24">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back link skeleton */}
          <div className="mb-8">
            <div className="h-6 bg-gray-300 rounded w-40 animate-pulse"></div>
          </div>

          {/* Episode header skeleton */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-shrink-0">
                  <div className="w-full sm:w-48 h-48 bg-gray-300 rounded-lg animate-pulse"></div>
                </div>
                <div className="flex-1">
                  <div className="space-y-4">
                    <div className="flex gap-3">
                      <div className="h-6 bg-gray-300 rounded-full w-20 animate-pulse"></div>
                      <div className="h-6 bg-gray-300 rounded w-24 animate-pulse"></div>
                    </div>
                    <div className="h-8 bg-gray-300 rounded w-3/4 animate-pulse"></div>
                    <div className="flex gap-3">
                      <div className="h-10 bg-gray-300 rounded w-32 animate-pulse"></div>
                      <div className="h-10 bg-gray-300 rounded w-40 animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Player skeleton */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
            <div className="p-6 sm:p-8">
              <div className="h-6 bg-gray-300 rounded w-32 mb-4 animate-pulse"></div>
              <div className="h-58 bg-gray-300 rounded-lg animate-pulse"></div>
            </div>
          </div>

          {/* Content skeleton */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="p-6 sm:p-8">
              <div className="h-6 bg-gray-300 rounded w-32 mb-4 animate-pulse"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-5/6 animate-pulse"></div>
                <div className="h-4 bg-gray-300 rounded w-4/5 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
