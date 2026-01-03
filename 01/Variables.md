# Variables
Variables are symbolic nacmes for values in your application. The names of variables are called identifiers.

## Identifiers
Identifiers usually start with a letter, undersocre (_), or dollar sign($). Subsequent characters can also be digits (0-9). JavaScript is case sensitive, letters inlcude characters A through Z (uppercase) as well as a through z (lowercase).

Examples of variable names/identifiers: Your_name, _class, $credit, temp99.

### JavaScript has three kinds of varibale declarations.
- `var`
- `let`
- `const`

## Declaration and Initialization
In a statement like `let name = "John Doe"`, the `let name` part is **declaration**, and the `= "John Doe"` part is called an **initializer**.
The declaration allows the variable to be accessed later in the code without throwing a **ReferenceError** *(A reference error is when your program tries to access something that does not exist or has not been defined.)*,while the initializer assigns a value to the variable.

In `var` and `let` declarations, the initializer is optional. If a a variable is declared without an initializer, then it is assigned the value undefined.
For `const` declaration, the initializer is always required.

## Variable Scope
Scope defines where a variable can be accessed in a program.
A variable may belong to one of the following scopes:
- Global Scope: For variables declared outside all function, and accessible everywhere in the program.
- Module Scope: For variables that are accessible only within a single file (module).
- Function Scope: For variables declared inside a function, and only accessible within that function.

In addition, variables declared with `let` or `const` can belong to an additional scope:
- Block Scope: For variables declared inside a block `{...}`, scope is limited to that block

## Variable Hoisting
`var` declared variables are hoisted, meaning the program acts as if variable declarations are moved to the top of their scope before the code runs.

**This is beacause JavaScript first looks for varibale declarations, and only after that does it run the code line by line.**

**The declaration is "hoisted" to the top, but the value assignment is not.**


## More about Constants
The `const` declaration is only used to create read-only named constant variables. Constant variables cannot change value through assignment or be re-declared while the script/program is running.

A constant cannot be declared with the same name as a function or variable in the same scope.

**Important:** `const` only prevents re-assignments, but doesn't prevent mutations. In simple terms, `const` locks the variable name but does not lock the object or data itself meaning changes to the data are allowed.

> `const` protects the reference, not the value.
