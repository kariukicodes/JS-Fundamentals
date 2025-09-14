const languages = ["C is fun", "Python is cool", "JavaScript is amazing"];

let output = "";              // will store all lines
for (let i = 0; i < languages.length; i++) {
    output += languages[i] + "\n";
}

console.log(output.trim());   // trim removes the last extra newline

