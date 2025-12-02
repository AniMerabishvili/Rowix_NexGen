import { useWhyUsData } from '../../hooks/useMockData';
import ReasonCard from '../ui/ReasonCard';

export default function Reasons() {
  const { data: whyUsData, loading, error } = useWhyUsData();

  if (loading) {
    return (
      <section className="my-16 py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6">
          {/* Section Title */}
          <div className="bg-surface rounded-2xl p-8 mb-16">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold text-center uppercase">
              REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
            </h2>
          </div>
          
          {/* Loading Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 border-2 border-surface rounded-2xl p-6">
            {[...Array(4)].map((_, index) => (
              <ReasonCard key={index} isLoading={true} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="my-16 py-4 bg-background">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-text-muted">Error loading reasons: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="my-16 py-4 bg-background border-2 border-surface rounded-2xl">
      <div className="mx-auto px-6">
        {/* Section Title */}
        <div className="bg-surface rounded-2xl p-12 mb-4">
          <h2 className="text-text-main text-3xl md:text-4xl font-bold text-left uppercase">
            REASONS TO CHOOSE NEXGEN FOR YOUR DIGITAL JOURNEY
          </h2>
        </div>
        
        {/* Reasons Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whyUsData?.map((reason, index) => (
            <ReasonCard 
              key={index}
              title={reason.title}
              description={reason.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
