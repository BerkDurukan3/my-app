import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  parentForm: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.parentForm = this.fb.group({
      tckn: [
        '',
        [
          Validators.required,
          Validators.pattern('^[0-9]*$'),
          Validators.minLength(11),
          Validators.maxLength(11),
        ],
      ],
      name: ['', Validators.required],
      surname: ['', Validators.required],
      site: [''],
      city: ['', Validators.required],
    });
  }

  onClick() {
    console.info('TCKN: ' + this.parentForm.value.tckn);
    console.info('Adı: ' + this.parentForm.value.name);
    console.info('Soyadı: ' + this.parentForm.value.surname);
    console.info('Şehir: ' + this.parentForm.value.city);
    console.info('Web Sitesi: ' + this.parentForm.value.site);
  }
}
