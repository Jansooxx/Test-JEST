test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar();

    
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = dollars * 1.2;
        
     // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
    }) 

    test("one dollar should be 127.9 Yen", function() {
        
        const { fromDollarToYen } = require('./app.js')

        const yenes = fromDollarToYen();
    
        const expected =  yenes * 127.9;

        
        // this is the comparison for the unit test
         expect(yenes).toBe(expected);
    });
    
    
    test("one Yen should be 0,8 Pound ", function() {
        
        const { fromYenToPound } = require('./app.js')

        const pound = fromYenToPound(2);
    //Valor directo esperado 
        const expected =  2 * 0.8 ;
        
        // this is the comparison for the unit test
         expect(pound).toBe(expected); 
    })
    
    
    
    
    
    