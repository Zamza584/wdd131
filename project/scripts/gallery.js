const galleryContainer = document.querySelector(".gallery-container");

const recipes = [
  {
    name: "Singapore Noodles",
    imageUrl: "images/singapore noodles.jpg",
  },
  {
    name: "Pasta With Tomato and Basil",
    imageUrl: "images/pasta with tomato and basil.webp",
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
