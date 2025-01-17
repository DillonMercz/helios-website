import { useServices } from './ProjectIntegration/useServices';
import { ServiceCard } from './ProjectIntegration/ServiceCard/ServiceCard';
import { Filters } from './ProjectIntegration/Filters/Filters';
import { Sidebar } from './ProjectIntegration/Sidebar/Sidebar';

const Services = () => {
  const { filteredServices } = useServices();

  return (
    <section id="services" className="relative py-20 px-4 bg-black text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl font-bold mb-16 text-center">Our Services</h2>
        <div className="flex">
          <aside className="mr-8">
            <Sidebar />
          </aside>
          <main className="flex-1">
            <Filters />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              {filteredServices.map((service) => (
                <ServiceCard key={service.id} service={service} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default Services;
