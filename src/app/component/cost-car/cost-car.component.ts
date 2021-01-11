import { Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';

import { NouiFormatter } from 'ng2-nouislider';

@Component({
  selector: 'app-cost-car',
  templateUrl: './cost-car.component.html',
  styleUrls: ['./cost-car.component.scss'],
})
export class CostCarComponent implements OnInit {
  format: NouiFormatter = {
    from: function (value) {
      const num = parseInt(value.match(/\d+/)[0]);
      if (Number.isInteger(num)) return num;
    },
    to: function (value) {
      return `${Math.round(value)} ₽`;
    },
  };

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {
    this.controlContainer.control
      .get('currentCost')
      .valueChanges.subscribe((value) =>
        this.controlContainer.control
          .get('currentCostInput')
          .setValue(`${value} ₽`)
      );
  }

  checkValue(name: string): boolean {
    const value = this.controlContainer.control.get(name).value;
    return !value;
  }
}
