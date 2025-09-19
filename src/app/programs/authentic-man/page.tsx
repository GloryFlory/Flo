export default function AuthenticMan() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-accent/10 to-accent/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-6 border-white shadow-xl">
            <img
              src="/authentic.jpg"
              alt="Becoming the Authentic Man"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 text-ink">
            Becoming the Authentic Man
          </h1>
          <p className="text-xl text-accent font-medium mb-6">
            Men's Development Program
          </p>
          <p className="text-lg text-ink/80 max-w-3xl mx-auto leading-relaxed">
            Break free from societal expectations and discover your authentic self. 
            Choose from three personalized coaching paths designed to unlock your true potential.
          </p>
        </div>
      </section>

      {/* Core Program Areas */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            The Four Pillars of Authentic Masculinity
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Authentic Masculinity</h3>
              <p className="text-ink/70 mb-4">
                Break free from toxic masculine stereotypes and discover what it truly means to be a man in today's world.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Challenge societal expectations</li>
                <li>• Define your own masculine identity</li>
                <li>• Balance strength with vulnerability</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">💝</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Emotional Intelligence</h3>
              <p className="text-ink/70 mb-4">
                Master your emotional world and learn to express feelings authentically without losing your masculine core.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Understand your emotional patterns</li>
                <li>• Express vulnerability as strength</li>
                <li>• Navigate difficult conversations</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Purpose & Vision</h3>
              <p className="text-ink/70 mb-4">
                Discover your unique mission and create a life aligned with your deepest values and aspirations.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Clarify your core values</li>
                <li>• Design your ideal future</li>
                <li>• Create actionable life plans</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-8 shadow-lg border">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl">👑</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Leadership Skills</h3>
              <p className="text-ink/70 mb-4">
                Develop the confidence and skills to lead authentically in all areas of your life.
              </p>
              <ul className="space-y-2 text-sm text-ink/60">
                <li>• Lead by example</li>
                <li>• Inspire and motivate others</li>
                <li>• Make difficult decisions with integrity</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gradient-to-br from-accent/5 to-accent/10">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Your Transformation Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Self-Discovery</h3>
              <p className="text-ink/70">Uncover your authentic values, desires, and purpose beyond societal conditioning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">💪</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Inner Strength</h3>
              <p className="text-ink/70">Build emotional resilience and confidence to express your true self</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌟</span>
              </div>
              <h3 className="text-xl font-heading font-bold mb-4 text-ink">Authentic Living</h3>
              <p className="text-ink/70">Integrate your discoveries into all areas of life with integrity</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coaching Tiers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Choose Your Path
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Tier 1: Starter Sessions */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-accent/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Starter Sessions</h3>
              
              {/* Program Details */}
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Program Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>1 session</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Session Length:</span>
                    <span>60 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>Follow-up action plan</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-accent font-medium mb-2">Entry Level</p>
                <div className="text-3xl font-bold text-accent mb-4">€120</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Explore blocks to authentic expression</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Practical authenticity exercises</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalized growth strategies</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Perfect for men curious about deeper self-work</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/becoming-the-authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=starter-session"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-auto"
              >
                Book Session
              </a>
            </div>

            {/* Tier 2: Growth Journey */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-accent p-8 text-center relative flex flex-col">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-accent text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Growth Journey</h3>
              
              {/* Program Details */}
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Program Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>6-8 weeks</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>6 × 60min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 coaching</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>WhatsApp check-ins</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-accent font-medium mb-2">Core Package</p>
                <div className="text-3xl font-bold text-accent mb-4">€750</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Deep masculine identity exploration</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Customized authenticity practices</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Ongoing support between sessions</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">For men ready to break free from expectations</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/becoming-the-authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=growth-journey"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-auto"
              >
                Start Journey
              </a>
            </div>

            {/* Tier 3: The Immersion */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-accent/20 p-8 text-center flex flex-col">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">The Immersion</h3>
              
              {/* Program Details */}
              <div className="bg-accent/10 rounded-lg p-6 mb-6">
                <h4 className="font-semibold text-ink mb-4">Program Details</h4>
                <div className="space-y-2 text-sm text-ink/70">
                  <div className="flex justify-between">
                    <span>Duration:</span>
                    <span>3 months</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sessions:</span>
                    <span>12 × 75min</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Format:</span>
                    <span>1:1 + intensive</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Support:</span>
                    <span>Priority + chat</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8 flex-grow">
                <p className="text-accent font-medium mb-2">Premium Experience</p>
                <div className="text-3xl font-bold text-accent mb-4">€2,000</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Complete masculine integration journey</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Ongoing chat support & priority booking</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-accent mr-3 mt-1">•</span>
                    <span className="text-ink/70">Optional 1-day in-person intensive</span>
                  </div>
                </div>
                
                <p className="text-sm text-ink/60 mt-6 italic">Complete transformation with deep support</p>
              </div>
              
              <a
                href="https://meet.brevo.com/florian-hohenleitner/becoming-the-authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=immersion"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors duration-200 w-full mt-auto"
              >
                Begin Immersion
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            What Men Are Saying
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"I can see you lead... you came a long way and can create that space... It was lovely to see you being yourself in your vulnerability, and being authentic."</p>
              <div className="text-accent font-medium">— Giancarlo</div>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-lg border">
              <p className="text-ink/70 mb-4 italic">"I learned to express my emotions authentically without losing my masculine core. Game changer for my relationships."</p>
              <div className="text-accent font-medium">— David, 41</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-br from-accent to-accent/80">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold text-white mb-6">
            Ready to Discover Your Authentic Self?
          </h2>
          <p className="text-white/90 mb-8 text-lg">
            Stop living by other people's expectations. Start your journey to authentic masculinity today.
          </p>
          <a
            href="https://meet.brevo.com/florian-hohenleitner/becoming-the-authentic-man?utm_campaign=authentic-man&utm_source=website&utm_medium=discovery-call"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-white text-accent px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
          >
            Book Your Discovery Call
          </a>
        </div>
      </section>
    </main>
  );
}
