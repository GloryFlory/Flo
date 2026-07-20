import Link from 'next/link';
import Image from 'next/image';
import { Mail, ArrowUpRight } from 'lucide-react';

// lucide-react dropped brand/social glyphs, so Instagram is a small inline SVG
// kept in the same stroke style (1.75, currentColor) as the lucide icons here.
function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Edit this array to change what shows on /connect — order, copy, and links
// live here so nothing below needs touching month to month.
type ConnectLink = {
  label: string;
  sublabel?: string;
  url: string;
  external?: boolean;
};

const links: ConnectLink[] = [
  {
    label: 'Listen to Grow with the Flo',
    sublabel: 'The podcast — new episodes weekly',
    url: '/podcast',
  },
  {
    label: 'MAC 2026',
    sublabel: 'Early Bird ends July 31',
    url: 'https://www.acrointhesun.com',
    external: true,
  },
  {
    label: 'The Connection Retreat',
    sublabel: 'Join the waitlist',
    url: '/retreat',
  },
  {
    label: 'Work with me',
    sublabel: 'Web, booking & tools for retreat organizers',
    url: '/work',
  },
  {
    label: 'FlowGrid',
    sublabel: 'Event scheduling for retreats & festivals',
    url: 'https://tryflowgrid.com',
    external: true,
  },
];

export default function ConnectPage() {
  return (
    <main
      className="min-h-screen flex flex-col items-center px-5 pt-14 sm:pt-20 pb-[max(3.5rem,env(safe-area-inset-bottom))] sm:pb-[max(5rem,env(safe-area-inset-bottom))] [-webkit-tap-highlight-color:transparent]"
      style={{
        background:
          'linear-gradient(160deg, #081a1a 0%, #123f3f 32%, #2f4a35 68%, #223321 100%)',
      }}
    >
      <div className="w-full max-w-[420px] flex flex-col items-center">

        {/* Header: photo + name -> homepage, socials beside it */}
        <Link href="/" className="flex flex-col items-center group">
          <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden ring-2 ring-[#f1b139]/70 shadow-[0_0_40px_-8px_rgba(241,177,57,0.45)] transition-transform group-hover:scale-[1.03] group-active:scale-[0.97]">
            <Image
              src="/profile-4.jpeg"
              alt="Florian Hohenleitner"
              fill
              className="object-cover"
              priority
            />
          </div>
          <h1
            className="mt-4 text-2xl sm:text-3xl text-white tracking-tight"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900 }}
          >
            Florian Hohenleitner
          </h1>
        </Link>

        <div className="flex items-center gap-5 mt-3">
          <a
            href="https://www.instagram.com/glory_floryy/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/70 hover:text-[#f1b139] active:text-[#f1b139] active:scale-90 transition-all"
          >
            <InstagramIcon size={20} />
          </a>
          <a
            href="mailto:hello@florianhohenleitner.com"
            aria-label="Email"
            className="text-white/70 hover:text-[#f1b139] active:text-[#f1b139] active:scale-90 transition-all"
          >
            <Mail size={20} strokeWidth={1.75} />
          </a>
        </div>

        <p
          className="mt-5 text-center text-white/70 text-sm sm:text-base leading-relaxed max-w-xs"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          Everything I&apos;m building right now, in one place.
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-3.5 mt-9">
          {links.map((link) => {
            const linkClassName =
              'group relative w-full rounded-2xl px-5 py-4 sm:py-4.5 bg-white/[0.06] border border-white/15 backdrop-blur-sm hover:bg-white/[0.11] hover:border-[#f1b139]/60 active:bg-white/[0.14] active:border-[#f1b139]/70 active:scale-[0.98] transition-all flex items-center justify-between gap-3';

            const content = (
              <>
                <span className="flex flex-col">
                  <span
                    className="text-white text-base sm:text-lg leading-snug"
                    style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 800 }}
                  >
                    {link.label}
                  </span>
                  {link.sublabel && (
                    <span
                      className="text-[#c9d6c2]/80 text-xs sm:text-sm mt-0.5"
                      style={{ fontFamily: 'var(--font-lora)' }}
                    >
                      {link.sublabel}
                    </span>
                  )}
                </span>
                <ArrowUpRight
                  size={18}
                  strokeWidth={1.75}
                  className="text-[#f1b139] flex-shrink-0 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-active:opacity-100 group-active:translate-x-0.5 group-active:-translate-y-0.5 transition-all"
                />
              </>
            );

            return link.external ? (
              <a
                key={link.label}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={linkClassName}
              >
                {content}
              </a>
            ) : (
              <Link key={link.label} href={link.url} className={linkClassName}>
                {content}
              </Link>
            );
          })}
        </div>

        <p
          className="mt-10 text-white/35 text-xs text-center"
          style={{ fontFamily: 'var(--font-lora)' }}
        >
          florianhohenleitner.com
        </p>
      </div>
    </main>
  );
}
