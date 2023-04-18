test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5);

    
    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2;
        
     // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
    }) 

    test("one dollar should be 127.9 Yen", function() {
        
        const { fromDollarToYen } = require('./app.js')

        const yenes = fromDollarToYen(2);
    
        const expected =  2 * 127.9;

        
        // this is the comparison for the unit test
         expect(yenes).toBe(expected);
    });
    
    
    test("one Yen should be 0,8 Pound ", function() {
        
        const { fromYenToPound } = require('./app.js')

        const pound = fromYenToPound(2);
    
        const expected =  2 * 0.8 ;
        
        // this is the comparison for the unit test
         expect(pound).toBe(expected); 
    })
    
    
    
    
    
    