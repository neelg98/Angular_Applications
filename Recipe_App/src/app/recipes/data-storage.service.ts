import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';
import { map, tap, take, exhaustMap } from 'rxjs/operators';

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService) {}

    storeRecipes() {
        const recipes = this.recipeService.getRecipes();
        this.http
          .put('https://food-application-6cf6c-default-rtdb.firebaseio.com/recipes.json',
          recipes
          )
          .subscribe(response => {
              console.log(response);
          });
    }

    fetchRecipes() {
          return this.http
          .get<Recipe[]>('https://food-application-6cf6c-default-rtdb.firebaseio.com/recipes.json')
          .pipe(
        map(recipes => {
            return recipes.map(recipe => {
                return {
                    ...recipe,
                    ingredients: recipe.ingredients ? recipe.ingredients : []
                };
            });
        }),
        tap(recipes => {
            this.recipeService.setRecipes(recipes);
        })
        );    
    }
}