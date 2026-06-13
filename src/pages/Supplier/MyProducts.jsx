import { products } from '../../data/products'
import { useUser } from '../../context/UserContext'

const MyProducts = () => {
  const { user } = useUser()
  // For demo, show all products but filter by supplier name if needed
  const myProducts = products.filter(p => p.supplier === user?.name || p.supplier === "Jaipur Handicrafts")
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">My Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myProducts.map(p => (
          <div key={p.id} className="border p-4 rounded flex gap-4">
            <img src={p.image} alt={p.name} className="w-20 h-20 object-cover rounded" />
            <div>
              <h3 className="font-semibold">{p.name}</h3>
              <p>${p.price}</p>
              <button className="text-sm text-red-500">Delete (demo)</button>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-6 bg-amber-600 text-white px-4 py-2 rounded">+ Add New Product</button>
    </div>
  )
}
export default MyProducts