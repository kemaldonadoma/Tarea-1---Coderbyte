function LetterCapitalize(str) { 
    
    var mod = str.split(" ");
    return mod.map(x =>  change(x)).join(" ");
}

function change(chara){
            return chara.charAt(0).toUpperCase().concat(chara.substring(1,chara.length));
}
LetterCapitalize(readline());                            


  