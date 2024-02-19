const spinnerText = "\r|  \r/  \r-  \r-  \r\\  \r|  \r/  \r-  \r\\  \r|   \n";
const textArr = spinnerText.split('  ');

for (let i = 0; i < textArr.length; i++) {
  setTimeout(() => {
    process.stdout.write(`${textArr[i]}  `);
  }, i * 200);
}


