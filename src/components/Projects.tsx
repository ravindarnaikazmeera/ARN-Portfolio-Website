import { ExternalLink, Github } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import vrindsstorecover from '@/images/vrindastorecoverimage.jpg';
import coverimageblog from '@/images/blogcoverimage.webp';
import calculatorcoverimg from '@/images/calimg.jpg';

export const Projects = () => {
  const projects = [
    {
      title: 'MERN-Stack Blogging Platform',
      description: 'Full-stack blog app where admins create posts and users read and comment across different categories.',
      image: coverimageblog,
      tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Deployment on Vercel'],
      liveUrl: 'https://blog-website-mern-9qdm.vercel.app/',
      githubUrl: 'https://github.com/ravindarnaikazmeera/Blog-Website-MERN-.git',
    },
    {
      title: 'Vrinda Store Dashboard',
      description: 'Interactive Excel dashboard analyzing 2022 sales, customer behavior, and product trends to deliver actionable business insights.',
      image: vrindsstorecover,
      tags: ['Pivot Tables', 'Pivot Charts', 'Slicers', 'Conditional Formatting', 'Data Visualization'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ravindarnaikazmeera/Vrinda-Store-Dashboard.git',
    },
    {
      title: 'Portfolio Website',
      description: 'Modern portfolio template with smooth animations, dark mode, and responsive design.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&q=80',
      tags: ['React', 'Framer Motion', 'CSS', 'Vite'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Tenzies Game',
      description: 'Real-time weather application with location search, forecasts, and interactive maps.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&q=80',
      tags: ['Vue.js', 'APIs', 'Chart.js', 'Sass'],
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      title: 'Cosmo Calculator',
      description: 'A modern, responsive web calculator with light/dark theme, keyboard support, and advanced functions like square and square root.',
      image: calculatorcoverimg,
      tags: ['HTML', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/ravindarnaikazmeera/Bunnys-Casmo-Calculator.git',
    },
    {
      title: 'Fitness Tracker',
      description: 'Workout logging app with progress charts, exercise library, and personalized goals.',
      image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&q=80',
      tags: ['React Native', 'Node.js', 'MongoDB', 'Express'],
      liveUrl: '#',
      githubUrl: '#',
    },
  ];

  return (
    <section id="projects" className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Showcasing my recent work in web development, data analytics, and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="overflow-hidden bg-card border-border card-hover group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-accent hover:bg-accent/90 text-accent-foreground"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                    >
                      <ExternalLink size={16} className="mr-1" />
                      Live
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-display font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
