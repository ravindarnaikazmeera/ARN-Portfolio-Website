import { Card } from '@/components/ui/card';
import internproLogo from '@/images/internprologo.jpeg';
import deloittejobsimulation from '@/images/deloitteLogo.jpg';
import iitj from '@/images/iitjlogonew.jpg';
import varchas from '@/images/varchaslogo.jpeg';

export const Experience = () => {
  const experiences = [
    {
      logo: internproLogo,
      position: 'MERN Stack Development Intern',
      company: "InternPro",
      location: 'Remote',
      period: 'July 2025 - September 2025',
      type: 'Part-Time',
    },
    {
      logo: deloittejobsimulation,
      position: 'Data Analytics Virtual Experience (Deloitte via Forage)',
      company: "Deloitte",
      location: 'Remote (Forage)',
      period: 'August 2025 - August 2025',
      type: 'Job Simulation',
    },
    {
      logo: varchas,
      position: 'Publicity Head – VARCHAS’25 & IGNUS’25',
      company: "IIT Jodhpur",
      location: 'Jodhpur-India',
      period: 'Aug 2024 - Sep 2024 & Dec 2024 - Feb 2025 ',
      type: 'Leadership',
    },
    {
      logo: iitj,
      position: 'Event Coordinator – UGADI’25 Festival',
      company: "IIT Jodhpur",
      location: 'Jodhpur-India',
      period: 'March 2025',
      type: 'Event Management',
    },
  ];

  return (
    <section id="experience" className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="section-accent-line"></div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Work Experience
          </h2>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-8 md:p-10 bg-card border-border card-hover animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="grid md:grid-cols-[200px_1fr_auto] gap-8 items-center">
                <div className="w-32 h-32 bg-muted rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={exp.logo}
                    alt={exp.company}
                    className="w-full h-full object-contain p-4"
                  />
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-medium text-accent">
                    {exp.position}
                  </h3>
                  <p className="text-xl text-foreground font-semibold">
                    {exp.company}
                  </p>
                  <p className="text-muted-foreground">
                    {exp.location}
                  </p>
                </div>

                <div className="text-right space-y-2">
                  <p className="text-foreground font-medium">
                    {exp.period}
                  </p>
                  <p className="text-muted-foreground">
                    {exp.type}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
