const About = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-amber-800 mb-6 text-center">About Hidden Rajasthan</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-lg mb-6">
          Hidden Rajasthan is more than a marketplace – it's a movement to preserve and promote the rich heritage of Rajasthan's artisans, weavers, and craftspeople. We bridge the gap between rural craftsmanship and global consumers, ensuring fair wages and sustainable practices.
        </p>
        <div className="bg-amber-50 p-6 rounded-lg mb-6">
          <h2 className="text-2xl font-semibold mb-3">Our Story</h2>
          <p>Founded in 2024 by a team of heritage enthusiasts, Hidden Rajasthan started with a simple belief: every handmade product tells a story. Today, we work with over 50 artisan clusters across Jaipur, Jodhpur, Udaipur, and Pushkar.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">🌿 Ethical Sourcing</h2>
            <p>We visit every supplier, audit working conditions, and ensure no child labour. Our products are natural, eco-friendly, and fairly traded.</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-2">🌍 Global Impact</h2>
            <p>We've shipped to 30+ countries, empowered 200+ families, and helped preserve dying arts like block printing and camel leather craft.</p>
          </div>
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-3">Join Our Journey</h2>
          <p>Whether you're a buyer, a supplier, or a supporter – welcome to the Hidden Rajasthan family.</p>
        </div>
      </div>
    </div>
  )
}
export default About