function add(numbers : string) : number {
  
    if(numbers === '') return 0;
    
    let num_arr : string [] = numbers.split(',');
    
    if (num_arr.length == 1) return parseInt(num_arr[0]);
    
  }
  
  console.log(add('3'))