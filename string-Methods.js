//string 
var firstname = "shahid";
var lastname = "khan";
var message = "I ".concat(firstname, " ").concat(lastname, " working on Blockchain");
console.log(message);
//length of the string
console.log("Length of message is =>", message.length);
//string methods
//-- charAt() Method --//
console.log("charAt() Method on firstname =>", firstname.charAt(3));
console.log("charAt() Method on firstname =>", firstname.charAt(5));
//-- concat() Method --//
console.log("concat() Method =>", firstname.concat(lastname));
//-- indexOf() Method --//
console.log(firstname.indexOf("s")); // if not found will return -1
console.log(firstname.indexOf("h"));
//-- toUpperCase() Method --//
console.log(firstname.toUpperCase() + " " + lastname.toUpperCase());
//-- toLowerCase() Method --//
console.log(firstname.toLowerCase() + " " + lastname.toLowerCase());
//-- trim() Method --//
var city = "     Islmabad";
console.log(city.trim());
//-- replace() Method --//
var name1 = "Aslam Alam";
console.log("His Name is  ", name1.replace("A", "I"));
console.log("His Name is   ", name1.replace("k", "I")); // if value in string not found will not change the actual string
//-- split() Method --//
var cities = "RWP KHI LHR ISB";
console.log(cities.split(" "));
console.log(cities.split(" ", 2));
var cities1 = "RWP@KHI@LHR@ISB";
console.log(cities.split("@"));
//-- substring() Method --//
var name3 = "Khan";
console.log(name3.substring(1, 3));
