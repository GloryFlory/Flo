import BuyMeCoffeeButton from './BuyMeCoffeeButton';

export default function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-heading font-bold mb-4">
              Grow with the Flo
            </h3>
            <p className="text-white/80 mb-4 max-w-md">
              A podcast and coaching practice dedicated to helping creatives and professionals 
              unlock their flow, resilience, and purpose.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.youtube.com/@GrowWithTheFloPodcast"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                YouTube
              </a>
              <a
                href="https://www.instagram.com/grow.with_the.flo/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://open.spotify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Spotify
              </a>
              <a
                href="https://podcasts.apple.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-white transition-colors"
              >
                Apple Podcasts
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-white/80 hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/podcast" className="text-white/80 hover:text-white transition-colors">
                  Podcast
                </a>
              </li>
              <li>
                <a href="/coaching" className="text-white/80 hover:text-white transition-colors">
                  Coaching
                </a>
              </li>
              <li>
                <a href="/about" className="text-white/80 hover:text-white transition-colors">
                  About
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-bold mb-4">Connect</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <a 
                  href="mailto:hello@florianhohen.com" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Email
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/florian-hohenleitner/how-can-i-help" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Book a Call
                </a>
              </li>
            </ul>
            
            {/* Buy Me a Coffee Button */}
            <BuyMeCoffeeButton />
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60">
            &copy; {new Date().getFullYear()} Florian Hohenleitner. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
