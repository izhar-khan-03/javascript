// Immediately Invoked Function Expressions (IIFE)


(function chai(){
    // named IIFE
    console.log("DB connected")
})();      //// context rokne k liye ";(semicolon)" use karna hota hai IIFE me

// Syntax for IIFE 
// (function declaration) (function exe)

// GLobal scope k pollution se problem hoti hai kai-baar to global scope k variables, declarations k pollution ko hatane k liye humne iife ka use kiya

( () => {
    console.log("DB connected two.");
} )();

( (name) => {
    // unnamed IIFE
    console.log(`DB connected two ${name}.`);
} )('izhar')