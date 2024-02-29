// GERAR CORDÃO ALEATÓRIO EM JS;
// Use o loop for para gerar strings aleatórias;

const generateRandomString = (num) => {
    const characters = 
        'matheus';
        let result1 = ' ';
        const charactersLength = characters.length;
       
        for (let i = 0; i < num; i++) {
            result1 +=
                characters.charAt(Math.floor(Math.random() * charactersLength));

        }
            return result1;
            
}       

const displayRandomString = () => {
    let randomStringContainer = characters;
    randomStringContainer.innerHTML = generateRandomString(0);
}
    console.log(generateRandomString(5));

    const generateRandomString2 = num => {
        const characters2 = 'fanuchy';
        let result2 = Math.random().toString(36).substring(7, num); 
        return result2;
    }
        console.log(generateRandomString2(5));

        let res;
        function removeText() {
            let ourword = 'matheus fanuchy';
            let newword = ourword.substring(3,9);
            res = newword;
            
        }
            removeText()    
        console.log(res)