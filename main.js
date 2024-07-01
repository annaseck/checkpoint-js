// Inverser une chaine de caractère
function reverseStr(str){
    return str.split('').reverse().join('');
}

console.log(reverseStr("Hello world"));

// Compter les caractères
function nbCaracter(chaine){
    return chaine.length;
}

console.log(nbCaracter("Bonjour"));

// Mettre les mots en majuscule
function toUppercase(mots){
    mots = mots.split(" ");
   for (let i=0 ; i < mots.length ; i++){
    mots[i] = mots[i].charAt(0).toUpperCase() + mots[i].slice(1)
   }
    return mots.join(" ");

}

console.log(toUppercase("bonjour la famille"));

// Rechercher le maximum et le minimum
function maxAndMin(arr){
    let min = arr[0]
    let max = arr[0]
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i] < min){
            min = arr[i];
        }
    }
    for (let i=0 ; i<arr.length ; i++){
        if (arr[i] > max){
            max = arr[i];
        }
    } 
    return ("Minimum = " + min + " et " +"Maximum = "+ max);  
}

console.log(maxAndMin([12 , 28 , 76 , 5 , 43 , 20 , 8]));

// Somme d'un tableau
function Somme(tableau){
    let som = 0
    for (let i=0 ; i<tableau.length ; i++){
        som = som + tableau[i];
    }
    return som;
}

console.log(Somme([31 , 46 , 65 , 9 , 71]));

// Filtrer le tableau
function FiltrerTab(tab){
    let tab2= [];
    for (let i=0 ; i<tab.length ; i++){
        if ((tab[i] % 2) == 0){
            tab2.push(tab[i])
        }
    }
    return tab2;
}

console.log(FiltrerTab([98 ,75 , 46 ,82 ,14 , 49]));

// Factorielle
function factorielle(n){
    let f = 1
    for(let i=1 ; i<=n ; i++){
        f = f * i
    }
    return f ;
}

console.log(factorielle(4));

// Vérification des nombres premiers
function nbPremier(nombre){
    let check = true 
    let m = nombre/2
    for (let i=0 ; i<=m ; i++){
        if(m % i === 0){
            check=false
        }
    }
    return check;
}

console.log(nbPremier(7));

// Sequence de Fibonacci
function fibonacci(m){
    var fib = [] ;
    fib[0] = 0
    fib[1] = 1
    for(let i=2 ; i<=m ; i++){
        fib[i] = fib[i-2] + fib[i-1]
    }
    return fib;
}

console.log(fibonacci(5));