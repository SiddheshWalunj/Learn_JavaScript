// Equality Operators

// == (Loose Equality)

5 == "5"        // true
null == undefined // true

// === (Strict Equality) 

// Compares value + type
// No type conversion

5 === "5"  // false
5 === 5    // true

// Inequality Operators

5 != "5"  // false
5 !== "5" // true

// Relational Operators

10 > 5     // true
10 < 5     // false
10 >= 10  // true
5 <= 10   // true


// String Comparison (Lexicographical)

"apple" > "banana"  // false
"A" < "a"           // true

// Comparison with Type Conversion (Tricky)

"5" > 2        // true
"10" > "2"    // false (string comparison)


null == undefined   // true
null === undefined // false

null > 0    // false
null == 0   // false
null >= 0   // true ❗

NaN == NaN  // false


/*
-- -- Best Practices -- -- 

✔ Always use === and !==
✔ Avoid comparing different data types
✔ Never compare with NaN using ==
✔ Be careful with null comparisons
*/