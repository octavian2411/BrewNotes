import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HostListener } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-home-page',
  imports: [CommonModule, FormsModule],
  templateUrl: './home-page.html',
  styleUrl: './home-page.scss',
})
export class HomePage {
  brewMethods = [
    'all',
    'espresso',
    'pour-over',
    'french-press',
    'aeropress',
    'chemex',
    'moka',
    'cold-brew',
  ];
  recipes: Recipe[] = [
    {
      id: 1,
      name  : 'Ethiopian Morning Bloom',
      brewMethod : 'pour-over',
      origin: 'Ethiopia Yirgacheffe',
      rating: 4,
      coffeeAmount: '18g',
      waterAmount: '300ml',
      temperature: '93°C',
      brewTime: '3:30 min',
      grind: 'Medium-coarse (28)',
      tastingNotes: 'Blueberry, jasmine, dark chocolate',
      notes: 'Bloom for 45s with 36ml water. Best enjoyed black.',
      isExpanded: false,
    },
    {
      id: 2,
      name: 'Silky Espresso Double Shot',
      brewMethod: 'espresso',
      origin: 'Colombia Huila',
      rating: 4,
      coffeeAmount: '18g',
      waterAmount: '36ml',
      temperature: '92°C',
      brewTime: '28s',
      isExpanded: false,
      grind: 'Fine (18)',
      tastingNotes: 'Caramel, red apple, nutty',
      notes: 'Use a fine grind and tamp evenly. Perfect for a morning boost.',
    },
    {
      id: 3,
      name: 'Weekend French Press',
      brewMethod: 'french-press',
      origin: 'Sumatra Mandheling',
      rating: 4,
      coffeeAmount: '30g',
      waterAmount: '500ml',
      temperature: '96°C',
      brewTime: '4:00 min',
      isExpanded: false,
      grind: 'Coarse (35)',
    },
    {
      id: 4,
      name: 'Quick AeroPress',
      brewMethod: 'aeropress',
      origin: 'Guatemala Antigua',
      rating: 4,
      coffeeAmount: '15g',
      waterAmount: '200ml',
      temperature: '85°C',
      brewTime: '1:30 min',
      isExpanded: false,
      grind: 'Fine (20)',
    },
  ];

  form = {
  name: '',
  brewMethod: 'espresso',
  origin: '',
  rating: 0,
  coffeeAmount: '',
  waterAmount: '',
  temperature: '',
  brewTime: '',
  grind: '',
  tastingNotes: '',
};

  recipe_count = this.recipes.length;
  isOpen = false;
  selectedRecipe: Recipe | null = null;
  hoverRating = 0;
  openBrewMethods = false;


  // Helper to toggle details
  toggleExpand(recipe: Recipe) {
    recipe.isExpanded = !recipe.isExpanded;
  }

  hasMoredetails(recipe: Recipe) {
    return recipe.tastingNotes || recipe.notes;
  }

  currentFilter: string = 'all';

  filterRecipes(method: string) {
    this.currentFilter = method;
  }

  

  get filteredBrewMethods() {
  return this.brewMethods.filter(m => m !== 'all');
}

  openPopup() {
  this.resetForm();
  this.selectedRecipe = null;
  this.isOpen = true;
}

  closePopup() {
    this.isOpen = false;
  }

 submitForm() {
  const newRecipe: Recipe = {
    ...(this.form as Partial<Recipe>),
    id: this.recipe_count + 1
  } as Recipe;

  this.recipes.push(newRecipe);
  this.recipe_count++;

  this.closePopup();
  this.resetForm();
}

resetForm() {
  this.form = {
  name: '',
  brewMethod: 'espresso',
  origin: '',
  rating: 0,
  coffeeAmount: '',
  waterAmount: '',
  temperature: '',
  brewTime: '',
  grind: '',
  tastingNotes: ''
}
}

  @HostListener('document:keydown.escape', [])
  handleEscape() {
    this.closePopup();
  }

  deleteRecipe() {
    this.recipe_count = Math.max(0, this.recipe_count - 1);
  }
}
