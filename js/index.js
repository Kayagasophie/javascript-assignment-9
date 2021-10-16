let container = document.querySelector('div.container');
// console.log(container.childern);

//first div
let cake = document.createElement('div');
cake.className = 'choclate';
// cake.style.backgroundColor="#FF00E4";
// cake.style.border="3px solid black";
// cake.style.borderRadius="12px";

let image = document.createElement('img');
image.setAttribute("src", "../img/cake1.jpg");
// image.setAttribute("width", "304");
// image.setAttribute("height", "300");
// image.setAttribute("alt", "cake");


let heading = document.createElement('h3');
heading.textContent = "choclate Cake.";
// heading.style.fontSize="50px";
// heading.style.fontFamily="Verdana";

let para = document.createElement('p');
para.textContent = "This delicious, festive rocky road is packed full of cheeky, sweet ingredients making it a little bit naughty and a whole lot of nice! <br> It’s hard to go past as a homemade Christmas gift for chocolate-loving friends and teachers..";
// paragraph.style.fontSize="40px";
// paragraph.style.fontStyle="none";

let Btn = document.createElement('button');
Btn.className = "btn btn-block";
Btn.textContent = "Read More...";
Btn.style.alignContent ="center";
Btn.style.outline ="none";
Btn.style.backgroundColor ="Red";
Btn.style.color ="white";
Btn.style.borderRadius="10px";

cake.appendChild(image);
cake.appendChild(heading);
cake.appendChild(para);
cake.appendChild(Btn);

container.appendChild(cake);




//second div
let cake2 = document.createElement('div');
cake2.className = 'cup';
// cake2.style.backgroundColor="#FF00E4";
// cake2.style.border="3px solid black";
// cake2.style.borderRadius="12px";

let image2 = document.createElement('img');
image2.setAttribute("src", "../img/cake2.jpg");
// image.setAttribute("width", "304");
// image.setAttribute("height", "300");
// image.setAttribute("alt", "cake");


let heading = document.createElement('h3');
heading.textContent = "cup Cake.";
// heading.style.fontSize="50px";
// heading.style.fontFamily="Verdana";

let para = document.createElement('p');
para.textContent = "The cupcake mania is taking the world by storm! <br>As long as these cup-sized bundles of joy and sweetness exist, <br>there will always be love and admiration for them...";
// paragraph.style.fontSize="40px";
// paragraph.style.fontStyle="italic";

let Btn = document.createElement('button');
Btn.className = "btn btn-block";
Btn.textContent = "Read More...";
Btn.style.alignContent ="center";
Btn.style.outline ="none";
Btn.style.backgroundColor ="Red";
Btn.style.color ="white";
Btn.style.borderRadius="10px";

cake2.appendChild(image2);
cake2.appendChild(heading);
cake2.appendChild(para);
cake2.appendChild(Btn);

container.appendChild(cake2);








// var styles = {
//     "background-color": "rgba(0, 0, 0, 0.281)",
//     "margin":"30px",
//     "width":"250px",
//     "text-align":"center",
//     "color":"rgba(245, 222, 179, 0.998)",
//     "text-shadow":"10px 2px 8px rgb(3, 3, 3)",
//     "box-shadow":"0 4px 8px 0 rgba(0, 0, 0, 0.8)",
//     "border-radius": "20%"
// }

// var styles2 = {
//     "flex-wrap": "wrap",
//     "flex-basis": "content",
//     "justify-content": "center",
//     "margin-top": "100px",
// }

// var img = {
//     "width": "150px",
//     "padding-top": "10px",
//     "border-radius": "50%"

// }

// var obj = document.getElementById('container');
// Object.assign(obj.style, styles2);

// Object.assigncake.style, styles);
// Object.assign(cake2.style, styles);

// Object.assign(image.style, img)
// Object.assign(image2.style, img)

