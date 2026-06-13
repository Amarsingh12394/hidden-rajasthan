const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6">
        <div><h3 className="font-bold">Hidden Rajasthan</h3><p>Connecting heritage with global markets.</p></div>
        <div><h4>Quick Links</h4><ul><li>Shop</li><li>B2B</li><li>Become Supplier</li></ul></div>
        <div><h4>Support</h4><ul><li>Contact</li><li>Returns</li><li>FAQs</li></ul></div>
        <div><h4>Newsletter</h4><input type="email" placeholder="Your email" className="p-1 rounded text-black" /></div>
      </div>
    </footer>
  )
}
export default Footer