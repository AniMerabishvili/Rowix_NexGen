import { useStatsData } from '../../hooks/useMockData';
import StatCard from '../ui/StatCard';
import Button from '../ui/Button';

export default function Stats() {
  const { data: statsData, loading, error } = useStatsData();

  if (loading) {
    return (
      <section className="py-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-2 border-surface rounded-2xl p-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="bg-surface rounded-2xl p-6 flex flex-col items-center justify-center text-center min-h-[180px] animate-pulse">
              <div className="h-5 bg-light-orange rounded w-20 mb-2"></div>
              <div className="h-16 bg-light-orange rounded w-16"></div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-6">
        <div className="text-center text-text-muted">
          Error loading stats: {error}
        </div>
      </section>
    );
  }

  return (
    <section className="py-6">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 border-2 border-surface rounded-2xl p-6">
        
        {/* Statistics Cards (1-5) */}
        {statsData?.map((stat, index) => (
          <StatCard 
            key={index}
            label={stat.label}
            value={stat.value}
          />
        ))}
        
        {/* Action Card (6th card - Know More) */}
        <div className="bg-surface rounded-2xl p-10 flex flex-col items-center justify-center text-center gap-3">
          
          {/* Icon and Text Row */}
          <div className="flex items-center gap-2">
            <Button variant="icon" />
            <div className="text-text-mono text-md font-semibold mb-2 font-mono font-normal">
              KNOW MORE
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
