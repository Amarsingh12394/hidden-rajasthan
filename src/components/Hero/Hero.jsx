import Button from '../Button/Button'
import heroVideo from '../../assets/videos/herovideo.mp4'

const Hero = () => {
  return (<div className="relative h-screen overflow-hidden">

    {/* Background Video */}
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-full h-full object-cover"
    >
      <source src={heroVideo} type="video/mp4" />
    </video>

    {/* Dark Overlay */}
    <div className="absolute inset-0 bg-black/50"></div>

    {/* Content */}
    <div className="relative z-10 flex h-full items-center justify-center">
      <div className="text-center px-4">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          Hidden Rajasthan
        </h1>

        <p className="text-lg md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
          Discover Authentic Craftsmanship. Experience Quality.
          Support Local Heritage.
        </p>

        <Button onClick={() => window.location.href = '/shop'}>
          Shop Now
        </Button>
      </div>
    </div>

  </div>

)
}

export default Hero
