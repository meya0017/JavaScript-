function recommendSchool() {
  const age = parseInt(document.getElementById("age").value);
  let message = "";

  if (age >= 3 && age <= 5) {
    message = "Your child should be in Nursery/Pre-Primary (PP1 - PP2).";
  } else if (age >= 6 && age <= 13) {
    message = "Your child should be in Primary School (Grade 1 - 6).";
  } else if (age >= 14 && age <= 17) {
    // Example use of logical operators (&& and ||)
    if ((age >= 14 && age <= 15) || age === 16) {
      message = "Your child should be in Junior Secondary (Grade 7 - 9).";
    } else if (age >= 17) {
      message = "Your child should be in Senior Secondary (Grade 10 - 12).";
    }
  } else if (age >= 18 && age <= 22) {
    message = "Your child should be in University/College.";
  } else if (age > 22 && age <= 30) {
    message = "Your child may pursue Postgraduate or Professional Training.";
  } else {
    resultText = "We only show upto 30years of education";
  }

  document.getElementById("result").innerText = message;
}
