import { Link } from 'react-router-dom'
import { ShieldAlert, ArrowLeft, Home } from 'lucide-react'

function Unauthorized() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 text-white px-4">
      <div className="max-w-md text-center">

        <div className="flex justify-center mb-6">
          <ShieldAlert size={80} className="text-red-500" />
        </div>

        <h1 className="text-6xl font-bold text-red-500 mb-4">
          403
        </h1>

        <h2 className="text-2xl font-semibold mb-3">
          Accès refusé
        </h2>

        <p className="text-slate-400 mb-8">
          Vous n'avez pas les permissions nécessaires pour accéder à cette page.
        </p>

        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg transition"
        >
          <Home size={18} />
          Retour à l'accueil
        </Link>

      </div>
    </div>
  )
}

export default Unauthorized