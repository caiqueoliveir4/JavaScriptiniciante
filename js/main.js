function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
}

function redirecionar(){
    window.open("https://www.linkedin.com/feed/");
    
}

function trocar(){
    document.getElementById("mousemove").innerHTML = "obrigado por passar o mouse";
}

/*
function clicou(){
    alert("Você acionou a função clicar");
}
*/

/* função com variavel local
var validar = 0;

function validarIdade(idade){
     var validar;
    idade <=18? validar = true: validar = false;
    return validar;
    
}
var idade = prompt("qual sua idade?");
validarIdade(idade);
console.log(validar);
*/


/* função com variavel global
var validar = 0;

function validarIdade(idade){
    idade <=18? validar = true: validar = false;
    return validar;
    
}
var idade = prompt("qual sua idade?");
validarIdade(idade);
console.log(validar);
*/

/* utilizando função
function soma(n1, n2){
    return n1 + n2;    
}
alert(soma(5, 6));
 */   
/* laço for
var count;
for(count=0; count <=5;count++){
    alert(count);
}
*/

/* laço while
var count = 0;
while (count <=5){
    console.log(count);
    count = count + 1;
}
*/
// condição 
//var idade = prompt(" Qual a sua idade?: "); 
//idade >=18?alert("Maior de idade"):alert("Menor de idade");

/*if(idade >= 18){
    alert("Maior de idade");
}else{
    alert("Mernor de idade");
}
*/


//dicionário
/*var frutas = [{nome: "Maçã", cor: "vermelha"}, {nome: "uva", cor: "roxa"}]
console.log(frutas);
alert(frutas[1].nome);
*/
/*
var fruta = {nome: "Maçã", cor: "vermelha"}
console.log(fruta.nome);
alert(fruta.cor);
*/

//arrays e replace troca de nomes
/*
var nome = "Caique de Oliveira ";
var idade = 27 ;
var localDeNascimento = "Bahia ";
var frase = "Então quem nasce na bahia é baiano";
alert(nome + "tem " + idade + " e nasceu no estado da " + localDeNascimento + frase);

// ver no console os resutados
console.log(nome);
console.log(localDeNascimento);
console.log(idade);
console.log(frase.replace(" baiano", " gaucho"));
alert(frase.replace("baiano", "gaucho"))
*/
// declarando uma lista
//var lista = ["Pêra", "Úva", "Maçã"];

//lista.push("Goiaba")
//lista.pop("Maçã");

//console.log(lista.length);
//console.log(lista.reverse());   
//console.log(lista.toString());
//console.log(lista.join(" - "));
