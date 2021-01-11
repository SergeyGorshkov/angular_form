import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface IInfo {
  label: string;
  name: string;
  value: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public formCar: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formCar = this.fb.group({
      info: this.fb.group({
        vin: [{ value: '', disabled: true }],
        mark: [{ value: 'Citroen', disabled: true }],
        model: [{ value: 'Иванович', disabled: true }],
        modification: [{ value: 'Basic', disabled: true }],
        year: [{ value: '2012', disabled: true }],
        pts: [{ value: 'АА 4567 899002', disabled: true }],
        category: [{ value: 'В', disabled: true }],
      }),
      cost: this.fb.group({
        currentCost: [110000],
        currentCostInput: [{ value: '110000 ₽', disabled: true }],
        city: [''],
        age: [''],
        experience: [''],
      }),
      calc: this.fb.group({
        dateBegin: [null],
        dateEnd: ['22.09.2020'],
        amount: ['8 059, 09 ₽'],
        franchise: ['100 000 ₽'],
      }),
    });
  }

  ngOnInit(): void {}
}
