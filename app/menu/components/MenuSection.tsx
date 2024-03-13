'use client'
import { useState } from 'react';
import { menus, MenuItem } from '@/app/data/menus';

const MenuSection: React.FC = () => {
  const [activeMenu, setActiveMenu] = useState<string>('breakfast');

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 bg-slate-200">
      {/* Menu items */}
      <div className="md:col-span-2 bg-gray-100 text-white p-4 rounded-lg shadow-lg shadow-orange-500/50">
        <h2 className="text-2xl font-bold mb-4 capitalize text-center text-orange-500">{activeMenu} </h2>
        <ul className="space-y-2">
          {menus[activeMenu].map((item, index) => (
              <li key={index} className="flex flex-col">
              <div className="flex justify-between">
                <span className="font-bold text-yellow-500">{item.name}</span>
                <span className="font-bold text-yellow-700">{item.price}</span>
              </div>
              <div>
                <span className=" ml-8 text-sm italic text-black">{item.ingredients.join(', ')}</span>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu buttons */}
      <div className="md:col-span-1 order-first md:order-last flex flex-col space-y-2">
        {Object.keys(menus).map((menu) => (
          <button
            key={menu}
            className={`text-md p-2 rounded-lg shadow-md ${activeMenu === menu ? 'bg-green-700 text-white' : 'bg-white text-black'}`}
            onClick={() => setActiveMenu(menu)}
          >
            {menu.charAt(0).toUpperCase() + menu.slice(1)} Menu
          </button>
        ))}
      </div>

    </div>
  );
};

export default MenuSection;