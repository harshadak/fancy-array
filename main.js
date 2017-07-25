/*

Let's make it look fancy! Write a function that will make it print like:

0 -> James
1 -> Jill
2 -> Jane
3 -> Jack

*/

function fancyArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " -> " + arr[i]);
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"]);

/*

Let the user pass in the symbol that will print (ex: "->", "=>", "::", "-----")

*/

function fancyArray(arr, symbol) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i + " " + symbol + " " + arr[i]);
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"], "=>");


/*

Have an extra parameter reversed. If the user passes true, print the elements in reverse order

*/

function fancyArray(arr, symbol, reversed) {
    for (var i = 0; i < arr.length; i++) {
        if (reversed === "true") {
            console.log(arr.length + " " + symbol + " " + arr[i]);
        } else {
            console.log(i + " " + symbol + " " + arr[i]);
        }
    }
}
fancyArray(["James", "Jill", "Jane", "Jack"], "=>");
