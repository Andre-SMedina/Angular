import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  //testando estilos
  color = 'yellow';
  size = 30 + 'px';
  background = 'black';
  width = 300 + 'px';

  //testanto classes
  classes = ['small-title', 'green-title'];
  underline = 'underline-title';
}
