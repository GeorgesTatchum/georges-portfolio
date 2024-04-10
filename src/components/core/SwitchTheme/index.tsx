import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";

import * as Icon from 'react-bootstrap-icons';


export default function SwitchTheme() {

  const { theme, setTheme } = useTheme();
  const { t } = useTranslation("common")
  const [isOpen, setIsOpen] = useState(false)
  const [activeTheme, setActiveTheme] = useState<string | undefined>(undefined)
  const handleChange = (value: 'light' | 'dark' | 'system') => {
    setTheme(value)
  };

  const getIcon = (theme: string) => {
    const icons: any = {
      "system": "\ue321",
      "light": "\ue518",
      "dark": "\ue51c"
    }

    return icons[theme] || "\ue321"
  }

  useEffect(() => {
    if (isOpen == true) {
      var elem = document.getElementById("theme-menu");
      if (typeof elem !== 'undefined' && elem !== null) {
        window.addEventListener('click', function (e) {
          if (!(elem!.contains(e.target as HTMLElement))) {
            setIsOpen(false)
          }
        });
      }
    }
  })

  useEffect(() => {
    setActiveTheme(theme)
    console.log('active theme : ', theme);

  }, [theme])


  return (
    <div className="relative text-left inline-block">
      <div className="cursor-pointer" onClick={(e) => setIsOpen(!isOpen)} id="theme-menu">
        {activeTheme === 'dark' ? <Icon.BrightnessHighFill size={24} color="#7B00FF" /> : activeTheme === 'system' ? <Icon.Laptop size={24} color="#7B00FF" /> : <Icon.MoonFill size={24} color="#7B00FF" />}
      </div>
      {
        isOpen &&
        <div className={`absolute right-0 z-10 mt-5 w-48 origin-top-right text-xs rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="theme-button">
          <div className="py-1" role="none">
            <button
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100 flex gap-2 w-full items-center px-4 py-2 text-sm "
              role="menuitem"
              id="theme-item-0"
              onClick={() => { handleChange('light') }}>
              <Icon.BrightnessHighFill size={16} />
              {t('light')}
            </button>

            <button
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100 flex gap-2 w-full items-center px-4 py-2 text-sm"
              role="menuitem"
              id="theme-item-1"
              onClick={() => { handleChange('dark') }}>
              <Icon.MoonFill size={16} />
              {t('dark')}
            </button>

            <button
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray-100 flex gap-2 w-full items-center px-4 py-2 text-sm"
              role="menuitem"
              id="theme-item-2"
              onClick={() => { handleChange('system') }}>
              <Icon.Laptop size={16} />
              {t('system')}
            </button>

          </div>
        </div>
      }
    </div>
  );
}