setTimeout(5000);

let code = prompt("Enter your plain text code: ");

let change = prompt("What is the step: ")

document.getElementById("plain_text").innerHTML = `Code: ${code}`;

document.getElementById("step").innerHTML = `Step: ${change}`;

let cipher = [
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
  'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
];

function encode(code, change) {
  change = Number(change);
  for (var letter of code) {
    // console.log(letter, code)
    let idx = (character) => character === letter;
    let index = cipher.findIndex(idx);
    // console.log(`idx= ${index}`)
    // console.log(`idx + chg = ${index + change}`)
    code = code.replace(letter, cipher[(index + change) % cipher.length]);
  }

  return code;
}

function decode(code, change) {
  change = Number(change);
  for (var letter of code) {
    // console.log(letter, code)
    let idx = (character) => character === letter;
    let index = cipher.findIndex(idx);
    // console.log(`idx= ${index}`)
    // console.log(`idx + chg = ${index + change}`)
    code = code.replace(letter, cipher[(index - change) % cipher.length]);
    console.log(code)
  }

  return code;
}


encoded_code = encode(code, change);
document.getElementById("encoded_text").innerHTML = encoded_code;
decoded_code = decode(encoded_code, change);
console.log(decoded_code)
document.getElementById("decoded_text").innerHTML = 'test string';
