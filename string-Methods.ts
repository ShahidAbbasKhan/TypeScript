
 //string 
 let firstname:string ="shahid";
 let lastname:string ="khan";
 let message:string=`I ${firstname} ${lastname} working on Blockchain`;
 console.log(message);

 //length of the string
 console.log(`Length of message is =>`,message.length);

 //string methods
 //-- charAt() Method --//
 console.log("charAt() Method on firstname =>", firstname.charAt(3));
 console.log("charAt() Method on firstname =>", firstname.charAt(5));

 //-- concat() Method --//
console.log("concat() Method =>",firstname.concat(lastname));

//-- indexOf() Method --//
console.log(firstname.indexOf("s")); // if not found will return -1
console.log(firstname.indexOf("h"))

//-- toUpperCase() Method --//
console.log(firstname.toUpperCase() +" " +lastname.toUpperCase());

//-- toLowerCase() Method --//
console.log(firstname.toLowerCase() +" " +lastname.toLowerCase());

//-- trim() Method --//
const city: string ="     Islmabad";
console.log(city.trim());

//-- replace() Method --//
const name1:string= "Aslam Alam";
console.log("His Name is  ", name1.replace("A","I"));
console.log("His Name is   ", name1.replace("k","I")); // if value in string not found will not change the actual string


//-- split() Method --//
const cities:string ="RWP KHI LHR ISB";
console.log(cities.split(" "));
console.log(cities.split(" ",2));
const cities1:string ="RWP@KHI@LHR@ISB";
console.log(cities.split("@"));

//-- substring() Method --//

let name3:string ="Khan";
console.log(name3.substring(1,3)); // last  index will not be included 1 will be minus



 
