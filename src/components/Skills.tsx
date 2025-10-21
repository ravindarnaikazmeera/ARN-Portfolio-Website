import { Circle } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Skills = () => {
  const skills = [
    'Full-Stack Web Development',
    'Data Analytics & Visualization',
    'SQL & Database Management',
    'Problem Solving & DSA',
    'Automation & Scripting (Python, APIs, Excel Macros)',
    'Cloud & Deployment Basics',
    'UI/UX & Product Design',
    'Leadership & Team Management',
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-16 animate-fade-in-up">
          <div className="section-accent-line"></div>
          <h2 className="text-5xl md:text-6xl font-display font-bold text-foreground">
            Skills & Tools
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={skill}
              className="p-8 bg-card border-border card-hover animate-fade-in-up text-center"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full border-2 border-accent flex items-center justify-center">
                <Circle size={8} className="fill-accent text-accent" />
              </div>
              <h3 className="text-xl font-display font-semibold text-foreground">
                {skill}
              </h3>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
