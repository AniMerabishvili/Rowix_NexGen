import React from 'react';
import { useWorksData } from '../../hooks/useMockData';
import ProjectCard from '../ui/ProjectCard';
import Button from '../ui/Button';

export default function Works(): React.JSX.Element {
  const { data: worksData, loading, error } = useWorksData();

  if (loading) {
    return (
      <section className="my-20 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6">
          {/* Header */}
          <div className="bg-surface rounded-2xl p-8 mb-8 flex items-center justify-between">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold uppercase">
              OUR WORKS
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="icon" />
              <span className="text-text-muted text-xs font-medium uppercase tracking-wide font-mono">
                ALL WORKS
              </span>
            </div>
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
      <div className="mx-auto px-6">
        {/* Header */}
        <div className="bg-surface rounded-2xl p-8 mb-8 flex items-center justify-between">
          <h2 className="text-text-main text-3xl md:text-4xl font-bold uppercase">
            OUR WORKS
          </h2>
          <div className="flex items-center gap-2">
            <Button variant="icon" />
            <span className="text-text-muted text-xs font-medium uppercase tracking-wide font-mono">
              ALL WORKS
            </span>
          </div>
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
