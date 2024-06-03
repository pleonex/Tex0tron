import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import 'beercss';

@Component({
  selector: 'tex0-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Tex0tron';
  isLight: boolean = false;

  async ngOnInit() {
    this.isLight = await beercss("mode") == "light";
  }

  async changeTheme() {
    if (this.isLight) {
      await beercss("mode", "dark");
    } else {
      await beercss("mode", "light");
    }

    this.isLight = !this.isLight;
  }
}
