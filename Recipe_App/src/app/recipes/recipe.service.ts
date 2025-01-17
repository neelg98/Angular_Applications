import { Injectable } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe(
            'White Sauce Pasta',
            'It is a delicious dish made of pasta, butter, milk, cheese & herbs. It is basically cooked pasta tossed in cheesy white sauce. White sauce is also known as bechamel sauce & is made using flour, butter & milk. It originated from the Italian & french cuisines and is a base for many other sauce recipes.',
            'https://lilluna.com/wp-content/uploads/2017/10/penne-pasta-resize-1.jpg',
            [
                new Ingredient('Pasta', 3/4),
                new Ingredient('Milk', 1),
                new Ingredient('Flour', 3/4),
                new Ingredient('Cheese', 4),
                new Ingredient('Butter', 2),
                new Ingredient('Oil', 1),
                new Ingredient('Pepper', 1/4),
                new Ingredient('Garlic Cloves', 2),
                new Ingredient('Oregano', 1/2),
                new Ingredient('Salt', 1),
                new Ingredient('Red Chilli Flakes', 1/2)
            ]),
        new Recipe(
            'American Veggie Burger', 
            'An expanded version of the basic plant burger recipe, this burger has been specifically hailed as a huge hit with families transitioning to plant-based eating. Try serving with sliced tomatoes, sweet onions, ketchup, mustard, barbecue sauce, and pickles or relish!',
            'https://images.immediate.co.uk/production/volatile/sites/2/2018/10/OLI-1018_Everyday-MASHBurger_28549-13fca05.jpg?quality=45&resize=960,413',
            [
                new Ingredient('Pinto Beans', 2),
                new Ingredient('Short-grain brown rice', 1),
                new Ingredient('Grated Carrot', 1/2),
                new Ingredient('Chopped Onion', 1/2),
                new Ingredient('Chopped Mushrooms', 1/2),
                new Ingredient('Chopped Walnuts', 1/4),
                new Ingredient('Bread crumbs', 1),
                new Ingredient('Garlic Powder', 1),
                new Ingredient('Worcestershire Sauce', 1),
                new Ingredient('Nutritional Yeast', 2),
                new Ingredient('Fresh Dill', 1),
                new Ingredient('Smoked Paprika', 2),
                new Ingredient('Liquid Smoke', 1/4),
                new Ingredient('Barbeque Sauce', 3),
                new Ingredient('Garbanzo Flour', 1/4)
            ]),
        
        new Recipe(
            'Delicious Momos',
            'These popular street dumplings stand as the most favourite food for kids today. Momos, originating from Tibet is a hugely popular street food in the country, largely in North-India. These are also known as Dim Sum and are basically dumplings made from flour with a savory stuffing.',
            'https://resize.indiatvnews.com/en/resize/oldbucket/715_-/lifestylelifestyle/IndiaTv94add1_momos-main-pic.jpg',
            [
                new Ingredient('Flour', 1),
                new Ingredient('Oil', 2),
                new Ingredient('Salt', 1/4),
                new Ingredient('Water', 3),
                new Ingredient('Spring Onions', 2),
                new Ingredient('Garlic', 4),
                new Ingredient('Cabbage', 1/2),
                new Ingredient('Capsicum', 1/4),
                new Ingredient('Carrots', 1/2),
                new Ingredient('French Beans', 1/3),
                new Ingredient('Soya Sauce', 1),
                new Ingredient('Black Pepper Powder', 1/2),
            ]),

            new Recipe(
                'Chilli Paneer Dry',
                'In a typical Chilli Paneer recipe, the fried paneer cubes are tossed in a sweet, sour, spicy sauce. The paneer cubes can be coated with flours or batter coated and deep fried. The dry version of chilli paneer is served as a starter or appetizer snack. The gravy version is had with steamed rice or noodles. The semi-dry version can be had as an appetizer.',
                'https://1.bp.blogspot.com/-KeCawc8_1Xk/XQ_u6jCkWwI/AAAAAAAAJGg/K6R3tsNEhpobjcEZd-dlzU3VXny7lkGngCLcBGAs/s1600/IMG_20190616_203154.jpg',
                [
                    new Ingredient('Paneer Cubes', 15),
                    new Ingredient('Red Chilli Powder', 1),
                    new Ingredient('Cornstarch', 4),
                    new Ingredient('Flour', 3),
                    new Ingredient('Black Pepper', 1),
                    new Ingredient('Salt', 1/8),
                    new Ingredient('Oil', 4),
                    new Ingredient('Soya Sauce', 1),
                    new Ingredient('Red Chilli Sauce', 2),
                    new Ingredient('Tomato Ketchup', 2),
                    new Ingredient('Vinegar', 1/2),
                    new Ingredient('Sugar', 1),
                    new Ingredient('Garlic', 1),
                    new Ingredient('Spring Onions', 4),
                    new Ingredient('Capsicum', 1/2),
                    new Ingredient('Onion', 1),
                    new Ingredient('Green Chillies', 1),
                    new Ingredient('Water', 1/2),
            
            ]),

            new Recipe(
                'Spring Rolls',
                'It is an savory recipe from asian or mainland chinese cuisine. basically, spring roll wrapper is used to stuff the vegetables and then deep fried in oil. usually, shredded cabbages and carrots tossed with sauces are used as stuffing’s. furthermore, it is usually served with sweet chilli sauce or even with tomato sauce. moreover, it tastes best when served hot.',
                'https://i2.wp.com/vegecravings.com/wp-content/uploads/2016/09/spring-roll-recipe-step-by-step-instructions.jpg?fit=3766%2C3024&quality=65&strip=all&ssl=1',
                [
                    new Ingredient('Spring roll pastry Sheets', 12),
                    new Ingredient('Oil', 2),
                    new Ingredient('Sesame seeds', 1),
                    new Ingredient('Cumin', 1/4),
                    new Ingredient('Garlic', 1/2),
                    new Ingredient('Red chili Powder', 1/2),
                    new Ingredient('Garam Masala', 1/4),
                    new Ingredient('Pepper Powder', 1),
                    new Ingredient('Coriander Leaves', 1),
                    new Ingredient('Spring Onions', 1),
                    new Ingredient('Green Chillies', 2), 
                    new Ingredient('Bell Peppers', 1/4),
                    new Ingredient('Cheddar Cheese', 1),
                    new Ingredient('Chopped Carrots', 1),
                    new Ingredient('Green Peas', 2)
                ]),

                new Recipe(
                    'Veg Hakka Noodles',
                    'Hakka noodles is a popular Indo-Chinese dish of stir fried noodles, veggies and sauces. It is hugely popular in indian restaurants and street stalls.It is originated from the chinese population living in kolkata. Over the years it has become a favorite among many indians.',
                    'https://i2.wp.com/vegecravings.com/wp-content/uploads/2017/03/veg-hakka-noodles-recipe-with-step-by-step-instructions.jpg?fit=1838%2C1493&quality=65&strip=all&ssl=1',
                    [
                        new Ingredient('Hakka Noodles', 150),
                        new Ingredient('Oil', 2),
                        new Ingredient('Garlic', 1),
                        new Ingredient('Spring Onion Stalks', 3),
                        new Ingredient('Medium Onion', 1),
                        new Ingredient('Green Chilli', 1),
                        new Ingredient('Carrot', 1),
                        new Ingredient('Capsicum', 1),
                        new Ingredient('Cabbage', 1/2),
                        new Ingredient('French Beans', 6),
                        new Ingredient('Soya Sauce', 2),
                        new Ingredient('Vinegar', 1),
                        new Ingredient('Black Pepper', 1/4),
                        new Ingredient('Salt', 1)
                    ]),

                    new Recipe(
                        'Sizzling Brownie',
                        'A sizzling touch is a great value-add for sizzling brownies. Mouth-wateringly delicious eggless sizzling brownies are made by arranging brownies, chocolate sauce and vanilla ice-cream in just the right way on a piping hot sizzler plate. The aroma of molten chocolate, and the fizzling sound of frozen ice-cream on a sizzling dessert send strong signals to your gastronomic systame, making it a unique treat. ',
                        'https://i.ytimg.com/vi/ngDqanR_1iU/maxresdefault.jpg',
                        [
                            new Ingredient('Chopped Dark Chocolate', 1),
                            new Ingredient('Milk', 1/4),
                            new Ingredient('Brownies', 2),
                            new Ingredient('Powdered Sugar', 1/4),
                            new Ingredient('Water', 1/4),
                            new Ingredient('Scoops of Vanilla Ice-Cream', 2),
                            new Ingredient('Chocolate Syrup', 5)
                        ])
    ];

    constructor(private slService: ShoppingListService) {}

    setRecipes(recipes: Recipe[]) {
        this.recipes = recipes;
        this.recipesChanged.next(this.recipes.slice());
    }

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe);
        this.recipesChanged.next(this.recipes.slice());
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next(this.recipes.slice());
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1);
        this.recipesChanged.next(this.recipes.slice());
    }
}