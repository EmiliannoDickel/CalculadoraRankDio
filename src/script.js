
let nomeplayer = "EmiliannoDkl"

function calcularsaldo(vitoria, derrota) {
   let saldoplayer = (vitoria - derrota)
   let nivelplayer

if (vitoria < 10) {
    nivelplayer = "Ferro";
} else if (vitoria >= 11 && vitoria <=20) { 
    nivelplayer = "Bronze";
} else if (vitoria >= 21 && vitoria <=30) { 
    nivelplayer = "Prata";
} else if (vitoria >= 31 && vitoria <=50) { 
    nivelplayer = "Ouro";
} else if (vitoria >= 51 && vitoria <=80) { 
    nivelplayer = "Diamante";
} else if (vitoria >= 81 && vitoria <=100) { 
    nivelplayer = "Lendário";
} else {
    nivelplayer = "Imortal";
}

   console.log("O Player de nick " + nomeplayer + " tem saldo de " + saldoplayer + " e está no nível " + nivelplayer);
}
calcularsaldo(70, 20)
