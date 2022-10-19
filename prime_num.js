//check given number is prime or not
let num=13
flag=0
for(i=2;i<num;i++){
  if(num%i==0){
    console.log("Yes")
    flag=1
    break;
  }
}
if (flag==1){
  console.log("No")
}
