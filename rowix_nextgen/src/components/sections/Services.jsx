import { useServicesData } from '../../hooks/useMockData';
import ServiceCard from '../ui/ServiceCard';

export default function Services() {
  const { data: servicesData, loading, error } = useServicesData();

  if (loading) {
    return (
      <section className="py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6">
          {/* Section Title */}
          <div className="bg-surface rounded-2xl p-12 mb-4">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold text-left uppercase">
              Our Services
            </h2>
          </div>
          
          {/* Loading Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[...Array(4)].map((_, index) => (
              <ServiceCard key={index} isLoading={true} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-4 bg-background border-2 border-surface rounded-2xl">
        <div className="mx-auto px-6 text-center">
          <div className="text-text-muted">Error loading services: {error}</div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-4 bg-background border-2 border-surface rounded-2xl">
      <div className="mx-auto px-6">
          {/* Section Title */}
          <div className="bg-surface rounded-2xl p-12 mb-4">
            <h2 className="text-text-main text-3xl md:text-4xl font-bold text-left uppercase">
              Our Services
            </h2>
          </div>
        
        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {servicesData?.map((service, index) => (
            <ServiceCard 
              key={index}
              service={service}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
