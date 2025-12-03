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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8 items-stretch">
        {/* Block 1: Info Skeleton */}
        <div className="col-span-1 lg:col-span-4 bg-surface rounded-md p-8 animate-pulse h-full">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 bg-ui-surface rounded-lg"></div>
            <div className="h-6 bg-ui-surface rounded w-40"></div>
            <div className="ml-auto flex items-center gap-2">
              <div className="w-14 h-14 bg-icon-surface/20 rounded-full border border-text-muted/20"></div>
              <div className="h-4 bg-text-muted/20 rounded w-16"></div>
            </div>
          </div>
          <div className="space-y-3 mb-6">
            <div className="h-8 bg-icon-surface/20 rounded-full w-48"></div>
            <div className="h-8 bg-icon-surface/20 rounded-full w-40"></div>
          </div>
          <div className="space-y-2">
            <div className="h-4 bg-ui-surface rounded w-full"></div>
            <div className="h-4 bg-ui-surface rounded w-3/4"></div>
          </div>
        </div>

        {/* Block 2: Image Skeleton */}
        <div className="col-span-1 lg:col-span-4 bg-surface rounded-md h-full animate-pulse"></div>

        {/* Block 3: Details Skeleton */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
          {/* Technologies Skeleton */}
          <div className="bg-surface rounded-3xl p-8 animate-pulse flex-shrink-0 flex flex-col justify-center">
            <div className="h-4 bg-surface/20 rounded w-32 mb-4"></div>
            <div className="flex flex-wrap gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-8 bg-surface/20 rounded-full w-16"></div>
              ))}
            </div>
          </div>
          
          {/* Team Members Skeleton */}
          <div className="bg-surface rounded-3xl p-8 animate-pulse flex-shrink-0 flex flex-col justify-center">
            <div className="h-4 bg-surface/20 rounded w-28 mb-4"></div>
            <div className="flex items-center -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-surface/20 rounded-full border-2 border-background flex-shrink-0"></div>
              ))}
            </div>
          </div>
          
          {/* Button Skeleton */}
          <div className="bg-surface rounded-3xl p-8 animate-pulse flex-shrink-0 flex flex-col justify-center mt-auto">
            <div className="h-12 bg-surface/20 rounded-md"></div>
          </div>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.icon] || Star;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mb-8 items-stretch">
      {/* Block 1: Project Info */}
      <div className="col-span-1 lg:col-span-4 bg-surface rounded-md p-8 flex flex-col h-full">
        {/* Header */}
        <div className="flex items-center gap-4 mb-6">
          {/* Icon Box */}
          <IconBox icon={IconComponent} />
          {/* Title */}
          <h3 className="text-text-main text-xl font-bold uppercase whitespace-nowrap">
            {project.title}
          </h3>
          {/* Details Button */}
          <button className="ml-auto flex items-center gap-2 hover:opacity-80 transition-opacity">
            <IconBox icon={ArrowUpRight} variant="circular" size="md" />
            <span className="text-md font-medium text-text-muted uppercase">
              DETAILS
            </span>
          </button>
        </div>

        {/* Tags */}
        <div className=" mb-6">
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
        <p className="text-text-main/60 text-sm leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Block 2: Project Image */}
      <div className="col-span-1 lg:col-span-4 bg-surface rounded-md overflow-hidden h-full">
        <img 
          src={imageMap[project.image] || project.image} 
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Block 3: Technologies & Team */}
      <div className="col-span-12 lg:col-span-3 flex flex-col gap-4 h-full">
        {/* Widget 1: Technologies */}
        <div className="bg-background rounded-3xl p-8 flex flex-col justify-center flex-shrink-0">
          <h4 className="text-text-main text-sm font-bold uppercase mb-4">
            TECHNOLOGIES USED
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="bg-surface text-white text-xs font-medium px-4 py-2 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Widget 2: Team Members */}
        <div className="bg-background rounded-3xl p-8 flex flex-col justify-center flex-shrink-0">
          <h4 className="text-text-main text-sm font-bold uppercase mb-4">
            TEAM MEMBERS
          </h4>
          <div className="flex items-center -space-x-3">
            {project.teamMembers?.slice(0, 5).map((member: string, index: number) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-active-orange border-2 border-background flex items-center justify-center overflow-hidden flex-shrink-0"
              >
                <img
                  src={member}
                  alt={`Team member ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Widget 3: CTA Container */}
        <div className="bg-background rounded-3xl p-8 flex flex-col justify-center mt-auto flex-shrink-0">
          <button className="w-full bg-primary text-background font-bold text-sm uppercase py-4 rounded-md hover:opacity-90 transition-opacity">
            BOOK A CALL
          </button>
        </div>
      </div>
    </div>
  );
}

