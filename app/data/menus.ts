export type MenuItem = {
    name: string;
    price: string;
    ingredients: string[];
  };
  
  export type Menus = {
    [key: string]: MenuItem[];
  };
  
  export const menus: Menus = {
    breakfast: [
      { 
        name: 'Eggs', 
        price: '$5',
        ingredients: ['Scrambled eggs', 'Sea salt', 'Pepper'], 
      },
      { 
        name: 'Pancakes', 
        price: '$7',
        ingredients: ['Pancakes', 'Nutella', 'Whipped cream'],
      },
      { 
        name: 'Waffles',
        price: '$8',
        ingredients: ['Waffles', 'Maple syrup', 'Fresh berries'],
      },
      { 
        name: 'Avocado Toast',
        price: '$7',
        ingredients: ['Avocado ', 'Multigrain toast', 'Sea salt', 'Poached egg'], 
      },
      { 
        name: 'Omelette',
        price: '$9',
        ingredients: ['Eggs', 'Cheese', 'Tomatoes', 'Spinach'],
      },
    ],
    lunch: [
      { 
        name: 'Grilled Chicken Salad', 
        price: '$10',
        ingredients: ['Grilled chicken breast', 'Mixed greens', 'Cherry tomatoes', 'Cucumbers'],
      },
      { 
        name: 'Margherita Pizza', 
        price: '$12',
        ingredients: ['Tomato sauce', 'Fresh mozzarella', 'Basil', 'Olive oil'],
      },
      { 
        name: 'Classic Caesar Salad', 
        price: '$8',
        ingredients: ['Romaine lettuce', 'Croutons', 'Parmesan cheese', 'Caesar dressing'],
      },
      { 
        name: 'Spaghetti Bolognese', 
        price: '$14',
        ingredients: ['Ground beef', 'Tomato sauce', 'Garlic', 'Onion'],
      },
      { 
        name: 'Veggie Wrap', 
        price: '$9',
        ingredients: ['Grilled vegetables', 'Hummus', 'Spinach', 'Tortilla wrap'],
      },
      { 
        name: 'Salmon Quinoa Bowl', 
        price: '$14',
        ingredients: ['Grilled salmon', 'Quinoa', 'Avocado', 'Cherry tomatoes'],
      },      
    ],
    dinner: [
      { 
        name: 'Grilled Salmon', 
        price: '$19', 
        ingredients: ['Grilled salmon fillet', 'Roasted vegetables', 'Lemon butter sauce'], 
      },
      { 
        name: 'Beef Steak', 
        price: '$22', 
        ingredients: ['Beef tenderloin steak', 'Mashed potatoes', 'Asparagus'], 
      },
      { 
        name: 'Vegetarian Pasta', 
        price: '$16', 
        ingredients: ['Assorted vegetables', 'Tomato', 'Basil sauce', 'Parmesan cheese'], 
      },
      { 
        name: 'Stuffed Bell Peppers', 
        price: '$14', 
        ingredients: ['Bell peppers', 'Ground turkey', 'Quinoa', 'Black beans', 'Salsa'], 
      },

    ],
  };



