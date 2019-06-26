function KaprekarsConstant(num) { 
  var str = num.toString();
  
   while(str.length<4){
      str=str+"0";
    }
  var cad = (str.split(""));
  var num1 = cad.sort();
  var cad2 = (str.split(""));
  var num2 = cad2.sort().reverse()
  var n2=Number(num2.join(""));
  var n1=Number(num1.join(""));
  return karp(n2,n1);
}
   
function karp(n1,n2){
    var res = n1-n2;
        if(res===6174){
            return true ;
        }else{ return KaprekarsConstant(res) +1;
    }   
}
   
// keep this function call here 
KaprekarsConstant(readline());                            


  