import { Button } from '@/components/ui/button';

export const About = () => {
  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <div className="animate-fade-in-up">
            <div className="aspect-square bg-muted rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?w=800&q=80"
                alt="About workspace"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up space-y-8" style={{ animationDelay: '0.2s' }}>
            <div>
              <div className="w-16 h-1 bg-accent mb-8"></div>
              <h2 className="text-5xl md:text-6xl font-display font-bold mb-8 text-foreground">
                About Me
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  I’m a Full-Stack Web Developer and Data Analyst who enjoys building applications 
                  that are as intelligent as they are intuitive. On the development side, 
                  I design and build responsive, user-friendly web applications using modern frameworks, 
                  ensuring smooth performance and scalability across platforms.
                </p>
                <p>
                  As a Data Analyst, I focus on turning raw data into actionable insights 
                  through interactive dashboards, data visualizations, and analytical reports 
                  that drive better decisions. I bring both coding and analytical skills together 
                  to develop data-driven digital solutions that solve real-world problems and create 
                  measurable impact.
                </p>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="lg"
              className="border-accent text-accent hover:bg-accent hover:text-primary text-base px-8 py-6 rounded-full"
            >
              {/* Download Resume */}
            <a href="public\IITJ-B22CS017-Azmeera Ravindar Naik.pdf" download>
              Download Resume
            </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
