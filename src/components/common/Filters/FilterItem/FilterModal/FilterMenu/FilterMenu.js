import React from 'react';
import './filterMenu.css'

export default function FilterMenu({ activeMenu, setActiveMenu }) {
  const menu = [
    {
      id: 1,
      name: 'Sort By',
    },
    {
      id: 2,
      name: 'Cuisines',
    },
    {
      id: 3,
      name: 'Rating',
    },
    {
      id: 4,
      name: 'Cost Per Person',
    },
    {
      id: 5,
      name: 'More Filters',
    }
  ]
  return (
    <div>
      {menu.map(item => {
        return (
          <div key={item.id} onClick={() => setActiveMenu(item.name)} className={`cursor-pointer filter-menu ps-4 py-4 ${activeMenu === item.name && "active-menu"}`}>
            {item.name}
          </div>
        )
      })}
    </div>
  )
}
