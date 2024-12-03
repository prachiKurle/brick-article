import React, { useEffect } from 'react';

const GoogleTranslate = () => {

    useEffect(() => {
        const addGoogleTranslateScript = () => {
            if (!document.querySelector('#google-translate-script')) {
                const script = document.createElement('script');
                script.id = 'google-translate-script';
                script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
                document.body.appendChild(script);
            }
        };

        window.googleTranslateElementInit = () => {
            if (!window.googleTranslateElement) {
                window.googleTranslateElement = new window.google.translate.TranslateElement(
                    {
                        pageLanguage: 'en',
                        includedLanguages: 'en,ar,fr,it,es,de,ru,ko,ja,nl,zh-CN,zh-TW,hu',
                        layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE
                    },
                    'google_translate_element'
                );
            }
        };

        addGoogleTranslateScript();

    }, []);

    return (
        <div>
            <div className="bg-tertiary" style={{ textAlign: 'left' }}>
                <div id="google_translate_element"></div>
            </div>
        </div>
    );
};

export default GoogleTranslate;