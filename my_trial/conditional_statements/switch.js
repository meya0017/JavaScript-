let Age = 15;

switch (true) {
  case Age >= 18:
    console.log("Is An Adult");
    break;

  case Age <= 3:
    console.log("Is A Toddleer");
    break;

  case Age >= 13 && Age <= 17:
    console.log("Is a Teenager");
    break;

  default:
    console.log("Is Not An Adult");
    break;
}
