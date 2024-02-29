/*const removeCharacterFromString = (position) => {
    originalWord = 'DelftStack';
    NewWord = originalWord.slice(0, position -1)
    + originalWord.slice(position, originalWord.length);
    document.querySelector('#outputWord').textContent 
            = NewWord;      
}*/

const removeCharacterFromString = () => {
    originalWord = 'DelftStack';
    NewWord = originalWord.replace('t', '');
    document.querySelector('#outputWord').textContent
            = NewWord;
}