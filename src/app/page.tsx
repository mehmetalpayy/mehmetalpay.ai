import { getAllProjects } from "@/lib/server/projects";
import ClientPage from "../components/ClientPage";
import { Suspense } from "react";

function LoadingFallback() {
  return (
    <main className="min-h-screen p-8 md:p-24 max-w-3xl mx-auto">
      <div className="animate-pulse">
        <div className="h-8 bg-gray-200 rounded w-48 mx-auto mb-4"></div>
        <div className="h-4 bg-gray-200 rounded w-64 mx-auto mb-16"></div>

        <div className="space-y-6">
          {[1, 2].map((i) => (
            <div key={i} className="border border-gray-200 rounded-lg p-6">
              <div className="h-6 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3"></div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default async function Page() {
  const projects = await getAllProjects();
  return (
    <Suspense fallback={<LoadingFallback />}>
      <ClientPage initialData={projects} />
    </Suspense>
  );
}
