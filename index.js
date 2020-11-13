function rot13(str){
    let decode="";
    let comienzo="NOPQRSTUVWXYZ";
    let final="ABCDEFGHIJKLM";
    str.split("").forEach(
        function (letra,index){
            let letracomienzo=comienzo.indexOf(letra);
            let letrafinal=final.indexOf(letra);
            if (letracomienzo>=0) {
                decode+=final[letracomienzo];
                
            } else if(letrafinal>=0){
                decode+=comienzo[letrafinal];

                
            }else{
                decode+=letra;
            }

        }
    );

    return decode;
}
alert(rot13("SERR PBQR PNZC"));