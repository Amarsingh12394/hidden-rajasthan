const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6">About Hidden Rajasthan</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-lg mb-4">
            Hidden Rajasthan is a curated marketplace that connects the world with authentic,
            handcrafted products from the heart of Rajasthan.
          </p>
          <p className="mb-4">
            We work directly with artisans, weavers, and small-scale producers to bring you
            heritage-rich items – from camel leather goods and hand-knotted rugs to organic
            spices and traditional textiles.
          </p>
          <p className="mb-4">
            Our mission: preserve traditional crafts, empower local communities, and make
            Rajasthani heritage accessible globally through fair trade and ethical sourcing.
          </p>
        </div>
        <div className="bg-amber-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-3">Why Choose Us?</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>100% authentic, handcrafted products</li>
            <li>Direct from artisans – no middlemen</li>
            <li>Eco-friendly & sustainable packaging</li>
            <li>Worldwide shipping & secure payment</li>
            <li>B2B bulk orders & corporate gifting</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
export default About