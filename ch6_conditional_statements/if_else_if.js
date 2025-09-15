let age = 16;

if (age > 0 && age < 5) {
  console.log("Toddler");
} else if (age >= 5 && age < 13) {
  console.log("Child");
} else if (age >= 13 && age < 18) {
  console.log("Teenager");
} else if (age >= 18 && age < 60) {
  console.log("Adult");
} else if (age >= 60) {
  console.log("Senior");
} else {
  console.log("Invalid age");
}
