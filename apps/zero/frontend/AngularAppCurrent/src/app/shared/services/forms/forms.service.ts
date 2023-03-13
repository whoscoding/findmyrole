import { Injectable } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { ENV } from '@env/environment';
@Injectable({
  providedIn: 'root'
})
export class FormsService {

  constructor(

  ) { }

  profileOneMain={
    mainForm:new FormGroup({
      [ENV.profileOneMain.mainForm.jobDescFormControlName]:new FormControl("",[Validators.required]),
      [ENV.profileOneMain.mainForm.resumeFormControlName]:new FormArray([]),
    })
  }
}
