export default function LivingWithEase() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-brand/10 to-brand/20 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="w-40 h-40 mx-auto mb-8 rounded-full overflow-hidden border-6 border-white shadow-xl">
            <img
              src="/anxiety.jpg"
              alt="Living with Ease"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-5xl font-heading font-bold mb-4 text-ink">
            Living with Ease
          </h1>
          <p className="text-xl text-brand font-medium mb-6">
            Anxiety Program
          </p>
          <p className="text-lg text-ink/80 max-w-3xl mx-auto leading-relaxed">
            Transform your relationship with anxiety and discover tools for lasting peace and confidence. 
            Choose from three personalized coaching options designed to meet you where you are.
          </p>
        </div>
      </section>

      {/* Coaching Tiers */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold mb-16 text-center text-ink">
            Choose Your Journey
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {/* Tier 1: Starter Sessions */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-brand/20 p-8 text-center">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Starter Sessions</h3>
              
              {/* Program Details */}
              <div className="bg-brand/10 rounded-lg p-6 mb-6">
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
                    <span>Follow-up worksheet</span>
                  </div>
                </div>
              </div>

              {/* Investment */}
              <div className="mb-8">
                <p className="text-brand font-medium mb-2">Entry Level</p>
                <div className="text-3xl font-bold text-brand mb-4">€120</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Quick clarity on anxiety challenges</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Actionable takeaways & resources</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalized coping strategies</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-ink/60 mb-6 italic">Perfect for first-time coaching experience</p>
              
              <a
                href="https://calendly.com/florian-hohenleitner/how-can-i-help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 w-full"
              >
                Book Session
              </a>
            </div>

            {/* Tier 2: Growth Journey */}
            <div className="bg-white rounded-xl shadow-xl border-2 border-brand p-8 text-center relative">
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <span className="bg-brand text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular</span>
              </div>
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">Growth Journey</h3>
              
              {/* Program Details */}
              <div className="bg-brand/10 rounded-lg p-6 mb-6">
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
              <div className="mb-8">
                <p className="text-brand font-medium mb-2">Core Package</p>
                <div className="text-3xl font-bold text-brand mb-4">€650-€750</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Deep dive into anxiety transformation</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Personalized resources & practices</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Ongoing support between sessions</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-ink/60 mb-6 italic">For committed transformation with accountability</p>
              
              <a
                href="https://calendly.com/florian-hohenleitner/how-can-i-help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 w-full"
              >
                Start Journey
              </a>
            </div>

            {/* Tier 3: The Immersion */}
            <div className="bg-white rounded-xl shadow-lg border-2 border-brand/20 p-8 text-center">
              <div className="w-16 h-16 bg-brand/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌳</span>
              </div>
              <h3 className="text-2xl font-heading font-bold mb-6 text-ink">The Immersion</h3>
              
              {/* Program Details */}
              <div className="bg-brand/10 rounded-lg p-6 mb-6">
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
              <div className="mb-8">
                <p className="text-brand font-medium mb-2">Premium Experience</p>
                <div className="text-3xl font-bold text-brand mb-4">€1,800-€2,000</div>
                
                <div className="space-y-4 text-left">
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Holistic anxiety, authenticity & connection work</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Ongoing chat support & priority booking</span>
                  </div>
                  <div className="flex items-start">
                    <span className="text-brand mr-3 mt-1">•</span>
                    <span className="text-ink/70">Optional 1-day in-person intensive</span>
                  </div>
                </div>
              </div>
              
              <p className="text-sm text-ink/60 mb-6 italic">Complete transformation with deep support</p>
              
              <a
                href="https://calendly.com/florian-hohenleitner/how-can-i-help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand text-white px-6 py-3 rounded-lg font-medium hover:bg-brand/90 transition-colors duration-200 w-full"
              >
                Begin Immersion
              </a>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-brand to-brand/80 rounded-xl p-8 max-w-2xl mx-auto">
              <h3 className="text-3xl font-heading font-bold text-white mb-4">
                Ready to Transform Your Relationship with Anxiety?
              </h3>
              <p className="text-white/90 mb-8 text-lg">
                Join our next cohort starting soon. Limited spaces available.
              </p>
              <a
                href="https://calendly.com/florian-hohenleitner/how-can-i-help"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-white text-brand px-8 py-4 rounded-lg font-bold text-lg hover:bg-white/90 transition-colors shadow-lg"
              >
                Book Discovery Call
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
