import { Mail, Globe, Instagram, Linkedin, Twitter } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center md:text-left mb-16 animate-fade-in-up">
            <h2 className="text-5xl md:text-6xl font-display font-bold mb-6 text-foreground">
              Get in Touch
            </h2>
            <p className="text-lg text-muted-foreground max-w-xl">
              Let’s connect and create something impactful! Whether it’s building powerful 
              web solutions or turning data into insights, I’m always open to collaborations, 
              projects, or opportunities that push boundaries.
            </p>

            {/* Social links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              {[
                { Icon: Linkedin, href: 'https://www.linkedin.com/in/azmeera-ravindar-naik-585a21256' },
                { Icon: Mail, href: 'mailto:ravindarnaikazmeera18@gmail.com' },
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

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-10 bg-card border-border card-hover animate-fade-in-up text-center">
              <Globe size={36} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-lg text-foreground">https://arn-portfolio-website-wj3p.vercel.app/</p>
            </Card>
            <Card className="p-10 bg-card border-border card-hover animate-fade-in-up text-center" style={{ animationDelay: '0.1s' }}>
              <Mail size={36} className="text-accent mx-auto mb-4" strokeWidth={1.5} />
              <p className="text-lg text-foreground">ravindarnaikazmeera18@gmail.com</p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
