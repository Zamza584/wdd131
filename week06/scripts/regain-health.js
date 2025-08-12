const currentYear = document.querySelector("#currentYear");
const lastModified = document.querySelector("#lastModified");

const today = new Date();

currentYear.innerHTML = `${today.getFullYear()}`;
lastModified.innerHTML = `${document.lastModified}`;

const recipes = [
  {
    name: "Singapore Noodles",
    description:
      "A speedy, vegan stir-fry with aromatic spice and plenty of veg. Dr Rupy and the BOSH! team make a flavour-packed dinner that costs under £1 per portion.",
  },
];

