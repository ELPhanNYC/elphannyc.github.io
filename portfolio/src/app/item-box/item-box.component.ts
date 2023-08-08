import { Component } from '@angular/core';

@Component({
  selector: 'app-item-box',
  templateUrl: './item-box.component.html',
  styleUrls: ['./item-box.component.scss']
})
export class ItemBoxComponent {
  constructor(){

  }
  languages = [{src:"../../assets/icons/python_logo.png", title: "Python"},{src:"../../assets/icons/shorter_java_logo.png", title: "Java"},{src:"../../assets/icons/scala_logo.png", title: "Scala"},
  {src:"../../assets/icons/c_logo.png", title: "The C Programming Language"},{src:"../../assets/icons/csharp_logo.png", title: "C#"},{src:"../../assets/icons/angular_logo.png", title: "Angular"},
  {src:"../../assets/icons/scss_logo.png", title: "SCSS"},
  {src:"../../assets/icons/ts_logo.png", title: "TypeScript"},{src:"../../assets/icons/html_logo.png", title: "HTML"},{src:"../../assets/icons/css_logo.png", title: "CSS"},
  {src:"../../assets/icons/js_logo.webp", title: "JavaScript"}];

  tools = [{src:"../../assets/icons/git_logo.png", title: "Git"},{src:"../../assets/icons/ci-cd.png", title: "CI/CD Pipelines"},{src:"../../assets/icons/docker_logo.webp", title: "Docker"},
  {src:"../../assets/icons/net_logo.png", title: ".NET"},
  {src:"../../assets/icons/bottle_icon_w:o_bg.png", title: "Bottle Web Framework"},{src:"../../assets/icons/sqlite-square-icon.png", title: "SQLite3"},
  {src:"../../assets/icons/yaml_logo.png", title: "YAML"}]

}
