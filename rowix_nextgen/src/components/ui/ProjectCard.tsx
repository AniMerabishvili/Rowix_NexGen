import React from 'react';
import { ProjectCardProps } from '../../types';
import IconBox from './IconBox';
import { Star, Lightbulb, ArrowUpRight, LucideIcon } from 'lucide-react';

// Image mapping for project images
const imageMap: Record<string, string> = {
  'works/zenith.png': new URL('../../assets/images/works/zenith.png', import.meta.url).href,
  'works/a-aura.png': new URL('../../assets/images/works/a-aura.png', import.meta.url).href,
};

// Icon mapping for project icons
const iconMap: Record<string, LucideIcon> = {
  Star,
  Lightbulb
};

export default function ProjectCard({ project, isLoading = false }: ProjectCardProps) {
  if (isLoading) {
    return (
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-8 md:mb-20 items-stretch">
        {/* Block 1: Info Skeleton */}
        <div className="col-span-1 lg:col-span-4 bg-surface rounded-md p-4 md:p-6 animate-pulse h-full flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2 md:gap-4 mb-4">
              <div className="w-12 h-12 bg-ui-surface rounded-lg"></div>
              <div className="h-6 bg-ui-surface rounded flex-1 min-w-[120px]"></div>
              <div className="flex items-center gap-2">
                <div className="w-14 h-14 bg-icon-surface/20 rounded-full border border-text-muted/20"></div>
                <div className="h-4 bg-text-muted/20 rounded w-16"></div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-3 mb-4">
              <div className="h-8 bg-icon-surface/20 rounded-full w-48"></div>
              <div className="h-8 bg-icon-surface/20 rounded-full w-40"></div>
            </div>
            <div className="space-y-2">
              <div className="h-4 bg-ui-surface rounded w-full"></div>
              <div className="h-4 bg-ui-surface rounded w-3/4"></div>
            </div>
          </div>
        </div>

        {/* Block 2: Image Skeleton */}
        <div className="col-span-1 lg:col-span-4 bg-surface rounded-lg animate-pulse h-[250px] md:h-[300px] lg:h-full"></div>

        {/* Block 3: Details Skeleton */}
        <div className="col-span-1 lg:col-span-4 h-full flex flex-col gap-3 md:gap-4">
          {/* Technologies Skeleton */}
          <div className="bg-surface rounded-md p-6 animate-pulse flex-1 flex flex-col justify-center">
            <div className="h-4 bg-surface/20 rounded w-32 mb-4"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-surface/20 rounded-full w-16"></div>
              ))}
            </div>
          </div>
          
          {/* Team Members Skeleton */}
          <div className="bg-surface rounded-lg p-6 animate-pulse flex-1 flex items-center justify-between">
            <div className="h-4 bg-surface/20 rounded w-28"></div>
            <div className="flex items-center -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-surface/20 rounded-lg border-2 border-surface flex-shrink-0"></div>
              ))}
            </div>
          </div>
          
          {/* Button Skeleton */}
          <div className="h-12 bg-surface/20 rounded-lg animate-pulse flex-shrink-0"></div>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.icon] || Star;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6 mb-8 items-stretch">
      {/* Block 1: Project Info */}
      <div className="col-span-1 lg:col-span-4 bg-surface rounded-lg p-4 md:p-6 h-full flex flex-col justify-around">
        {/* Top Part: Header */}
        <div>
          <div className="flex flex-wrap items-center gap-2 md:gap-4">
            {/* Icon Box */}
            <IconBox icon={IconComponent} />
            {/* Title */}
            <h3 className="text-text-main text-base md:text-lg lg:text-xl font-bold uppercase flex-1 min-w-0">
              {project.title}
            </h3>
            {/* Details Button */}
            <button className="flex items-center gap-2 hover:opacity-80 transition-opacity lg:ml-auto">
              <IconBox icon={ArrowUpRight} variant="circular" size="md" />
              <span className="text-xs md:text-sm lg:text-md font-medium text-text-muted uppercase">
                DETAILS
              </span>
            </button>
          </div>
        </div>

        {/* Bottom Part: Tags and Description */}
        <div>
          {/* Tags */}
          <div className="mb-4">
            <div className="inline-flex items-center bg-icon-surface rounded-full px-4 py-2">
              <span className="text-text-muted text-xs mr-2">Category •</span>
              <span className="text-text-main text-sm font-medium">{project.category}</span>
            </div>
            <div className="block">
              <div className="inline-flex items-center bg-icon-surface rounded-full px-4 py-2 mt-4">
                <span className="text-text-muted text-xs mr-2">Time Taken •</span>
                <span className="text-text-main text-sm font-medium">{project.timeTaken}</span>
              </div>
            </div>
          </div>

          {/* Description */}
          <p className="text-text-main/60 text-sm leading-relaxed mb-0">
            {project.description}
          </p>
        </div>
      </div>

      {/* Block 2: Project Image */}
      <div className="col-span-1 lg:col-span-4 bg-surface rounded-lg overflow-hidden h-[250px] md:h-[300px] lg:h-full">
        <img 
          src={imageMap[project.image] || project.image} 
          alt={project.title}
          className="w-full h-full object-cover rounded-md"
          loading="lazy"
        />
      </div>

      {/* Block 3: Technologies & Team */}
      <div className="col-span-1 lg:col-span-4 h-full flex flex-col gap-3 md:gap-4">
        {/* Widget 1: Technologies */}
        <div className="bg-surface rounded-lg p-4 md:p-6 flex flex-col justify-center lg:flex-1">
          <h4 className="text-text-main text-xs md:text-sm font-bold uppercase mb-3 md:mb-4">
            TECHNOLOGIES USED
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-text-muted/10 text-white text-xs font-medium px-3 md:px-4 py-1.5 md:py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Widget 2: Team Members */}
        <div className="bg-surface rounded-lg p-4 md:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4 md:gap-8 lg:flex-1">
          <h4 className="text-text-main text-xs md:text-sm font-bold uppercase">
            TEAM MEMBERS
          </h4>
          <div className="flex items-center flex-wrap gap-2">
            {project.teamMembers?.slice(0, 5).map((member: string, index: number) => (
              <div
                key={index}
                className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-active-orange border-2 border-surface flex items-center justify-center overflow-hidden flex-shrink-0"
              >
                <img
                  src={member}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover grayscale"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="w-full bg-primary text-background font-bold text-xs md:text-sm uppercase py-3 md:py-4 rounded-md hover:opacity-90 transition-opacity flex-shrink-0">
          BOOK A CALL
        </button>
      </div>
    </div>
  );
}

