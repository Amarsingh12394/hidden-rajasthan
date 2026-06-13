const SupplierCard = ({ supplier }) => {
  return (
    <div className="border rounded-lg p-4 text-center shadow hover:shadow-md transition">
      <img src={supplier.image} alt={supplier.name} className="w-24 h-24 rounded-full mx-auto mb-3 object-cover" />
      <h3 className="font-bold text-lg">{supplier.name}</h3>
      <p className="text-sm text-gray-600">{supplier.product}</p>
      <p className="text-xs text-gray-500 mt-2">{supplier.description}</p>
    </div>
  )
}

export default SupplierCard