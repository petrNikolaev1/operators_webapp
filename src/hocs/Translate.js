import React, {IntrinsicElements as PropTypes} from 'react';
import { connect } from 'react-redux';
import ru from 'constants/strings/ru';

// Object for languages strings
export const languages = {
    ru
};

export function translatedStrings(store, key) {
    const strings = key ? languages[store.stringReducer.language][key] : null;

    return { ...strings };
}

export function getCustomTranslatedStrings(language, key) {
    const strings = key ? languages[language][key] : null;

    return { ...strings };
}

export default function translate(key) {
    return (Component) => {
        const stateToProps = store => ({
            currentLanguage: store.stringReducer.language
        });

        const TranslationComponent = (props) => {
            let strings = {};
            if (typeof key === 'object') {
                for (let i = 0; i < key.length; i++) {
                    strings = Object.assign(strings, languages[props.currentLanguage][key[i]]);
                }
            } else {
                strings = languages[props.currentLanguage][key];
            }
            const merged = {
                ...props.strings, // Do not override strings that are already sent in props
                ...strings, // Get strings from key
            };
            if (strings) {
                return (
                    <Component
                        {...props}
                        strings={merged}
                        currentLanguage={props.currentLanguage}
                    />
                );
            }
            // if no strings return component without strings
            return (
                <Component
                    {...props}
                    currentLanguage={props.currentLanguage}
                />
            );
        };

        TranslationComponent.propTypes = {
            strings: PropTypes.object,
            currentLanguage: PropTypes.string.isRequired
        };

        return connect(stateToProps)(TranslationComponent);
    };
}