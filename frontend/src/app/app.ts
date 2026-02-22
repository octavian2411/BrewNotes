import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AuthPage } from "./auth-page/auth-page";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AuthPage],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected title = 'BrewNotes';
}