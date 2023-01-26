import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent {
  color = 'yellow';
  size = 30 + 'px';
  background = 'black';
  width = 200 + 'px';

  classes = ['small-title', 'big-title'];
}
