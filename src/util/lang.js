import {langs} from "../constants/strings/langs";

export const langToSelectedOption = (lang) => {
    return langsOptions.find(langOption => lang === langOption.formalLabel)
};

export const langsOptions = langs.map((lang, index) => {
    return {label: lang[Object.keys(lang)[0]], value: index, formalLabel: Object.keys(lang)[0]}
});

export const selectedOptionToLang = (selectedOption) => {
    console.log(selectedOption)
    return selectedOption.formalLabel
};


