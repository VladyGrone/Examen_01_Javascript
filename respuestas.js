// ---------------------Pregunta 1-------------------->
/*const exa1= Number(prompt("Ingrese nota de 1er examen"))
const exa2= Number(prompt("Ingrese nota de 2do examen"))
const exa3= Number(prompt("Ingrese nota de 3er examen"))
const exa4= Number(prompt("Ingrese nota de 4to examen"))
 
let resp= (exa1+exa2+exa3+exa4)/4
 console.log("El promedio es: "resp)*/
// --------------------------------------------------------

// ---------------------Pregunta 2-------------------->
/* const base= Number(prompt("Ingrese base del rectangulo"))
const altura= Number(prompt("Ingrese altura del rectangulo"))

let resp= base*altura
console.log("El area es: ",resp)*/
// --------------------------------------------------------

// ---------------------Pregunta 3-------------------->
/*const base= Number(prompt("Ingrese base del triangulo"))
const altura= Number(prompt("Ingrese altura del triangulo"))

let resp= (base*altura)/2
console.log("El area es: ",resp)*/
// --------------------------------------------------------

// ---------------------Pregunta 4-------------------->
/*const radio= Number(prompt("Ingrese el radio del circulo"))

let resp= (3.14*radio*radio)
console.log("El area es: ",resp)*/
// --------------------------------------------------------

// ---------------------Pregunta 5-------------------->

/*const entrada=[2,6,1,8]

const ind0= entrada[0]
const ind1= entrada[1]
const ind2= entrada[2]
const ind3= entrada[3]

let resp= (ind0+ind1+ind2+ind3)/4
console.log("El promedio es: ",resp)*/
// --------------------------------------------------------

// ---------------------Pregunta 6-------------------->

/*const entrada=[1,2,5,8,9,12,2,3]

let suma=0

if ((entrada[0]%2)==0) { suma=suma + entrada[0] }
if ((entrada[1]%2)==0) { suma=suma + entrada[1] }
if ((entrada[2]%2)==0) { suma=suma + entrada[2] }
if ((entrada[3]%2)==0) { suma=suma + entrada[3] }
if ((entrada[4]%2)==0) { suma=suma + entrada[4] }
if ((entrada[5]%2)==0) { suma=suma + entrada[5] }
if ((entrada[6]%2)==0) { suma=suma + entrada[6] }
if ((entrada[7]%2)==0) { suma=suma + entrada[7] }

console.log("La suma es: ",suma)*/
// --------------------------------------------------------

// ---------------------Pregunta 7-------------------->

/*const library=[
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        Status: true 
    },
    { 
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        Status: true 
    },
    { 
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        Status: false
    }
]

if (library[0].Status){
    console.log("Autor: ",library[0].author)
    console.log("Titulo: ",library[0].title)
    console.log("--------------------------")
}
if (library[1].Status){
    console.log("Autor: ",library[1].author)
    console.log("Titulo: ",library[1].title)
    console.log("--------------------------")
}
if (library[2].Status){
    console.log("Autor: ",library[2].author)
    console.log("Titulo: ",library[2].title)
    console.log("--------------------------")
}*/
// --------------------------------------------------------

// ---------------------Pregunta 8-------------------->
/*const arreglo1=[2,5,2,3,7,2]
const arreglo2=[1,5,3,3]
const arreglonuevo=[]

let elementos1=arreglo1.length
let elementos2=arreglo2.length

let sum_elemento
sum_elemento=elementos1+elementos2

for(let i=0;i<elementos1;i++)
{
    arreglonuevo[i]=arreglo1[i]
}

for(let i=0;i<elementos2;i++)
{
    arreglonuevo[i+elementos1]=arreglo2[i]
}

console.log("La cantidad de elementos: ",arreglonuevo)

if (arreglonuevo.length>9)
{ console.log(true) }
else
{
    console.log(false)
}*/
// --------------------------------------------------------

// ---------------------Pregunta 9-------------------->
/*const arreglo1=[2,5,2]
const arreglo2=[1,5,3]
const arreglonuevo=[]

let elementos1=arreglo1.length
let elementos2=arreglo2.length

let sum_elemento
sum_elemento=elementos1+elementos2

for(let i=0;i<elementos1;i++)
{
    arreglonuevo[i]=arreglo1[i]*2
}

for(let i=0;i<elementos2;i++)
{
    arreglonuevo[i+elementos1]=arreglo2[i]*2
}

console.log("Resultado de elementos: ",arreglonuevo)*/
// --------------------------------------------------------

// ---------------------Pregunta 10-------------------->
/*const calif=Number(prompt("Ingrese calificacion"))

if(calif>0 && calif<11)
{ 
    console.log("Correcto")
    if(calif<6)
    {console.log("Reprobado")}
    else if(calif>=6 && calif<=8)
    {console.log("Regular")}
    else if(calif==9)
    {console.log("Bien")}
    else
    {console.log("Excelente")}
}
else
{ console.log("Error")}*/
// --------------------------------------------------------

