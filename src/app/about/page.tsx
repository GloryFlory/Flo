import { Metadata } from 'next';
import PullQuote from '../../components/PullQuote';

export const metadata: Metadata = {
  title: 'My Story — Florian Hohenleitner',
  description:
    'Seven years of anxiety, two redundancies, and the practice that went quiet — the honest story behind the retreats, the podcast, and everything I build.',
};

export default function About() {
  return (
    <main className="min-h-screen bg-sand">
      <article className="py-20 sm:py-28 px-5">
        <div className="max-w-[68ch] mx-auto">
          <h1
            className="text-4xl sm:text-5xl mb-14 sm:mb-20 text-ink text-center"
            style={{ fontFamily: 'var(--font-montserrat)', fontWeight: 900 }}
          >
            My Story
          </h1>

          <div
            className="text-ink/85 text-lg leading-[1.8] space-y-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            <p className="text-xl sm:text-2xl text-ink">Hi, I&apos;m Flo.</p>

            <p>
              For seven years, anxiety ran my life. Not the vague kind — a very specific kind. I&apos;d later learn it&apos;s called toilet anxiety: the fear of being somewhere without access to a bathroom. If that sounds small, it isn&apos;t. It decided which taxis I took, which flights I dreaded, which rooms I could sit in. When my partner and I were apartment hunting, she went to most viewings alone — I couldn&apos;t handle the thought of needing a bathroom in a stranger&apos;s home. She sent me a video of the place. We took it. I never saw it first.
            </p>

            <p>
              The absurd part is that anxiety like this touches everything. I&apos;d watch the Tour de France and only be able to think: what if a rider needs to go? A friend once told me about a chartered flight where the toilet was packed full of suitcases, and he had a stomach bug, and I asked him — genuinely bewildered — what did you do? He said: &ldquo;You just waited.&rdquo; I couldn&apos;t comprehend it. Waiting was not a thing my body believed in.
            </p>

            <p>
              It peaked in New York. I&apos;d taken my mum there with a work bonus — her lifelong dream — and I had a panic attack that felt like the floor of my life giving out. I remember frantically searching for a bathroom, finding one, texting my therapist from the stall — and realizing I didn&apos;t even need it. That was rock bottom: sitting there, certain this thing would never leave, that it was simply who I was now.
            </p>
          </div>

          <PullQuote>Anxiety is never the problem. It&apos;s always a symptom.</PullQuote>

          <div
            className="text-ink/85 text-lg leading-[1.8] space-y-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            <p>
              I was Head of Compliance in the iGaming industry at the time. Good money, stable career, clear identity. Two months after New York, at the beginning of 2023, the company asked me to relocate to Gibraltar. I said no. They ended my contract, paid me out, and handed me a decision: find the next job, or use the money to go.
            </p>

            <p>
              A friend had just come back from yoga teacher training in Bali, and the way she talked about it wouldn&apos;t leave me alone. Here&apos;s the thing about Bali: for me, it was the anxiety. The unknown, the long travel, a different culture — and a place so famous for stomach trouble it has a condition named after it. Going to Bali was choosing to walk straight into the thing that had run my life for seven years.
            </p>

            <p>I went.</p>

            <p>
              I trained as a yoga teacher. I travelled on to Thailand and became a Thai massage practitioner in Chiang Mai. I met a stranger on Koh Phangan giving a workshop on the vagus nerve — the wire between your brain and your gut — and through him found acupuncture, then breathwork. I started to understand what my anxiety actually was: not the problem, but an alarm. Anxiety is never the problem. It&apos;s always a symptom. Mine was pointing at shame, at guilt, at years of not listening to myself.
            </p>

            <p>
              And then — honestly — I went back. Money ran out, an old colleague knocked, and I took another compliance job. Most stories about leaving skip this part. I made a deal with myself: eighteen months, save what I can, build something on the side, then out for good. Almost eighteen months later to the day, when the feeling that this wasn&apos;t my life had grown too loud to ignore, my manager told me they were ending my contract at the end of the year. A second redundancy — like the universe giving me a financial head start and a kick out the door. This time I didn&apos;t go back.
            </p>

            <p>
              Somewhere in the middle of all this, I found acroyoga at park jams in Malta. And I noticed something strange: while I was practicing — outdoors, often nowhere near a bathroom, exactly the situation that should have wrecked me — the anxiety went quiet. Completely. Whatever acro is made of — trust, communication, being fully in your body with another person — turned out to be the opposite of whatever my anxiety was made of. It was the first room I&apos;d ever found where the fear couldn&apos;t follow me in.
            </p>

            <p>I&apos;ve spent the years since building bigger and bigger versions of that room.</p>
          </div>

          <PullQuote>I&apos;ve spent the years since building bigger and bigger versions of that room.</PullQuote>

          <div
            className="text-ink/85 text-lg leading-[1.8] space-y-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            <p>
              First it was teaching beginner classes in Malta. Then, one night in a kitchen in Milan — four of us from four countries, dinner and wine after an acro festival — someone said: wouldn&apos;t it be amazing to have a festival in our own country? The idea sat in my stomach for three months until it demanded to exist. I asked friends to help. They said yes — and that yes was one of the most beautiful gifts I&apos;ve ever received, because I didn&apos;t believe I could do it alone. Life happened, priorities shifted, and in the end I mostly did do it alone. Forty-three people in Gozo. A year later, a hundred in Malta. It&apos;s now the Mediterranean Acro Convention, and it keeps growing.
            </p>

            <p>
              One thing led to the next. I built the festival&apos;s website, then the marketing, then a tool for interactive event schedules, then more tools for organizers and practitioners. I spent years jealous of people who were amazing at one thing — I&apos;ve dabbled in climbing, freediving, improv comedy, padel, dance, and more versions of me than I can count. It took a long time to see that the breadth is my thing. Every one of those practices had the same ingredient hiding inside it: connection.
            </p>

            <p>
              Where&apos;s the anxiety now? In its place. I fly, I travel, I sit in taxis, I live nomadically through Southeast Asia — through Bali — and the old fear doesn&apos;t drive anymore. I still get stomach issues sometimes. They just don&apos;t own me. There was no single cure — there were eleven things, and I made{' '}
              <a
                href="/podcast/episode-10-how-i-overcame-toilet-anxiety-and-reclaimed-my-freedom"
                className="text-brand underline hover:no-underline"
              >
                a whole podcast episode about them
              </a>
              . What I know now is that healing isn&apos;t something you do once. It&apos;s something you do forever. These days, when anxiety shows up, I can meet it like a friend — because it&apos;s always carrying a message.
            </p>
          </div>

          <PullQuote>Healing isn&apos;t something you do once. It&apos;s something you do forever.</PullQuote>

          <div
            className="text-ink/85 text-lg leading-[1.8] space-y-6"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            <p>
              Last weekend, at a retreat, a guy pulled me aside. He said: I watched you dancing in the middle of the floor, completely free, and I stood on the sidelines overthinking, asking myself — why can&apos;t I be that guy? And I told him the truth: I was you. A few years ago, I was exactly you.
            </p>
          </div>

          <PullQuote>I was you. A few years ago, I was exactly you.</PullQuote>

          <div
            className="text-ink/85 text-lg leading-[1.8] space-y-6 mb-14 sm:mb-20"
            style={{ fontFamily: 'var(--font-lora)' }}
          >
            <p>
              That&apos;s why I&apos;m building The Connection Retreat — a place that brings together everything that brought me back to myself: movement, breathwork, honest conversation, the kind of practices that sound intimidating from the outside and turn out to be profoundly simple once someone makes them safe. No dogma, no jargon, no world-view you have to adopt. Just the conditions where people can stop performing and be themselves. It&apos;s for the person who feels misaligned — going through the motions, living a life other people expect. The person something inside of whom already knows.
            </p>

            <p>
              If you want the highlight reel version of this story, you&apos;re in the wrong place. If you want the honest one — welcome.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/retreat"
              className="inline-block bg-brand text-white font-bold rounded px-6 py-3 text-sm sm:text-base shadow hover:bg-brand/90 transition text-center"
            >
              The retreat I&apos;m building
            </a>
            <a
              href="/podcast"
              className="inline-block bg-ink/5 text-ink font-bold rounded px-6 py-3 text-sm sm:text-base hover:bg-ink/10 transition text-center"
            >
              Listen to Grow with the Flo
            </a>
          </div>
        </div>
      </article>
    </main>
  );
}
