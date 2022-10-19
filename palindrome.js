let str="abccba"
let n=str.length
let flag=0
for(let i=0;i<n/2;i++){
  if(str[i]!=str[(n-1)-i]){
    console.log("Yes")
    flag=1;
    break;
  }
}
if (flag==1){
  console.log("No")
}