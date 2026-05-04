import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthPage } from "./auth-page/auth-page";
import { HomePage } from "./home-page/home-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthPage, HomePage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'BrewNotes';
}