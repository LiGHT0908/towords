'use strict';

module.exports = (num) => {
    var numstr=num.toString()
    var digs=numstr.length
    console.log(numstr)
    
    singles = ["","one","two","three","four","five","six","seven","eight","nine"]
    one_2Digs=["ten","Eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen","eighteen","nineteen"]
    tens = ["twenty" , "thirty" , "fourty" , "fifty" ,"sixty" , "seventy" , "eighty", "ninety"]
    
    
    if(digs > 5){
        console.log("limit exceded")
    }
    var final=""
    14113
    if(digs == 5){
        if(numstr[0] == "1"){
            final=final + one_2Digs[parseInt(numstr[1])]
            final+=" thousand "
        }
        if(parseInt(numstr[0])>1 && parseInt(numstr[0])<=9 ){
            final += tens[parseInt(numstr[0])-2] + " " +singles[ parseInt(numstr[1]) ] + " thousand "
        }
        
        if(numstr[2]!="0"){
            final += singles[parseInt(numstr[2])] + " hundred and "
        }
        if(numstr[3]=="1"){
            final += one_2Digs[parseInt(numstr[4])] 
        }
        if( parseInt(numstr[3])>="2" && parseInt(numstr[3])<="9"){
            final += tens[ parseInt(numstr[3])-2 ] + " " + singles[ parseInt(numstr[4]) ]
        }
        if(numstr[3]=="0"){
            final += singles[ parseInt(numstr[4]) ]
        }
    }

    if(digs == 4 ){
        final += singles[ parseInt(numstr[0]) ] + " thousand "
        if(numstr[1]!="0"){
            final += singles[parseInt(numstr[1])] + " hundred and "
        }
        if(numstr[2]=="1"){
            final += one_2Digs[parseInt(numstr[3])] 
        }
        if( parseInt(numstr[2])>="2" && parseInt(numstr[2])<="9"){
            final += tens[ parseInt(numstr[2])-2 ] + " " + singles[ parseInt(numstr[3]) ]
        }
        if(numstr[2]=="0"){
            final += singles[ parseInt(numstr[3]) ]
        }
    }
    
    if(digs == 3){
        final += singles[ parseInt(numstr[0]) ] + " hundred and " 
        if(numstr[1]=="1"){
            final += one_2Digs[parseInt(numstr[2])] 
        }
         if( parseInt(numstr[1])>="2" && parseInt(numstr[1])<="9"){
            final += tens[ parseInt(numstr[1])-2 ] + " " + singles[ parseInt(numstr[2]) ]
        }
        if(numstr[1]=="0"){
            final += singles[ parseInt(numstr[2]) ]
        }
    }

    if(digs == 2){
        if(numstr[0]=="1"){
            final += one_2Digs[parseInt(numstr[1])] 
        }
        if( parseInt(numstr[0])>="2" && parseInt(numstr[0])<="9"){
            final += tens[ parseInt(numstr[0])-2 ] + " " + singles[ parseInt(numstr[1]) ]
        }
        if(numstr[0]=="0"){
            final += singles[ parseInt(numstr[1]) ]
        }
    }
    if(digs == 1){
        if(numstr == "0"){
            final += "zero"
        }
        else{
            final += singles[parseInt(numstr)]
        }
    }
    return(final)
}

