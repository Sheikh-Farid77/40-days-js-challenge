const bus = true;

if (bus) {
  console.log("I am going to office");
} else {
  console.log(" I am not going to office");
}

// we use it when we have large if else
switch (bus) {
  case true:
    console.log("I am going to office");

    break;
  case false:
    console.log("I am not going to office");
    break;

  default:
    break;
}

const city = "Dhaka";

switch (city) {
  case "Rajshahi":
  case "Natore":
  case "Pabna":
  case "Dhaka":
    console.log("Inside in Bangladesh");
    break;
    default:
        console.log('It is not in Bangladesh')

}
