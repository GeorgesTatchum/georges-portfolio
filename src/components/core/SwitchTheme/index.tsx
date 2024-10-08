import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import useTranslation from "next-translate/useTranslation";
import { BrightnessHighFill, Laptop, MoonFill } from "react-bootstrap-icons";
import styles from './index.module.scss'

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
  }, [theme])


  return (
    <div className="relative text-left inline-block">
      <div className={`cursor-pointer hover:-rotate-[360deg] duration-500 ease-in`} onClick={(e) => setIsOpen(!isOpen)} id="theme-menu">
        {activeTheme === 'dark' ? <BrightnessHighFill size={20} color="#7B00FF" /> : activeTheme === 'system' ? <Laptop size={20} color="#7B00FF" /> : <MoonFill size={20} color="#7B00FF" />}
      </div>
      {
        isOpen &&
        <div className={`absolute right-0 z-10 mt-5 w-48 origin-top-right text-xs rounded-md bg-white dark:bg-black shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" aria-orientation="vertical" aria-labelledby="theme-button">
          <div className="py-1" role="none">
            <button
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray/10 hover:bg-gray-100 flex gap-2 w-full items-center px-4 py-2 text-sm "
              role="menuitem"
              id="theme-item-0"
              onClick={() => { handleChange('light') }}>
              <BrightnessHighFill size={16} />
              {t('light')}
            </button>

            <button
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray/10 hover:bg-gray-100 flex gap-2 w-full items-center px-4 py-2 text-sm"
              role="menuitem"
              id="theme-item-1"
              onClick={() => { handleChange('dark') }}>
              <MoonFill size={16} />
              {t('dark')}
            </button>

            <button
              className="text-gray-700 dark:text-white hover:dark:bg-white/20 hover:bg-gray/10 hover:bg-gray-100 flex gap-2 w-full items-center px-4 py-2 text-sm"
              role="menuitem"
              id="theme-item-2"
              onClick={() => { handleChange('system') }}>
              <Laptop size={16} />
              {t('system')}
            </button>

          </div>
        </div>
      }
    </div>
  );
}