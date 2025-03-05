import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { fadeInAnimation } from 'src/assets/animations/animations';
fadeInAnimation

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
  animations: [fadeInAnimation]
})
export class ThemeToggleComponent {

  curThemeDark = false;

  constructor(private themeService: ThemeService) {}

  toggleTheme() {
    this.curThemeDark = this.themeService.toggleTheme();
  }

}
