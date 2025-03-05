import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkThemeKey = 'dark-theme';

  constructor() {
    this.loadTheme();
  }

  toggleTheme() {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem(this.darkThemeKey, JSON.stringify(isDark));
    return isDark;
  }


  private loadTheme() {
    const savedTheme = localStorage.getItem(this.darkThemeKey);
    if (savedTheme && JSON.parse(savedTheme)) {
      document.body.classList.add('dark-theme');
    }
  }
}
