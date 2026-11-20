import { LogOut, UserCircle } from 'lucide-react'
import { useAuth } from '../../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()

  return (
    <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-xl font-bold text-slate-800">
          FactoryFlow
        </h1>
        <p className="text-xs text-slate-500">
          Industrial Production Management
        </p>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <UserCircle size={24} className="text-slate-500" />

          <div>
            <p className="text-sm font-semibold text-slate-800">
              {user?.name}
            </p>
            <p className="text-xs text-slate-500">
              {user?.role}
            </p>
          </div>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm text-red-600 hover:bg-red-50 px-3 py-2 rounded-lg transition"
        >
          <LogOut size={18} />
          Déconnexion
        </button>
      </div>
    </header>
  )
}

export default Navbar