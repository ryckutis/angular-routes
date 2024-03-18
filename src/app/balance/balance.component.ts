import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-balance',
  standalone: true,
  imports: [],
  templateUrl: './balance.component.html',
  styleUrl: './balance.component.scss'
})
export class BalanceComponent {
  @Input() balance: number = 0;
  @Output() withdraw = new EventEmitter<number>();
  @Output() deposit = new EventEmitter<number>();
}

