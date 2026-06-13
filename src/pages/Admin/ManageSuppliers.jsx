import { suppliers } from '../../data/suppliers'
const ManageSuppliers = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Manage Suppliers</h1>
      <ul>
        {suppliers.map(s => <li key={s.id} className="border p-2 my-2 flex justify-between"><span>{s.name}</span><button className="text-red-500">Remove</button></li>)}
      </ul>
    </div>
  )
}
export default ManageSuppliers