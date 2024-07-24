import React, { useEffect, useState } from "react";
import setLanguage from 'next-translate/setLanguage'
import { useRouter } from "next/router";
import useTranslation from "next-translate/useTranslation";
import * as Icon from 'react-bootstrap-icons';

export default function SwitchLang() {
  const router = useRouter();
  const { t, lang } = useTranslation('common')

  const handleLanguageChange = async () => {
    console.log("the locale  : ", router.locale);

    let locale = router.locale === 'fr' ? "en" : "fr"
    setLanguage(locale)
      .then(() => {
        // Recharger la page avec la nouvelle langue
        // router.reload();
      })
      .catch(error => {
        console.error("Erreur lors du changement de langue :", error);
      });

    localStorage.setItem("lang", locale);
  };

  return (
    <div
      className="p-2 flex items-center justify-stretch hover:cursor-pointer"
      onClick={(e) => {
        e.preventDefault();
        handleLanguageChange();
      }}
    >
      <Icon.Translate size={20}/>
      <span className="ml-2 text-left text-[10px] uppercase hover:underline Sfera underline-animation inset-x-0">{lang}</span>
    </div>
  );
}