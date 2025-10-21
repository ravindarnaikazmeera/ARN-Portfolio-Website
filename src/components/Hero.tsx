import { Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import portfolioprofile from '@/images/portfolioimage.jpeg'

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center hero-gradient relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="animate-fade-in-up space-y-8">
            <div className="space-y-4">
              <p className="text-accent text-sm md:text-base font-medium tracking-wider">
                Hello I'm
              </p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-display font-bold text-foreground leading-tight">
                Azmeera<br />Ravindar Naik
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground">
                — Full-Stack Software Developer | Data Analyst
              </p>
            </div>

            {/* Social links */}
            <div className="flex gap-4">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/azmeera-ravindar-naik-585a21256' },
                { Icon: Mail, href: 'mailto:ravindarnaikazmeera18@gmail.com'},
                { Icon: Instagram, href: 'https://instagram.com' },
                { Icon: Twitter, href: 'https://twitter.com' },  
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-accent flex items-center justify-center hover:bg-accent/90 transition-colors"
                >
                  <Icon size={20} className="text-primary" />
                </a>
              ))}
            </div>
          </div>

          {/* Right image */}
          <div className="hidden lg:block animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="aspect-[3/4] bg-muted rounded-2xl overflow-hidden">
              <img
                src={portfolioprofile}
                alt="Portrait"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
