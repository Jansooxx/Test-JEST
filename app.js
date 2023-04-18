// app.js file content
// declaramos una funcion con el mismo nombre "formEuroToDollar"

const fromEuroToDollar = function(valueInEuro){
    // convertimos el valor a dolares
    let valueInDollar = valueInEuro * 1.2;
    // retornamos el valor
    return valueInDollar;
}

const fromDollarToYen = function(dollars) {

    let valueYen = dollars * 127.9;
    return valueYen;
  }

  const fromYenToPound = function(Yen) {

    let valuePound = Yen * 0.8;
    return valuePound;
  }




// this is my function that sums two numbers
const sum = (a,b) => {
    return a + b
}

// just a console log for ourselves.
console.log(sum(7,3))

// export the function to be used on other files 
// (similar to the keyword `export` when using webpack)
module.exports = { sum, fromEuroToDollar,fromDollarToYen,fromYenToPound  };