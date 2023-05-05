import { Router } from '@angular/router';
import { Component, Directive, ElementRef } from '@angular/core';
import { FormBuilder, FormControl, NgForm } from '@angular/forms';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent {
  constructor(private router: Router) {}

  onSubmit(form: NgForm) {
    this.router.navigate(['search', form.value.title]);
    form.reset();
  }
}
