import {langs} from "../constants/strings/langs";
import ReactCountryFlag from "react-country-flag";
import React from "react";

export const langToSelectedOption = (lang) => {
    return langsOptions.find(langOption => lang === langOption.formalLabel)
};

export const langsOptions = Object.keys(langs).map((lang, index) => (
    {
        label: langs[lang],
        formalLabel: lang,
        value: index,
        icon: (selected) => (
            <ReactCountryFlag
                styleProps={{
                    width: '1vw',
                    height: '1vw',
                    marginRight: selected ? 0 : '1vw',
                    marginLeft: selected ? '1vw' : 0,
                    class: 'icon'
                }}
                code={lang}
                svg
            />)
    }
));

export const selectedOptionToLang = (selectedOption) => {
    return selectedOption.formalLabel
};
