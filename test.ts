/*
 Input: "1\n2,3" or "//;\n1;2" or “1,5”
 Output: additon of numbers in the input
 Description: This method will extract the numbers from string input and calculate the summation out of it. 
*/
function add(numbers : string) : number{
  try{

  if(numbers === '') return 0;
  
  let num_arr : string [];

  if(numbers.startsWith("//")){
   num_arr = dynamicDelimiter(numbers)     
  }else{
   num_arr = numbers.split(/[,\n]/); // spliting the input w.r.t delimiter , or \n
  }
  
 let negtive_arr = checkNegetiveInput(num_arr); // checking for negetive numbers

 if(negtive_arr && Array.isArray(negtive_arr) && negtive_arr.length > 0){
   throw Error("negetive numbers not allowed " + [...negtive_arr])
 }else if(!negtive_arr){
   return 0;
 }

  if (num_arr && Array.isArray(num_arr) &&num_arr.length == 1) return parseInt(num_arr[0]);  
  if (num_arr && Array.isArray(num_arr) && num_arr.length > 1)  return num_arr.reduce((sum,value)=> sum = sum + parseInt(value),0);
} catch(e) {
  console.log(e.stack)
}
}

const dynamicDelimiter = (numbers : string)=>{
  if(numbers){
  let delimiter_input_arr = numbers!.split('//')!.pop()!.split(/[\n]/); // splitting the delimiter and the input value(dynamic delimiter)
  let delimiter = delimiter_input_arr[0];
  let input = delimiter_input_arr[1];
  return input.split(`${delimiter}`)
  }else{
    return []
  }
}

function checkNegetiveInput(arr : string[]): any {
   if(arr && Array.isArray(arr) && arr.length > 0){
    return arr.filter(ele => parseInt(ele) < 0)
   } else { 
    return null;
   }
}

console.log(add("//;\n1;-2"))