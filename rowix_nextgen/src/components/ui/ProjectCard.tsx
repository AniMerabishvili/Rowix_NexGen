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
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-20 items-stretch">
        {/* Block 1: Info Skeleton */}
        <div className="col-span-1 lg:col-span-4 bg-surface rounded-md p-6 animate-pulse h-full flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-ui-surface rounded-lg"></div>
              <div className="h-6 bg-ui-surface rounded w-40"></div>
              <div className="ml-auto flex items-center gap-2">
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
        <div className="col-span-1 lg:col-span-4 bg-surface rounded-md animate-pulse h-full"></div>

        {/* Block 3: Details Skeleton */}
        <div className="col-span-12 lg:col-span-4 h-full flex flex-col gap-4">
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
          <div className="bg-surface rounded-md p-6 animate-pulse flex-1 flex items-center justify-between">
            <div className="h-4 bg-surface/20 rounded w-28"></div>
            <div className="flex items-center -space-x-3">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-12 h-12 bg-surface/20 rounded-md border-2 border-surface flex-shrink-0"></div>
              ))}
            </div>
          </div>
          
          {/* Button Skeleton */}
          <div className="h-12 bg-surface/20 rounded-md animate-pulse flex-shrink-0"></div>
        </div>
      </div>
    );
  }

  const IconComponent = iconMap[project.icon] || Star;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8 items-stretch">
      {/* Block 1: Project Info */}
      <div className="col-span-1 lg:col-span-4 bg-surface rounded-md p-6 h-full flex flex-col justify-around">
        {/* Top Part: Header */}
        <div>
          <div className="flex items-center gap-4">
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
      <div className="col-span-1 lg:col-span-4 bg-surface rounded-md overflow-hidden h-full">
        <img 
          src={imageMap[project.image] || project.image} 
          alt={project.title}
          className="w-full h-full object-cover rounded-md"
        />
      </div>

      {/* Block 3: Technologies & Team */}
      <div className="col-span-12 lg:col-span-4 h-full flex flex-col gap-4">
        {/* Widget 1: Technologies */}
        <div className="bg-surface rounded-md p-6 flex flex-col justify-center flex-1">
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
        <div className="bg-surface rounded-md p-6 flex items-center gap-8 flex-1">
          <h4 className="text-text-main text-sm font-bold uppercase">
            TEAM MEMBERS
          </h4>
          <div className="flex items-center -space-x-3">
            {project.teamMembers?.slice(0, 5).map((member: string, index: number) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full bg-active-orange border-2 border-surface flex items-center justify-center overflow-hidden flex-shrink-0"
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

        {/* Button */}
        <button className="w-full bg-primary text-background font-bold text-sm uppercase py-4 rounded-md hover:opacity-90 transition-opacity flex-shrink-0">
          BOOK A CALL
        </button>
      </div>
    </div>
  );
}

