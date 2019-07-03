import { Component, OnInit } from '@angular/core';
import { Ingrediant } from '../Shared/ingrediant.model';


@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingrediant[] = [
    new Ingrediant('Appless', 5),
    new Ingrediant('Tomato', 7)
  ];

  constructor() { }

  ngOnInit() {
  }

}
