const recipeData = [
  {
    "name": "Sri Lankan Rice and Curry",
    "image": "rice-and-curry.webp",
    "country": "Sri Lanka",
    "intro": "A colourful Sri Lankan meal built around steamed rice and several flavourful curries.",
    "ingredients": "<div class=\"ingredient-group\"><h3>Steamed Rice</h3><ul><li>2 cups white rice</li><li>3 cups water</li><li>1 teaspoon salt</li></ul></div><div class=\"ingredient-group\"><h3>Fish Curry</h3><ul><li>500 g firm fish pieces</li><li>1 onion, sliced</li><li>2 garlic cloves, chopped</li><li>1 teaspoon chilli powder</li><li>1 teaspoon curry powder</li><li>1/2 teaspoon turmeric</li><li>1 cup coconut milk</li><li>Salt and lime juice</li></ul></div><div class=\"ingredient-group\"><h3>Pumpkin Curry</h3><ul><li>500 g pumpkin, cubed</li><li>1/2 onion, sliced</li><li>1/2 teaspoon turmeric</li><li>1 teaspoon curry powder</li><li>1 cup coconut milk</li><li>Salt</li></ul></div>",
    "steps": "<ol><li>Wash the rice, add water and salt, then cook until tender. Rest for 5 minutes and fluff.</li><li>For the fish curry, sauté onion and garlic. Add spices and fish, then gently cook with coconut milk until the fish is done and the gravy thickens.</li><li>For the pumpkin curry, simmer pumpkin with onion, spices, coconut milk and salt until tender.</li><li>Serve the steamed rice with the fish curry and pumpkin curry.</li></ol>"
  },
  {
    "name": "Italian Pasta Carbonara",
    "image": "italian-paste.webp",
    "country": "Italy",
    "intro": "A creamy-tasting Italian pasta made traditionally with eggs, cheese, cured pork and black pepper—without cream.",
    "ingredients": "<ul><li>200 g spaghetti</li><li>100 g pancetta or bacon</li><li>2 eggs</li><li>50 g finely grated Parmesan or Pecorino</li><li>1 garlic clove, optional</li><li>Freshly ground black pepper</li><li>Salt</li></ul>",
    "steps": "<ol><li>Boil the spaghetti in salted water until al dente. Keep about 1 cup of pasta water.</li><li>Cook the pancetta until lightly crisp. Remove from heat.</li><li>Whisk eggs, grated cheese and plenty of black pepper in a bowl.</li><li>Add hot pasta to the pan. Remove from direct heat, then quickly mix in the egg-and-cheese mixture.</li><li>Add a little pasta water until glossy and creamy. Serve immediately with extra cheese and pepper.</li></ol>"
  },
  {
    "name": "Belgian Waffles",
    "image": "belgium-waffle.webp",
    "country": "Belgium",
    "intro": "Light, crisp-edged waffles commonly served for breakfast or dessert.",
    "ingredients": "<ul><li>2 cups all-purpose flour</li><li>2 tablespoons sugar</li><li>2 teaspoons baking powder</li><li>1/2 teaspoon salt</li><li>2 eggs</li><li>1 3/4 cups milk</li><li>1/3 cup melted butter</li><li>1 teaspoon vanilla</li></ul>",
    "steps": "<ol><li>Mix flour, sugar, baking powder and salt.</li><li>Whisk eggs, milk, melted butter and vanilla separately.</li><li>Combine wet and dry ingredients until just mixed.</li><li>Preheat and lightly grease a waffle maker.</li><li>Pour in batter and cook until golden and crisp. Serve with fruit, syrup or powdered sugar.</li></ol>"
  },
  {
    "name": "Irish Stew",
    "image": "ireland-lrish.webp",
    "country": "Ireland",
    "intro": "A comforting slow-cooked stew of meat and root vegetables.",
    "ingredients": "<ul><li>600 g lamb or beef, cubed</li><li>3 potatoes, cubed</li><li>2 carrots, sliced</li><li>1 onion, chopped</li><li>2 cups beef or vegetable stock</li><li>1 tablespoon flour</li><li>1 tablespoon oil</li><li>Salt, pepper and parsley</li></ul>",
    "steps": "<ol><li>Season the meat and brown it in hot oil.</li><li>Add onion and cook until softened.</li><li>Stir in flour, then add stock and bring to a gentle simmer.</li><li>Add potatoes and carrots. Cover and cook slowly until the meat and vegetables are tender.</li><li>Season and finish with chopped parsley.</li></ol>"
  },
  {
    "name": "Vietnamese Pho",
    "image": "vietnam-pho.webp",
    "country": "Vietnam",
    "intro": "A fragrant noodle soup with aromatic broth, rice noodles and fresh toppings.",
    "ingredients": "<ul><li>200 g rice noodles</li><li>500 g beef or chicken</li><li>1.5 litres stock</li><li>1 onion, halved</li><li>1 piece ginger</li><li>1 cinnamon stick</li><li>2 star anise</li><li>Fish sauce and a little sugar</li><li>Bean sprouts, herbs, lime and chilli</li></ul>",
    "steps": "<ol><li>Char the onion and ginger lightly, then add them to the stock with cinnamon and star anise.</li><li>Simmer the broth gently and season with fish sauce and sugar.</li><li>Cook rice noodles according to the packet instructions.</li><li>Place noodles and thinly sliced cooked meat in bowls.</li><li>Pour over hot broth and serve with herbs, bean sprouts, lime and chilli.</li></ol>"
  },
  {
    "name": "Bangladeshi Machher Jhol",
    "image": "bangladesh-machher-jhol.webp",
    "country": "Bangladesh",
    "intro": "A light but spicy Bengali-style fish curry usually served with rice.",
    "ingredients": "<ul><li>500 g fish pieces</li><li>2 potatoes, quartered</li><li>1 onion, sliced</li><li>1 tomato, chopped</li><li>1 teaspoon turmeric</li><li>1 teaspoon chilli powder</li><li>1 teaspoon cumin</li><li>2 tablespoons oil</li><li>1 1/2 cups water</li><li>Salt</li></ul>",
    "steps": "<ol><li>Rub fish with salt and turmeric, then lightly fry on both sides.</li><li>Fry potatoes until lightly golden and set aside.</li><li>Sauté onion, tomato, cumin, chilli and turmeric.</li><li>Add water and potatoes; simmer until the potatoes are tender.</li><li>Add the fish and cook gently for a few minutes. Serve with steamed rice.</li></ol>"
  },
  {
    "name": "Japanese Sushi",
    "image": "japanese-sushi.webp",
    "country": "Japan",
    "intro": "Seasoned sushi rice paired with seafood, vegetables or other fillings and rolled or shaped for serving.",
    "ingredients": "<ul><li>2 cups sushi rice</li><li>2 1/2 cups water</li><li>1/4 cup rice vinegar</li><li>1 tablespoon sugar</li><li>1/2 teaspoon salt</li><li>Nori sheets</li><li>Fresh cucumber, avocado and cooked or sushi-grade fish</li></ul>",
    "steps": "<ol><li>Rinse sushi rice well, cook it with water, then let it rest.</li><li>Mix rice vinegar, sugar and salt; gently fold it into the warm rice.</li><li>Place nori on a bamboo mat and spread a thin layer of rice.</li><li>Add fillings in a line and roll tightly.</li><li>Slice with a sharp wet knife and serve with soy sauce, ginger or wasabi.</li></ol>"
  },
  {
    "name": "Indian Biryani",
    "image": "indian-biryani.webp",
    "country": "India",
    "intro": "A fragrant layered rice dish cooked with aromatic spices, vegetables, meat or seafood.",
    "ingredients": "<ul><li>2 cups basmati rice</li><li>500 g chicken or vegetables</li><li>1 onion, sliced</li><li>1 cup yogurt</li><li>1 tablespoon ginger-garlic paste</li><li>1 teaspoon turmeric</li><li>1 teaspoon chilli powder</li><li>1 teaspoon garam masala</li><li>Whole spices, salt and oil</li><li>Fresh mint and coriander</li></ul>",
    "steps": "<ol><li>Rinse and parboil the basmati rice with salt and whole spices.</li><li>Marinate the chicken or vegetables with yogurt, ginger-garlic paste and spices.</li><li>Cook the marinated mixture until nearly tender.</li><li>Layer the cooked rice over the masala and add mint and coriander.</li><li>Cover and cook on low heat until the rice is fully tender and aromatic.</li></ol>"
  },
  {
    "name": "Mexican Tacos",
    "image": "mexican-tacos.webp",
    "country": "Mexico",
    "intro": "Soft or crisp tortillas filled with seasoned protein, vegetables and fresh toppings.",
    "ingredients": "<ul><li>8 corn or flour tortillas</li><li>300 g minced beef, chicken or beans</li><li>1 onion, diced</li><li>1 tomato, diced</li><li>1 teaspoon cumin</li><li>1 teaspoon chilli powder</li><li>Lettuce</li><li>Cheese</li><li>Lime and coriander</li></ul>",
    "steps": "<ol><li>Cook the onion, then add the meat or beans and spices.</li><li>Cook until browned and fully done.</li><li>Warm the tortillas in a dry pan.</li><li>Fill each tortilla with the cooked mixture, lettuce, tomato and cheese.</li><li>Finish with lime juice and fresh coriander.</li></ol>"
  },
  {
    "name": "Thai Pad Thai",
    "image": "thai-pad-thai.webp",
    "country": "Thailand",
    "intro": "A popular Thai stir-fried rice noodle dish with a balanced sweet, salty and sour flavour.",
    "ingredients": "<ul><li>200 g rice noodles</li><li>200 g prawns, chicken or tofu</li><li>2 eggs</li><li>1 cup bean sprouts</li><li>2 spring onions</li><li>2 tablespoons fish sauce or soy sauce</li><li>1 tablespoon tamarind paste</li><li>1 tablespoon sugar</li><li>Crushed peanuts and lime</li></ul>",
    "steps": "<ol><li>Soak rice noodles until flexible and drain.</li><li>Mix fish sauce or soy sauce, tamarind and sugar to make the sauce.</li><li>Stir-fry the protein, then push it aside and scramble the eggs.</li><li>Add noodles and sauce. Toss quickly until the noodles are tender and coated.</li><li>Add bean sprouts and spring onion. Serve with peanuts and lime.</li></ol>"
  },
  {
    "name": "Korean Bibimbap",
    "image": "korean-bibimbap.webp",
    "country": "South Korea",
    "intro": "A colourful Korean rice bowl topped with seasoned vegetables, protein and a spicy-sweet sauce.",
    "ingredients": "<ul><li>2 bowls cooked short-grain rice</li><li>1 carrot, sliced</li><li>1 zucchini, sliced</li><li>1 cup spinach</li><li>100 g beef, chicken or tofu</li><li>2 eggs</li><li>1 tablespoon sesame oil</li><li>2 tablespoons gochujang</li><li>Sesame seeds and soy sauce</li></ul>",
    "steps": "<ol><li>Cook and season each vegetable separately.</li><li>Stir-fry the beef, chicken or tofu with a little soy sauce.</li><li>Place hot rice in bowls and arrange the vegetables and protein on top.</li><li>Fry an egg and place it in the centre.</li><li>Add gochujang and sesame oil, then mix everything before eating.</li></ol>"
  }
];

