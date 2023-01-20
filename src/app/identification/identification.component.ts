import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-identification',
  templateUrl: './identification.component.html',
  styleUrls: ['./identification.component.scss']
})
export class IdentificationComponent implements OnInit{
  form: FormGroup;
  submitted = false;

  constructor(private formBuilder : FormBuilder, private router: Router){
    this.form = this.formBuilder.group({
      type:[]
    });
  }

  ngOnInit(): void {
  }

  get f() { return this.form.controls; }

  public userType(){
    console.log(this.form.value['type'])
    if(this.form.value['type']=="Client"){
      this.router.navigateByUrl("/connexion client");
    }
    if(this.form.value['type']=="Entreprise"){
      this.router.navigateByUrl("/connexion admin");
    }
    
  }

  

}
export class SlideToggleFormsExample {
  isChecked = true;
  formGroup = this._formBuilder.group({
    enableWifi: '',
    acceptTerms: ['', Validators.requiredTrue],
  });

  constructor(private _formBuilder: FormBuilder) {}

  alertFormValues(formGroup: FormGroup) {
    alert(JSON.stringify(formGroup.value, null, 2));
  }
}
