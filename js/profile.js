const images = [
  "profile1.png",
  "profile2.png",
  "profile3.png",
  "profile4.png",
  "profile5.png",
  "profile6.png",
  "profile7.png",
  "profile8.png"
];

const profileForm = document.querySelector("#mainpage_profile");

const randomProfile = images[Math.floor(Math.random()* images.length)];

const profileImage = document.createElement("img");

profileImage.src = `img/${randomProfile}`;

profileForm.appendChild(profileImage);