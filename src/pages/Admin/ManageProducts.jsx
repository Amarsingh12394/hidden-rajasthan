import { products } from '../../data/products'
const ManageProducts = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <table className="w-full bg-white shadow rounded">
        <thead className="bg-gray-100"><tr><th className="p-2 text-left">ID</th><th>Name</th><th>Price</th><th>Actions</th></tr></thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id} className="border-t">
              <td className="p-2">{p.id}</td><td>{p.name}</td><td>${p.price}</td>
              <td><button className="text-red-500">Delete</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
export default ManageProducts