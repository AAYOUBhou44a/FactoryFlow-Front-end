import { NavLink } from 'react-router-dom'
import {
  LayoutDashboard,
  Package,
  Boxes,
  ClipboardList,
  Users,
  Settings,
} from 'lucide-react'

import { useAuth } from '../../context/AuthContext'

function Sidebar() {
  const { user } = useAuth()

  const adminLinks = [
    {
      name: 'Dashboard',
      path: '/admin',
      icon: LayoutDashboard,
    },
    {
      name: 'Produits',
      path: '/admin/products',
      icon: Package,
    },
    {
      name: 'Matières premières',
      path: '/admin/raw-materials',
      icon: Boxes,
    },
    {
      name: 'Ordres de fabrication',
      path: '/admin/orders',
      icon: ClipboardList,
    },
    {
      name: 'Utilisateurs',
      path: '/admin/users',
      icon: Users,
    },
    {
      name: 'Paramètres',
      path: '/admin/settings',
      icon: Settings,
    },
  ]

  const operatorLinks = [
    {
      name: 'Dashboard',
      path: '/operator',
      icon: LayoutDashboard,
    },
    {
      name: 'Ordres de fabrication',
      path: '/operator/orders',
      icon: ClipboardList,
    },
    {
      name: 'Stocks',
      path: '/operator/stock',
      icon: Boxes,
    },
  ]

  const links = user?.role === 'ADMIN'
    ? adminLinks
    : operatorLinks

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-5">
      <div className="mb-8">
        <h2 className="text-lg font-bold">
          Menu principal
        </h2>
        <p className="text-xs text-slate-400 mt-1">
          {user?.role === 'ADMIN' ? 'Administration' : 'Opérations'}
        </p>
      </div>

      <nav className="space-y-2">
        {links.map((link) => {
          const Icon = link.icon

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  isActive
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-300 hover:bg-slate-800 hover:text-white'
                }`
              }
            >
              <Icon size={19} />
              <span className="text-sm">{link.name}</span>
            </NavLink>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar