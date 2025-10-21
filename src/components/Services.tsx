import { Flag, PenTool, Copy, Code, BarChart2, Zap, Code2 } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Full-Stack Web Development',
      description: 'Build dynamic, responsive web applications using MongoDB, Express, React, Node.js, focusing on seamless UX and robust backend.',
    },
    {
      icon: BarChart2,
      title: 'Data Analytics',
      description: 'Turn raw data into insights with Python, SQL, Excel, Tableau, Power BI, creating interactive dashboards and reports for decision-making.',
    },
    {
      icon: Zap,
      title: 'Problem Solving & Leadership',
      description: 'Solve complex challenges using DSA, disruptive problem-solving, and strategic thinking, while driving projects with teamwork, leadership, and result-oriented approaches.',
    },
  ];

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="section-accent-line"></div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            My Services
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className="p-10 bg-card border-border card-hover animate-fade-in-up group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 flex items-center justify-center mb-6">
                <service.icon className="text-accent" size={36} strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