const methodData = [
  {
    "name": "Boiling",
    "countries": [
      [
        "Sri Lanka",
        [
          "Rice",
          "Boiled cassava",
          "Boiled green gram"
        ]
      ],
      [
        "Italy",
        [
          "Pasta",
          "Boiled potatoes",
          "Minestrone vegetables"
        ]
      ],
      [
        "Japan",
        [
          "Udon noodles",
          "Edamame",
          "Simmered eggs"
        ]
      ],
      [
        "India",
        [
          "Boiled rice",
          "Chickpeas",
          "Potatoes"
        ]
      ],
      [
        "Mexico",
        [
          "Corn",
          "Beans",
          "Tomatillos"
        ]
      ]
    ]
  },
  {
    "name": "Frying",
    "countries": [
      [
        "Sri Lanka",
        [
          "Fish fry",
          "Vadai",
          "Fried rice"
        ]
      ],
      [
        "India",
        [
          "Samosa",
          "Pakora",
          "Poori"
        ]
      ],
      [
        "Japan",
        [
          "Tempura",
          "Karaage",
          "Tonkatsu"
        ]
      ],
      [
        "Mexico",
        [
          "Churros",
          "Fried tacos",
          "Quesadillas"
        ]
      ],
      [
        "Thailand",
        [
          "Spring rolls",
          "Fried tofu",
          "Fried noodles"
        ]
      ]
    ]
  },
  {
    "name": "Steaming",
    "countries": [
      [
        "Sri Lanka",
        [
          "String hoppers",
          "Steamed manioc",
          "Pittu"
        ]
      ],
      [
        "China",
        [
          "Baozi",
          "Har gow",
          "Steamed fish"
        ]
      ],
      [
        "Japan",
        [
          "Chawanmushi",
          "Nikuman",
          "Steamed vegetables"
        ]
      ],
      [
        "India",
        [
          "Dhokla",
          "Modak",
          "Idli"
        ]
      ],
      [
        "Thailand",
        [
          "Thai sticky rice",
          "Hor Mok",
          "Steamed dumplings"
        ]
      ]
    ]
  },
  {
    "name": "Baking",
    "countries": [
      [
        "Italy",
        [
          "Lasagna",
          "Focaccia",
          "Baked pasta"
        ]
      ],
      [
        "France",
        [
          "Croissant",
          "Baguette",
          "Quiche"
        ]
      ],
      [
        "United Kingdom",
        [
          "Scones",
          "Shepherd’s pie",
          "Fruit pie"
        ]
      ],
      [
        "Germany",
        [
          "Pretzel",
          "Black Forest cake",
          "Stollen"
        ]
      ],
      [
        "United States",
        [
          "Apple pie",
          "Cornbread",
          "Brownies"
        ]
      ]
    ]
  },
  {
    "name": "Grilling",
    "countries": [
      [
        "Sri Lanka",
        [
          "Grilled fish",
          "Grilled chicken",
          "Grilled corn"
        ]
      ],
      [
        "South Korea",
        [
          "Bulgogi",
          "Samgyeopsal",
          "Galbi"
        ]
      ],
      [
        "Argentina",
        [
          "Asado beef",
          "Choripan",
          "Grilled vegetables"
        ]
      ],
      [
        "United States",
        [
          "Hamburger",
          "Grilled steak",
          "Corn on the cob"
        ]
      ],
      [
        "Japan",
        [
          "Yakitori",
          "Yaki-onigiri",
          "Grilled saba"
        ]
      ]
    ]
  },
  {
    "name": "Roasting",
    "countries": [
      [
        "Sri Lanka",
        [
          "Roasted cashews",
          "Roasted breadfruit",
          "Roasted pumpkin"
        ]
      ],
      [
        "Turkey",
        [
          "Roast lamb",
          "Roasted vegetables",
          "Kuzu tandir"
        ]
      ],
      [
        "United Kingdom",
        [
          "Roast beef",
          "Roast potatoes",
          "Roast chicken"
        ]
      ],
      [
        "France",
        [
          "Roast chicken",
          "Roasted potatoes",
          "Roasted vegetables"
        ]
      ],
      [
        "India",
        [
          "Tandoori chicken",
          "Roasted papad",
          "Roasted cauliflower"
        ]
      ]
    ]
  },
  {
    "name": "Sauteing",
    "countries": [
      [
        "Sri Lanka",
        [
          "Tempered vegetables",
          "Sautéed greens",
          "Devilled mushrooms"
        ]
      ],
      [
        "France",
        [
          "Ratatouille",
          "Sautéed mushrooms",
          "Green beans"
        ]
      ],
      [
        "Italy",
        [
          "Sautéed spinach",
          "Mushrooms",
          "Vegetable soffritto"
        ]
      ],
      [
        "China",
        [
          "Stir-fried greens",
          "Sautéed prawns",
          "Bok choy"
        ]
      ],
      [
        "Thailand",
        [
          "Sautéed basil chicken",
          "Morning glory",
          "Sautéed vegetables"
        ]
      ]
    ]
  },
  {
    "name": "Poaching",
    "countries": [
      [
        "France",
        [
          "Poached eggs",
          "Poached fish",
          "Poached pears"
        ]
      ],
      [
        "Japan",
        [
          "Onsen-style eggs",
          "Poached chicken",
          "Simmered tofu"
        ]
      ],
      [
        "United States",
        [
          "Poached salmon",
          "Poached eggs",
          "Poached pears"
        ]
      ],
      [
        "China",
        [
          "Poached chicken",
          "Poached fish",
          "Silken tofu"
        ]
      ],
      [
        "Italy",
        [
          "Poached fish",
          "Poached pears",
          "Poached chicken"
        ]
      ]
    ]
  }
];
