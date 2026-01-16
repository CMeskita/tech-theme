'use client'
import { ChevronDown, TextAlignJustify } from 'lucide-react';
import React, { useState, useRef, useEffect } from 'react';

interface MenuItem {
  label: string;
  href: string;
  divider?: boolean;
}
export default function DropdownMenu(){
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems: MenuItem[] = [
    { label: 'Agendamento', href: '/pages/calendar' },
    { label: 'Cadastro', href: '/pages/register' },
    { label: 'Home', href: '/pages/home' },
    { label: 'Painel', href: '/pages/panel' },
    { label: 'Parceiros', href: '/pages/partner/calendar' },
    { label: '', href: '', divider: true }, // Divisor
    { label: 'Sair', href: '/pages/login' },
     /* { label: 'teste', href: '/pages/partner/' }*/
  ];

    const [mounted, setMounted] = useState(false);
  
    useEffect(() => {
      setMounted(true);
    }, []); 

  // Fecha o dropdown ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

    return(
    <div className="relative inline-block" ref={dropdownRef}>
      {/* Botão de Trigger */}
    
        <button onClick={() => setIsOpen(!isOpen)} type="button" data-target="dropdown-default" className="p-3 text-gray-500 flex items-center justify-center transition-all duration-300 hover:text-gray-900">
                <TextAlignJustify className='text-gray-900' />
                <ChevronDown className='text-gray-900' />
        </button>

      {/* Menu Dropdown */}
      {isOpen && (
        <div className="dropdown-menu rounded-xl shadow-lg bg-white absolute top-full w-max -left-20 mt-2 z-50 border border-gray-100 animate-in fade-in zoom-in duration-200">
          <ul className="py-2">
            {menuItems.map((item, index) => (
              item.divider ? (
                <li key={`sep-${index}`} className="bg-gray-200 w-full h-px my-1" />
              ) : (
                <li key={item.label}>
                  <a
                    className="block px-6 py-2 hover:bg-gray-50 text-gray-600 font-medium transition-colors"
                    href={item.href}
                    onClick={() => setIsOpen(false)} // Fecha ao clicar em um item
                  >
                    {item.label}
                  </a>
                </li>
              )
            ))}
          </ul>
        </div>
      )}
    </div>

    );
}