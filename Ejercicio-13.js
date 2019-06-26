function MaximalSquare(strArr) { 
	var rowLen = 0;
	var colLen = 0;
	var squareArea = 0;
    for(var col = 0; col < strArr.length; col++){
    	var string = strArr[col];
        for(var row = 0; row < string.length; row++){
            if(string[row] === "1"){
            	rowLen = getRowLen(string.substring(row, string.length));
            	colLen = getColLen(strArr, row, col);
            	if(rowLen === colLen && checkLegitSquare(strArr, row, col, rowLen)){
            		if(rowLen * colLen > squareArea){
            			squareArea = rowLen * colLen;
            		}
            	}
            }
        }
    }
    return squareArea;
}
function checkLegitSquare(strArr, row,col, length){
	var colEndPoint = col + (length -1);
	var rowEndPoint = row + (length -1);
	while(col < colEndPoint && row < rowEndPoint){
		if(strArr[col][row] === "0"){
			return false;
		}
		col++
		row++;
	}
	return true;
}

function getRowLen(string){
	var counter = 0;
	for(var i = 0; i < string.length; i++){
		if(string[i] !== "1"){
			break;
		}
		counter++;
	}
	return counter;
}
function getColLen(strArr, row,col){
	var counter = 0;
	while(col < strArr.length){
		if(strArr[col][row] !== "1"){
			break;
		}
		col++;
		counter++;
	}
	return counter;
}
   
// keep this function call here 
MaximalSquare(readline());