function generateRandomN(max) {
    return Math.random() * max;
}

    console.log(`1st try ${generateRandomN(5)}`);
    console.log(`2nd try ${generateRandomN(5)}`);
    console.log(`3rd try ${generateRandomN(5)}`);
    console.log(`4th try ${generateRandomN(5)}`);

    function generateRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    
    console.log(`1st integer try: ${generateRandomInt(9)}`);
    console.log(`2nd integer try: ${generateRandomInt(9)}`);
    console.log(`3rd integer try: ${generateRandomInt(9)}`);
    console.log(`4th integer try: ${generateRandomInt(9)}`);

    function generateRandomInt2(min, max) {
        return Math.floor((Math.random() * (min - max + 1)) + min);
    }

        console.log(`1st min and max try: ${generateRandomInt2(2, 9)}`);
        console.log(`2nd min and max try: ${generateRandomInt2(2, 9)}`);
        console.log(`3rd min and max try: ${generateRandomInt2(2, 9)}`);
        console.log(`4th min and max try: ${generateRandomInt2(2, 9)}`);
