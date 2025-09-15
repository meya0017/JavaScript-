// let age = 16;

// switch (true) {
//   case age > 0 && age < 5:
//     console.log("Toddler");
//     break;
//   case age >= 5 && age < 13:
//     console.log("Child");
//     break;
//   case age >= 13 && age < 18:
//     console.log("Teenager");
//     break;
//   case age >= 18 && age < 60:
//     console.log("Adult");
//     break;
//   case age >= 60:
//     console.log("Senior");
//     break;
//   default:
//     console.log("Invalid age");
// }

let age = 16;

switch (age) {
  case 1:
  case 2:
  case 3:
  case 4:
    console.log("Toddler");
    break;
  case 5:
  case 6:
  case 7:
  case 8:
  case 9:
  case 10:
  case 11:
  case 12:
    console.log("Child");
    break;
  case 13:
  case 14:
  case 15:
  case 16:
  case 17:
    console.log("Teenager");
    break;
  case 18:
  case 19:
  case 20: // …you could keep adding numbers
    console.log("Adult");
    break;
  default:
    console.log("Senior or Invalid age");
}
