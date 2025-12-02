import Button from './Button';

// Icon mapping for service icons
const iconMap = {
  PenTool: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 19l7-7 3 3-7 7-3-3z"/>
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
      <path d="M2 2l7.586 7.586"/>
      <circle cx="11" cy="11" r="2"/>
    </svg>
  ),
  Smartphone: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="20" x="5" y="2" rx="2" ry="2"/>
      <path d="M12 18h.01"/>
    </svg>
  ),
  Code2: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="m18 16 4-4-4-4"/>
      <path d="m6 8-4 4 4 4"/>
      <path d="m14.5 4-5 16"/>
    </svg>
  ),
  LayoutGrid: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="7" height="7" x="3" y="3" rx="1"/>
      <rect width="7" height="7" x="14" y="3" rx="1"/>
      <rect width="7" height="7" x="14" y="14" rx="1"/>
      <rect width="7" height="7" x="3" y="14" rx="1"/>
    </svg>
  )
};

export default function ServiceCard({ service, isLoading = false }) {
  if (isLoading) {
    return (
      <div className="bg-surface rounded-3xl p-10 animate-pulse">
        {/* Top Row */}
        <div className="flex justify-between items-start mb-8">
          <div className="flex items-center">
            <div className="w-12 h-12 bg-background/20 rounded-lg"></div>
            <div className="h-6 bg-text-main/20 rounded w-32 ml-4"></div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-12 h-12 bg-background/20 rounded-full"></div>
            <div className="h-4 bg-text-muted/20 rounded w-20"></div>
          </div>
        </div>
        
        {/* Description */}
        <div className="space-y-2 mb-12">
          <div className="h-4 bg-text-muted/20 rounded"></div>
          <div className="h-4 bg-text-muted/20 rounded"></div>
          <div className="h-4 bg-text-muted/20 rounded w-3/4"></div>
        </div>
        
        {/* Price */}
        <div className="h-8 bg-text-main/20 rounded w-48 ml-auto"></div>
      </div>
    );
  }

  const IconComponent = iconMap[service.icon];

  return (
    <div className="bg-surface rounded-3xl p-10">
      {/* Top Row */}
      <div className="flex justify-between items-start mb-8">
        <div className="flex items-center">
          {/* Icon Container */}
          <div className="bg-background p-3 rounded-lg border border-ui-surface text-primary">
            {IconComponent}
          </div>
          {/* Title */}
          <h3 className="text-xl font-bold text-text-main uppercase ml-4">
            {service.title}
          </h3>
        </div>
        
        {/* Book a Call Button */}
        <div className="flex items-center gap-2">
          <Button variant="icon" />
          <span className="text-xs font-medium text-text-muted uppercase">
            BOOK A CALL
          </span>
        </div>
      </div>
      
      {/* Description */}
      <p className="text-text-muted text-sm leading-relaxed mt-8 mb-12 max-w-lg">
        {service.description}
      </p>
      
      {/* Price */}
      <div className="text-right">
        <p className="text-2xl font-bold text-text-main">
          {service.price}
        </p>
      </div>
    </div>
  );
}
