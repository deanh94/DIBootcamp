                        // VARIABLE NOTES //
// Things to know about var, let, and const:
// 1. ONLY VAR HAS A GLOBAL SCOPE
    //As a reminder, the visibility and lifetime of a given variable is determined by its scope. As such, a variable is not visible/accessible outside the scope in which it is declared.
    //A variable has global scope if it is declared outside a function, block… scope. It can be accessed from anywhere in your program.

// 2. ALL variable names that are used in FUNCTIONS are ONLY acessible within the functions!!

// 3. ONLY CONST AND LET ARE BLOCK SCOPE
// The block scope is defined with curly braces ({}).
function listFruits () {
    if(true) {
        const fruit1 = "orange"; //it exists in block scope
        let fruit2 = "avocado"; //it exists in block scope
        var fruit3 = "banana"; // it exists in function scope
    }

    //console.log(fruit1);
    //console.log(fruit2);
    console.log(fruit3);
}

listFruits();
// As you can see in the code above, only fruit3 is accessed, because var does not have block scope. 
//Try uncommenting lines 8 and 9, and you will get a ReferenceError.

// ** ALWAYS CONSOLE.LOG() INSIDE OF THE CURLY BRACES ** //

// 4. Let And Var Can Be Reassigned, But Const Cannot.

// ** As a rule of thumb, always use const to declare your variables unless they are likely to change in the runtime of your program, in which case you can use let. 
// **You should avoid the var keyword as much as possible for variable declaration. **




