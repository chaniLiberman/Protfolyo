
let details = {
    name: "Chani Liberman",
    email: "chaniliber2@gmail.com",
    phone: "0548441749",
    profession: "Fullstack Web Developer",
    age: "22",
    city: "Tzefat",
};

document.getElementById("information1").innerHTML += `
   <li><i class="fa-solid fa-chevron-right"></i> Full Name: ${details.name} </li>
   <li><i class="fa-solid fa-chevron-right"></i> Email: ${details.email} </li>
   <li><i class="fa-solid fa-chevron-right"></i> Phone: ${details.phone} </li>
`;

document.getElementById("information2").innerHTML += `
   <li><i class="fa-solid fa-chevron-right"></i> Profession: ${details.profession} </li>
   <li><i class="fa-solid fa-chevron-right"></i> Age: ${details.age} </li>
   <li><i class="fa-solid fa-chevron-right"></i> City: ${details.city} </li>
  
`;