import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid-six-part-one',
  templateUrl: './grid-six-part-one.component.html',
  styleUrls: ['./grid-six-part-one.component.css']
})
export class GridSixPartOneComponent implements OnInit {

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
