export default function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="my-12 sm:my-16 rounded-2xl px-6 sm:px-10 py-10 sm:py-14 text-center"
      style={{
        background: 'linear-gradient(155deg, #081a1a 0%, #123f3f 45%, #2f4a35 100%)',
      }}
    >
      <p
        className="text-white text-2xl sm:text-3xl leading-snug max-w-[26ch] mx-auto"
        style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900 }}
      >
        <span className="text-[#f1b139]">&ldquo;</span>
        {children}
        <span className="text-[#f1b139]">&rdquo;</span>
      </p>
    </div>
  );
}
