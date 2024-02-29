function getrandomnumb(min, max) {
    min = Math.floor(min);
    max = Math.ceil(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
    console.log(getrandomnumb(2, 9))
  
  let givenNumber = 1234567;
  internationalNumberFormat = new Intl.NumberFormat('en-US');
  console.log(internationalNumberFormat.format(givenNumber))

  const givenNUmber2 = 987654321;
  
  console.log(givenNUmber2.toLocaleString('en-US'));