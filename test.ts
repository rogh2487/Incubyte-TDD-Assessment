function add(numbers: string) : number {
  
  if(numbers === '') return 0;
  
  let num_arr : string [] = numbers.split(/[,\n]/);
  
  if (num_arr.length == 1) return parseInt(num_arr[0]);
  
  return num_arr.reduce((sum,value)=> sum = sum + parseInt(value),0);
}

console.log(add('1\n2,3'))