// ---------------------Pregunta 11-------------------->
/*const num1=Number(prompt("Ingrese 1er numero"))
const num2=Number(prompt("Ingrese 2do numero"))

for(let i=1;i<=50;i++)
{
    if((num1==i) || (num2==i))
    {
        console.log("Lotería")
    }
    else
    {
        console.log(i)
    }
}*/
// --------------------------------------------------------

// ---------------------Pregunta 12-------------------->
/*let resp

for(let i=1;i<=100;i++)
{
    resp=i
    if(i%3==0) {resp="Fizz"}
    if(i%5==0) {resp="Buzz"}
    if((i%3==0) && (i%5==0)) {resp="FizzBuzz"}
    console.log(resp)
}*/
// --------------------------------------------------------

// ---------------------Pregunta 13-------------------->
/*let tiempo=Number(prompt("Ingrese años de antiguedad:"))
switch (tiempo)
{
    case 1:
        console.log("Bono: $100")
        break
        case 2:
        console.log("Bono: $200")
        break
        case 3:
        console.log("Bono: $300")
        break
        case 4:
        console.log("Bono: $400")
        break
        case 5:
        console.log("Bono: $500")
        break
        default:
        console.log("Bono: $1000")
}*/
// --------------------------------------------------------

// ---------------------Pregunta 14-------------------->
/*let salfinal=1500

for(let i=1;i<=6;i++)
{
    salfinal=salfinal + (salfinal*0.10)
    console.log("Salario anual - Año ", i," total: ",salfinal*12)

}
console.log("Salario final a 6 años: ",salfinal)*/
// --------------------------------------------------------

// ---------------------Pregunta 15-------------------->
/*let palabras=["manzana", "banana", "cereza", "uva", "fresa"]
let nletras=0
let dato

for(let i=0;i<palabras.length;i++)
{
    if (nletras<palabras[i].length)
    {
        nletras=palabras[i].length
        dato=palabras[i]
    }
}
console.log("Cantidad de letras: ",nletras)
console.log("Palabra: ",dato)*/
// --------------------------------------------------------

// ---------------------Pregunta 16-------------------->
/*let cartas = [1,2,3,4,2,3,5,6,7,8,1,9,10,10]
let cont


for(let i=1;i<=10;i++)
{
    cont=0
    for(let j=0;j<cartas.length;j++)
    {
        if(i==cartas[j])
        {
            cont=cont+1
        }
    }
    if (cont==1)
    {
        console.log("Carta Unica: ",i)
    }

}*/
// --------------------------------------------------------


// ---------------------Pregunta 17-------------------->
/*let topp =prompt("Ingrese Topping") ;
let extra=0;
let total=50;
topp=topp.toUpperCase();

switch (topp) {
    case "OREO":
        extra=10;
        break;
    case "KITKAT":
        extra=15;
        break;
    case "BROWNIE":
        extra=20;
        break;
    default:
        console.log("No tenemos este toppping, lo sentimos")
        break;
}
console.log("Precio del helado: ", total + extra)*/
// --------------------------------------------------------

// ---------------------Pregunta 18-------------------->
/*let nivel =prompt("Ingrese Nivel") ;
let mnivel=0;
let meses=0;

nivel=nivel.toUpperCase();
switch (nivel) {
    case "COURSE":
        mnivel=4999;
        meses=2;
        break;
    case "CARRERA":
        mnivel=3999;
        meses=6
        break;
    case "MASTER":
        mnivel=2999;
        meses=12;
        break;
    default:
        console.log("No existe el nivel")
        break;
}
let dscto=0;

if(mnivel!=0)
{
    let beca=prompt("Ingrese Beca") ;

    beca=beca.toUpperCase();

    switch (beca) {
    case "FACEBOOK":
        dscto=0.2;
        break;
    case "GOOGLE":
        dscto=0.15;
        break;
    case "JESUA":
        dscto=0.5;
        break;
    default:
        console.log("No existe el tipo de Beca")
        break;
    }
}
let montmensual=mnivel-(mnivel*dscto)
let monttotal=montmensual*meses

console.log("Monto a pagar mensual:",montmensual)
console.log("Monto a pagar por" , meses,"meses:",monttotal)*/
// --------------------------------------------------------


// ---------------------Pregunta 19-------------------->
/*let numeros=[]
let num=Number(prompt("Ingrese numero"))
cont=0

while (num!=0)
{
    numeros[cont]=num
    cont=cont+1
    num=Number(prompt("Ingrese numero"))
}

for(let i=0;i<cont;i++)
{
    console.log(numeros[i])
}*/
// --------------------------------------------------------


// ---------------------Pregunta 20-------------------->
let vehic=prompt("Ingrese tipo de vehiculo")
let preckm=0
vehic=vehic.toUpperCase()


switch (vehic) {
    case "COCHE":
        preckm=0.2;
        break;
    case "MOTO":
        preckm=0.1;
        break;
    case "AUTOBUS":
        preckm=0.5;
        break;
    default:
        console.log("No existe el tipo de vehiculo")
        break;
}
let km
let extra=0
let total=0

if(preckm!=0){
    km=Number(prompt("Ingrese kilometros recorridos"))
    if (km<=100)
    {
        extra=5
    }
    else
    {
        extra=10
    }
    total=(preckm*km)+extra

    console.log("Total a pagar", total)
}
// --------------------------------------------------------