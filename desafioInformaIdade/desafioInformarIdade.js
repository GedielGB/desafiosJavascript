let totalDeDias = parseInt(prompt());

let qtdAnos, qtdMeses;

qtdAnos = parseInt( totalDeDias / 365);

qtdMeses= parseInt((totalDeDias - (qtdAnos * 365)) / 30) ;

totalDeDias= totalDeDias - (qtdAnos * 365) - (qtdMeses * 30)             ;

let resultado = (qtdAnos + " ano(s) " + '\n' + 
qtdMeses +" mes(es)" + '\n' +
totalDeDias + " dia(s)");

alert(resultado);