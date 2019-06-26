function FirstReverse(str) { 

var rev = "";

 if( str === "" ){
    return rev;   
 }else{
     rev += str.charAt(str.length - 1) + ( FirstReverse(str.substring(0,str.length - 1)));
     return rev;
 }
 
  // code goes here  
}
   
// keep this function call here 
FirstReverse(readline());                            


  