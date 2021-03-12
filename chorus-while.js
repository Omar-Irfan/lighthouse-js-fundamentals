const chorus = "Let's dance!";
let repeat = 0;
while (repeat < 12) {
  if (repeat === 3 || repeat === 6 ||repeat === 9 ) {
    console.log("Yea Yea Yea");
  }
  console.log(chorus);
  repeat++;
}
console.log("Until the sun comes up!");