export default function CoachingPage() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-heading font-bold mb-4">Coaching</h1>
      <h2 className="text-xl font-bold mb-2">Who it’s for</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Creatives seeking clarity and direction</li>
        <li>Professionals wanting to unlock their flow</li>
        <li>Anyone ready for personal transformation</li>
      </ul>
      <h2 className="text-xl font-bold mb-2">Outcomes</h2>
      <ul className="list-disc ml-6 mb-4">
        <li>Greater resilience and confidence</li>
        <li>Actionable strategies for growth</li>
        <li>Supportive community and accountability</li>
      </ul>
      <button className="btn btn-primary">Join the Waitlist</button>
    </div>
  );
}
