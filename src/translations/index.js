const translationFileNamePattern = /\.\/(\w+)\.yml/;

const yamlFiles = import.meta.glob('./*.yml', { eager: true });

const fileNames = Object.keys(yamlFiles);

const translationFileNames = fileNames.filter(fileName => translationFileNamePattern.test(fileName));

const translations = translationFileNames.reduce((acc, fileName) => {
    const languageName = translationFileNamePattern.exec(fileName)[1];
    const languageFile = yamlFiles[fileName];

    acc[languageName] = languageFile;
    return acc;
}, {});

export default translations;
