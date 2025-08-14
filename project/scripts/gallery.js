const galleryContainer = document.querySelector(".gallery-container");

const recipes = [
  {
    name: "Sunday Roast",
    imageUrl: "images/gallery-images/sunday-roast.webp",
  },
  {
    name: "Squash Soup",
    imageUrl: "images/gallery-images/squash-soup.webp",
  },

  {
    name: "Shrimp Pasta",
    imageUrl: "images/gallery-images/shrimp-pasta.webp",
  },

  {
    name: "Rice with Zucchini",
    imageUrl: "images/gallery-images/rice-with-zucchini.webp",
  },

  {
    name: "Pork Casserole",
    imageUrl: "images/gallery-images/pork-casserole.webp",
  },

  {
    name: "Pesto Pasta",
    imageUrl: "images/gallery-images/pesto-pasta.webp",
  },

  {
    name: "Pasta with Tomato and Basil",
    imageUrl: "images/gallery-images/pasta-tomato-basil.webp",
  },
  {
    name: "Healthy Mexican Burrito",
    imageUrl: "images/gallery-images/mexican-burrito.webp",
  },
  {
    name: "Creamy Spinach Pasta",
    imageUrl: "images/gallery-images/creamy-spinach-pasta.webp",
  },
  {
    name: "Chicken with Green Beans",
    imageUrl: "images/gallery-images/chicken-with-green-beans.webp",
  },
  {
    name: "Broccoli and Cauliflower",
    imageUrl: "images/gallery-images/broccoli-and-cauliflower.webp",
  },
];

recipes.forEach((recipe) => {
  const galleryItem = document.createElement("div");
  galleryItem.classList.add("gallery-item");

  const title = document.createElement("h3");
  title.textContent = recipe.name;
  const image = document.createElement("img");
  image.src = recipe.imageUrl;

  galleryItem.appendChild(title);
  galleryItem.appendChild(image);

  galleryContainer.append(galleryItem);
});
