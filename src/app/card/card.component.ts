import { Component } from '@angular/core';
import { data } from 'src/assets/data';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
collections=data
}