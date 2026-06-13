import Button from '../Button/Button'

const Hero = () => {
  return (
    <div className="relative bg-linear-to-r from-amber-50 to-orange-50 py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-amber-800 mb-4">
          Hidden Rajasthan
        </h1>
        <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto">
          Connecting Heritage with Global Markets – Authentic Handcrafted Treasures
        </p>
        <Button onClick={() => window.location.href = '/shop'}>Shop Now</Button>
      </div>
    </div>
  )
}

export default Hero