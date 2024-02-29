//concatenação objeto / array / strings
var array1 = ['d','e','v'];
var object = {a:10};
var array2 = array1.concat(object);
console.log('a:'+ array2[3].a);

object.a = 99;
console.log('a:'+ array2[3].a);

array2[3].a = 10;
console.log('a:' + object.a);
console.log('a:' + array2[3].a);
