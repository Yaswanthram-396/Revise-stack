const recipesData = [
  {
    id: 1,
    name: "Chicken Biryani",
    category: "Main Course",
    cuisine: "Indian",
    prepTime: "20 mins",
    cookTime: "40 mins",
    servings: 4,
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1563379091339-03246963d96c?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 cups basmati rice",
      "500g chicken",
      "2 onions",
      "2 tomatoes",
      "1/2 cup yogurt",
      "2 tbsp biryani masala",
      "2 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Wash and soak the basmati rice for 20 minutes.",
      "Marinate the chicken with yogurt and spices.",
      "Cook onions and tomatoes in oil.",
      "Add the marinated chicken and cook until tender.",
      "Cook the rice separately until 70% done.",
      "Layer the rice over the chicken and cook on low heat.",
      "Serve hot."
    ],
    tags: ["biryani", "chicken", "indian"]
  },

  {
    id: 2,
    name: "Masala Dosa",
    category: "Breakfast",
    cuisine: "Indian",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 3,
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1668236543090-82eba5ee5976?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 cups dosa batter",
      "3 potatoes",
      "1 onion",
      "1 tsp mustard seeds",
      "1 green chili",
      "1 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Boil and mash the potatoes.",
      "Heat oil and add mustard seeds.",
      "Add onions and green chili and sauté.",
      "Add potatoes and salt and mix well.",
      "Heat a dosa pan and spread the batter thinly.",
      "Place the potato filling inside the dosa.",
      "Fold and serve with chutney."
    ],
    tags: ["dosa", "breakfast", "south-indian"]
  },

  {
    id: 3,
    name: "Paneer Butter Masala",
    category: "Main Course",
    cuisine: "Indian",
    prepTime: "15 mins",
    cookTime: "30 mins",
    servings: 4,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "250g paneer",
      "3 tomatoes",
      "1 onion",
      "2 tbsp butter",
      "1/2 cup cream",
      "1 tsp garam masala",
      "1 tsp chili powder",
      "Salt to taste"
    ],
    instructions: [
      "Cut paneer into cubes.",
      "Cook onions and tomatoes until soft.",
      "Blend them into a smooth paste.",
      "Heat butter and add the paste.",
      "Add spices and cook for 10 minutes.",
      "Add paneer and cream.",
      "Simmer for 5 minutes and serve."
    ],
    tags: ["paneer", "vegetarian", "indian"]
  },

  {
    id: 4,
    name: "Veg Fried Rice",
    category: "Main Course",
    cuisine: "Chinese",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 3,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "3 cups cooked rice",
      "1 carrot",
      "1/2 cup cabbage",
      "1/2 cup beans",
      "2 spring onions",
      "2 tbsp soy sauce",
      "1 tbsp oil",
      "Salt to taste"
    ],
    instructions: [
      "Heat oil in a wok.",
      "Add chopped vegetables and stir-fry.",
      "Add cooked rice.",
      "Add soy sauce and salt.",
      "Toss everything on high heat.",
      "Garnish with spring onions and serve."
    ],
    tags: ["rice", "vegetarian", "chinese"]
  },

  {
    id: 5,
    name: "Margherita Pizza",
    category: "Main Course",
    cuisine: "Italian",
    prepTime: "20 mins",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Medium",
    image:
      "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 pizza dough",
      "1/2 cup tomato sauce",
      "150g mozzarella cheese",
      "Fresh basil leaves",
      "1 tbsp olive oil",
      "Salt to taste"
    ],
    instructions: [
      "Preheat the oven to 220°C.",
      "Roll out the pizza dough.",
      "Spread tomato sauce over the dough.",
      "Add mozzarella cheese.",
      "Add fresh basil leaves.",
      "Bake for 12–15 minutes.",
      "Drizzle with olive oil and serve."
    ],
    tags: ["pizza", "italian", "vegetarian"]
  },

  {
    id: 6,
    name: "Chocolate Pancakes",
    category: "Dessert",
    cuisine: "American",
    prepTime: "10 mins",
    cookTime: "15 mins",
    servings: 2,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1575853121743-60c24f0a7502?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 cup flour",
      "2 tbsp cocoa powder",
      "1 tbsp sugar",
      "1 egg",
      "3/4 cup milk",
      "1 tsp baking powder",
      "1 tbsp butter"
    ],
    instructions: [
      "Mix flour, cocoa powder, sugar and baking powder.",
      "Add egg and milk.",
      "Whisk until smooth.",
      "Heat a pan and add butter.",
      "Pour the batter into the pan.",
      "Cook both sides until golden.",
      "Serve with chocolate syrup."
    ],
    tags: ["pancakes", "chocolate", "dessert"]
  },

  {
    id: 7,
    name: "Chicken Tacos",
    category: "Main Course",
    cuisine: "Mexican",
    prepTime: "15 mins",
    cookTime: "20 mins",
    servings: 4,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1552332386-f8dd00dc2f85?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "500g chicken",
      "8 taco shells",
      "1 onion",
      "1 tomato",
      "1/2 cup lettuce",
      "1/2 cup cheese",
      "2 tbsp taco seasoning"
    ],
    instructions: [
      "Cut the chicken into small pieces.",
      "Season the chicken with taco seasoning.",
      "Cook the chicken until fully done.",
      "Warm the taco shells.",
      "Add chicken, lettuce and tomato.",
      "Top with cheese.",
      "Serve immediately."
    ],
    tags: ["tacos", "chicken", "mexican"]
  },

  {
    id: 8,
    name: "Pasta Alfredo",
    category: "Main Course",
    cuisine: "Italian",
    prepTime: "10 mins",
    cookTime: "20 mins",
    servings: 3,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "250g pasta",
      "2 tbsp butter",
      "1 cup cream",
      "1/2 cup parmesan cheese",
      "2 garlic cloves",
      "Black pepper",
      "Salt to taste"
    ],
    instructions: [
      "Boil pasta according to package instructions.",
      "Melt butter in a pan.",
      "Add minced garlic and sauté.",
      "Add cream and simmer.",
      "Add parmesan cheese.",
      "Add cooked pasta and mix well.",
      "Season with pepper and serve."
    ],
    tags: ["pasta", "italian", "vegetarian"]
  },

  {
    id: 9,
    name: "Mango Smoothie",
    category: "Beverage",
    cuisine: "Indian",
    prepTime: "5 mins",
    cookTime: "0 mins",
    servings: 2,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "1 ripe mango",
      "1 cup milk",
      "1/2 cup yogurt",
      "1 tbsp honey",
      "Ice cubes"
    ],
    instructions: [
      "Peel and chop the mango.",
      "Add mango, milk and yogurt to a blender.",
      "Add honey and ice cubes.",
      "Blend until smooth.",
      "Pour into glasses and serve chilled."
    ],
    tags: ["mango", "smoothie", "beverage"]
  },

  {
    id: 10,
    name: "Greek Salad",
    category: "Salad",
    cuisine: "Greek",
    prepTime: "10 mins",
    cookTime: "0 mins",
    servings: 2,
    difficulty: "Easy",
    image:
      "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    ingredients: [
      "2 tomatoes",
      "1 cucumber",
      "1/2 onion",
      "1/2 cup feta cheese",
      "1/4 cup olives",
      "2 tbsp olive oil",
      "1 tbsp lemon juice",
      "Salt and pepper"
    ],
    instructions: [
      "Chop the tomatoes and cucumber.",
      "Slice the onion.",
      "Add vegetables and olives to a bowl.",
      "Add feta cheese.",
      "Drizzle with olive oil and lemon juice.",
      "Season with salt and pepper.",
      "Mix gently and serve."
    ],
    tags: ["salad", "greek", "healthy", "vegetarian"]
  }
];

export default recipesData;