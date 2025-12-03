import React from 'react';
import { useWorksData } from '../../hooks/useMockData';
import ProjectCard from '../ui/ProjectCard';
import IconBox from '../ui/IconBox';
import { ArrowUpRight } from 'lucide-react';

export default function Works(): React.JSX.Element {
  const { data: worksData, loading, error } = useWorksData();

  if (loading) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-4 md:px-6">
          {/* Header */}
          <div className="bg-surface rounded-2xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <h2 className="text-text-main text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
              OUR WORKS
            </h2>
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity self-start sm:self-auto">
              <IconBox icon={ArrowUpRight} variant="circular" size="md" />
              <span className="text-sm md:text-md font-medium text-text-muted uppercase">
                ALL WORKS
              </span>
            </button>
          </div>
          
          {/* Loading Skeletons */}
          <div>
            {[...Array(2)].map((_, index) => (
              <ProjectCard key={index} project={{} as any} isLoading={true} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6 text-center">
          <div className="text-text-muted">Error loading works: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
      <div className="mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="bg-surface rounded-2xl p-4 md:p-6 lg:p-8 mb-6 md:mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <h2 className="text-text-main text-2xl md:text-3xl lg:text-4xl font-bold uppercase">
            OUR WORKS
          </h2>
          <button className="flex items-center gap-2 hover:opacity-80 transition-opacity self-start sm:self-auto">
            <IconBox icon={ArrowUpRight} variant="circular" size="md" />
            <span className="text-sm md:text-md font-medium text-text-muted uppercase">
              ALL WORKS
            </span>
          </button>
        </div>
        
        {/* Projects List */}
        <div>
          {worksData?.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
