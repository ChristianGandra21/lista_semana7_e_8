//ex 01
/* let p = 10;
let q = 3;
let r = 6;

let resultado = (p % q === 1) && (r * 2 > p) || (q + r < p);
console.log(resultado);

const valores = [3, 6, 9, 12, 15];
let produto = 1;

for (let j = 0; j < valores.length; j++) {
  produto *= valores[j];
}

console.log("O produto dos valores é:", produto); */

//ex 02

/* function analisarCredito1() {
    var compras = [2500, 1200, 800, 100];
    var totalCompras = compras[0];
    var limite = 5000;
    var status = 'aprovado';
    var saldoDisponivel = 0;
    var i = 1;

    do {
        totalCompras += compras[i];
        i++;
    } while (limite >= totalCompras && i < compras.length);

    saldoDisponivel = limite - totalCompras;

    if (saldoDisponivel < 0) {
        status = 'negado';
    }
    console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
} */

  /*  function analisarCredito2() {
        var compras = [2500, 1200, 800, 100];
        var totalCompras = compras[0];
        var limite = 5000;
        var status = 'aprovado';
        var saldoDisponivel = 0;
        var i = 1;
    
        while (limite >= totalCompras && i < compras.length) {
            totalCompras += compras[i];
            i++;
        }
    
        saldoDisponivel = limite - totalCompras;
    
        if (saldoDisponivel < 0) {
            status = 'negado';
        }
        console.log(`Seu crédito foi ${status}. Saldo disponível: ${saldoDisponivel}.`);
    } */