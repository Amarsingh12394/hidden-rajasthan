const Testimonial = ({ data }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <div className="flex items-center gap-2 mb-2">
        <span className="font-bold">{data.name}</span>
        <span className="text-yellow-500">{"⭐".repeat(data.rating)}</span>
      </div>
      <p className="text-gray-700 italic">"{data.text}"</p>
      <p className="text-xs text-gray-400 mt-2">- {data.location}</p>
    </div>
  )
}

export default Testimonial