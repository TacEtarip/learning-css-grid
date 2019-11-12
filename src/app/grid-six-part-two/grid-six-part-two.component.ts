import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-six-part-two',
  templateUrl: './grid-six-part-two.component.html',
  styleUrls: ['./grid-six-part-two.component.css']
})
export class GridSixPartTwoComponent implements OnInit {

  revealed = false;

  constructor() { }

  ngOnInit() {
  }

  triggerReveal() {
    this.revealed = !this.revealed;
  }
  triggerRevealSpecial() {
    if (this.revealed) {
      this.revealed = false;
    }
  }

}
