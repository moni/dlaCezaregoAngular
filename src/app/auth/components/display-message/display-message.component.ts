import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-display-message',
  templateUrl: './display-message.component.html',
  styleUrls: ['./display-message.component.css']
})
export class DisplayMessageComponent {
  @Input() errorMsg: string;
  @Input() displayError: boolean;

}
