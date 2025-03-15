function multplica_array(array, func){
    let i;
    for( i = 0; i < array.length; i++){
        array[i] = func(array);
    }   
}

const func = (n) => n*n;
array = [1,2,3,4,5,6,7]

console.log(multplica_array(array,func))

for (const i in array){
	console.log(i)
}
