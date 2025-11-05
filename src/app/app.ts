import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MenuComponent } from "./components/menu/menu";
import { HeaderComponent } from "./components/header/header";


@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [RouterModule, MenuComponent, HeaderComponent]
})
export class App {

  
}