import 'beercss';
import 'material-dynamic-colors';

import { Component, OnInit, VERSION } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tex0FormComponent } from './tex0/tex0-form.component';
import { Tex0ValueComponent } from './tex0/tex0-value.component';
import { mdiGithub } from '@mdi/js';
import { version } from '../version';

@Component({
  selector: 'tex0-root',
  standalone: true,
  imports: [RouterOutlet, Tex0FormComponent, Tex0ValueComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'PS2 GPU TEX0 command visualizer';
  isLight = false;
  githubIcon = mdiGithub;

  appVersion = version;
  angularVersion = VERSION.full;

  async ngOnInit() {
    await beercss("theme", "#a0b1b9");
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

  openGitHubRepo(): void {
    window.open("https://github.com/pleonex/tex0tron", "_blank");
  }
}
