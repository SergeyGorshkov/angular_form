import { Component, Input, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormBuilder,
  FormControl,
  FormGroup,
} from '@angular/forms';

interface IInfo {
  label: string;
  name: string;
  value: string;
}

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() form: FormGroup;

  fields: IInfo[] = [
    { label: 'VIN-номер', name: 'vin', value: 'Z8TNC5FS9CM507846' },
    { label: 'Марка', name: 'mark', value: 'Citroen' },
    { label: 'Модель', name: 'model', value: 'Иванович' },
    {
      label: 'Модификация / комплектация',
      name: 'modification',
      value: 'Basic',
    },
    { label: 'Год выпуска', name: 'year', value: '2012' },
    { label: 'ПТС / СТС', name: 'pts', value: 'АА 4567 899002' },
    { label: 'Категория ТС', name: 'category', value: 'В' },
  ];

  constructor(public controlContainer: ControlContainer) {}

  ngOnInit(): void {}

  setDefault() {
    const defaultValue = this.fields.reduce(
      (acc, { name, value }) => ({ ...acc, [name]: value }),
      {}
    );
    this.controlContainer.control.patchValue(defaultValue);
  }
}
