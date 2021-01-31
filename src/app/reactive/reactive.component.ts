import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.sass']
})
export class ReactiveComponent implements OnInit {

  name = new FormControl('');
  loginGroup: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.loginGroup = new FormGroup(
    //   {
    //     'username': new FormControl('',[Validators.required]),
    //     'password': new FormControl('',[Validators.required,Validators.maxLength(3)]),
    //     'address': new FormGroup({
    //       'street': new FormControl('',[Validators.required]),
    //       'city': new FormControl('',[Validators.required]),
    //       'pincode': new FormControl('',[Validators.required])
    //     })
    //   }
    // )

    this.loginGroup = this.fb.group({
      'username': ['', Validators.required],
      'password': ['', [Validators.required, Validators.maxLength(3)]],
      'address': this.fb.group({
        'street': ['', [Validators.required]],
        'city': ['', Validators.required],
        'pincode': ['', Validators.required]
      }),
      'names': this.fb.array([])
    })

    setTimeout(()=>{
      this.loginGroup.patchValue({
        username:"pranav",
        address:{
          street:"sample programmed"
        }
      })
    },3000)

    // this.name.setValidators(Validators.required);
    // console.log(this.name.valid);
    // this.name.valueChanges.subscribe((value)=>{
    //   console.log(value);
    //   console.log(this.name.valid);
    // });



    // setTimeout(()=>{
    //   // sthis.name.setValue("Changed programatically");
    // },3000)
  }

  addElement(){
      (this.loginGroup.controls['names'] as FormArray).push(new FormControl(''));
  }

  login() {
    if (this.loginGroup.valid) {
      console.log(this.loginGroup.value);
    } else {
      console.log("Some thing wrong in the data")
    }
  }

}
