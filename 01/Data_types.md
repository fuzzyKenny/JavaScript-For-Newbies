# Data Types
The latest ECMAScript standard defines eight data types:

- Seven primitive data types:
  1. *Boolean*: `true` & `false`
  2. *null*: A specail keyword denoting a null value. (Not the same as Null or NULL, because JavaScript is case-sensitive.)
  3. *undefined*: A top-level property whose value is not defined.
  4. *Number*: An integer or floating point number.
  5. *BigInst*: An integer with arbitrary percision. For example: `9007199254740992n`
  6. *String*: A sequence of characters that represent a text value.
  7. *Symbol*: A data type whose instances are unqiue and immutable.

And a non-primitive data type: *Object*

You can use the `typeof` operator to determine the data type of a value.

**Important**: `typeof null` returns `object` because of a historical bug in JavaScript, not because null is actually an object.


## Data type conversion
JavaScript is a dynamically typed language. This means that data types of a variable do not need to be specified with declaration. Data types are also automatically converted as-needed during script execution.
