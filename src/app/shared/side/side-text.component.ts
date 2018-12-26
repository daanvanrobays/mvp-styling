import { Component, Input } from '@angular/core';

@Component({
  selector: 'side-text',
  templateUrl: './side-text.component.html',
  styleUrls: ['./side-text.component.scss']
})

export class SideTextComponent {
  @Input() left: string = 'MVP';
  @Input() right: string = 'MVP STYLING';
  @Input() color: string;
}
