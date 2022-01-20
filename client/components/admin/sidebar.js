import React from 'react'
import {Link} from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarMenu">
        <h3 className="sidebarTitle">Dashboard</h3>
        <ul className="sidebarList">
          <Link to="/admin">
            <li className="sidebarListItem">Home</li>
          </Link>
          <Link to="/admin/users">
            <li className="sidebarListItem">Users</li>
          </Link>
          <Link to="/admin/products">
            <li className="sidebarListItem">Products</li>
          </Link>
        </ul>
      </div>
    </div>
  )
}
