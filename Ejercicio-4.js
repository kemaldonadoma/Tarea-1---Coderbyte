function LetterChanges(str) { 
    
    var mod = str.split("");
    return mod.map(x =>  change(x)).join("");
}

function change(chara){
    if( ((chara.charCodeAt(0) + 1)> 96 && (chara.charCodeAt(0) + 1)<123) || ((chara.charCodeAt(0) + 1)> 64 && (chara.charCodeAt(0) + 1)<91) ){
        if(  ['a','e','i','o', 'u' ].indexOf(String.fromCharCode(chara.charCodeAt(0) + 1)) >=0 ){
            return (String.fromCharCode(chara.charCodeAt(0) + 1)).toUpperCase();
        }
            return (String.fromCharCode(chara.charCodeAt(0) + 1));
    }else{
        return chara;
    }
}
LetterChanges(readline());                            


  