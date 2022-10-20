let str="abccba"
let new_str=""

for(let i=str.length-1;i>=0;i--){
  new_str+=str[i];
  if(new_str==str){
    print="Yes"
  }else{
    print="No"
  }
  }
console.log(print);

