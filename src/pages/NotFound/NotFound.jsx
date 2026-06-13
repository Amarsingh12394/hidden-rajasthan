import { Link } from 'react-router-dom'
import Button from '../../components/Button/Button'

const NotFound = () => {
  return (
    <div className="text-center py-20">
      <h1 className="text-6xl font-bold text-amber-700">404</h1>
      <p className="text-xl mt-4">Page not found</p>
      <Link to="/" className="mt-6 inline-block"><Button>Go Home</Button></Link>
    </div>
  )
}
export default NotFound