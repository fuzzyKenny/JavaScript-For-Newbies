# Variables
Variables are symbolic nacmes for values in your application. The names of variables are called identifiers.

## Identifiers
Identifiers usually start with a letter, undersocre (_), or dollar sign($). Subsequent characters can also be digits (0-9). JavaScript is case sensitive, letters inlcude characters A through Z (uppercase) as well as a through z (lowercase).

Examples of variable names/identifiers: Your_name, _class, $credit, temp99.

### JavaScript has three kinds of varibale declarations.
- var
- let
- const

## Declaration and Initialization
In a statement like `nano let name = "John Doe"`, the `nano let name` part is declaration, and the `nano = "John Doe"` part is called an initializer.
The declaration allows the variable to be accessed later in the code without throwing a **ReferenceError** *(A reference error is when your program tries to access something that does not exist or has not been defined.)*,while the initializer assigns a value to the variable.

In `var` and `let` declarations, the initializer is optional. If a a variable is declared without an initializer, then it is assigned the value undefined.
