'use client'

import React, { useState } from 'react';

export default function DropDownLangues () {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState({
      code: 'en',
      name: 'English',
      flag: '🇬🇧'
    });

    const languages = [
      { code: 'en', name: 'English', flag: '🇬🇧' },
      { code: 'es', name: 'Español', flag: '🇪🇸' },
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
      { code: 'it', name: 'Italiano', flag: '🇮🇹' },
      { code: 'pt', name: 'Português', flag: '🇵🇹' },
      { code: 'ru', name: 'Русский', flag: '🇷🇺' },
      { code: 'zh', name: '中文', flag: '🇨🇳' },
      { code: 'ja', name: '日本語', flag: '🇯🇵' },
      { code: 'ko', name: '한국어', flag: '🇰🇷' }
    ];

    return (
      <div className="relative w-64 text-white">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between py-2 text-sm border-none"
        >
            <div className="flex items-center space-x-2">
                <span className="text-xl">{selectedLanguage.flag}</span>
                <span>{selectedLanguage.name}</span>
            </div>
            <span className="mx-2 text-gray-500">
                {isOpen ? '▲' : '▼'}
            </span>
        </button>
  
        {isOpen && (
          <div className="absolute z-10 w-full mt-1 bg-white border rounded-lg shadow-lg text-black">
            <ul className="py-1 max-h-60 overflow-auto">
              {
                languages.map((language) => (
                    <li key={language.code}>
                    <button
                        onClick={() => {
                            setSelectedLanguage(language);
                            setIsOpen(false);
                        }}
                        className="w-full px-4 py-2 text-sm text-left flex items-center justify-between hover:bg-gray-100"
                    >
                        <div className="flex items-center space-x-2">
                            <span className="text-xl">{language.flag}</span>
                            <span>{language.name}</span>
                        </div>
                        {
                            selectedLanguage.code === language.code && (
                                <span className="text-blue-500">✓</span>
                            )
                        }
                    </button>
                    </li>
                ))
              }
            </ul>
          </div>
        )}
      </div>
    );
};
