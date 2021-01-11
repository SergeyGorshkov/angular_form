import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ControlContainer } from '@angular/forms';
import datepicker from 'js-datepicker';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.scss'],
})
export class CalcComponent implements OnInit, AfterViewInit {
  picker: any;

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.initDatepicker();
  }

  getValue(name: string): string {
    return this.controlContainer.control.get(name).value;
  }

  initDatepicker() {
    this.picker = datepicker('.datepicker', {
      formatter: (input, date, _) => {
        input.value = date.toLocaleDateString();
      },
      startDay: 1,
      customDays: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
      customMonths: [
        'Январь',
        'Февраль',
        'Март',
        'Апрель',
        'Май',
        'Июнь',
        'Июль',
        'Август',
        'Сентябрь',
        'Октябрь',
        'Ноябрь',
        'Декабрь',
      ],
      onSelect: (_, date: Date) => {
        this.controlContainer.control
          .get('dateBegin')
          .setValue(date.toISOString());
      },
    });
  }
}
