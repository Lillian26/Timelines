import { Component, OnInit, Directive, Input, ElementRef } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { element } from 'protractor';

@Component({
  selector: 'app-clist',
  templateUrl: './clist.component.html',
  styleUrls: ['./clist.component.scss']
})
export class ClistComponent implements OnInit {

  accessTemplate=[
    {
      "item" : "Dashboard",
      "value" : false,
      "sections": [
        {
        "item" : "Accounts",
        "type":"check",
        "value" : true
        },
        {
          "item" : "School",
          "type":"check",
          "value" : true
        },
        {
          "item":"Export Dashboard",
          "type":"select",
          "value" : "Detail",
          "options":["All","Summary","Detail"]
        },
        {
          "item":"Maximum Journals Created",
          "type":"number",
          "value" : 0
        }
    ]
    },
    {
    "item" : "Accounts1",
      "value" : true,
      "sections": [
        {
        "item" : "Chart of Accounts",
        "type":"check",
        "value" : true
        },
        {
          "item" : "School1",
          "type":"check",
          "value" : true
        },
        {
          "item":"Export Accounts",
          "type":"select",
          "value" : "All",
          "options":["All","Summary","Detail"]
        },
        {
          "item":"Maximum Amount Journal",
          "type":"number",
          "value" : 0
        }
    ]
    }
];

  accessForm:FormGroup;
  formTemplate:any = this.accessTemplate; 

  constructor(public fbuilder: FormBuilder, private elem: ElementRef) { 
  }

  ngOnInit() {
    let group={} 
    //draw parents   
    this.accessTemplate.forEach(input_template=>{
      
      group[input_template.item]=new FormControl(input_template.value);

      //draw children
      input_template.sections.forEach(innerInput_template=>{
        group[innerInput_template.item]= new FormControl(innerInput_template.value);
      });

    });

    this.accessForm = new FormGroup(group);
    
  }

  onAccessFormSubmit(){
    console.log(this.accessForm.value);    

    //recomposing array from form values..
    let response = [];

    this.accessTemplate.forEach(input_template=>{
      
      let sections = [];
      (input_template.sections).forEach(innerInput_template=>{
        let section = {
          "item" : innerInput_template.item,
          "type": innerInput_template.type,
          "value" : this.accessForm.get(innerInput_template.item).value,
        }
        sections.push(section);
      });
      let parent = {
        "item" : input_template.item,
        "value" : this.accessForm.get(input_template.item).value,
        "sections" : sections
      }
      response.push(parent); 
    });

    console.log(JSON.stringify(response));

  }

  //general change event
  cBChange(cbParent: any, cb:any){

    var isChecked = this.accessForm.get(cb).value;
    var cbChildren = this.accessTemplate.find(x=> x.item === cbParent).sections;

    if(cbParent == cb){
      //on parent change
      this.changechildren(cbChildren, isChecked);
    }
    else{
      //on child change, get all values of children as list
      var listofAllValues = [];
      cbChildren.forEach(element => {
        if(element.type ==='check'){
          listofAllValues.push(this.accessForm.get(element.item).value);
        }
      });
  
      const allTrueE = (element) => element === true;
  
      if(listofAllValues.every(allTrueE)){

        //all true? set parent and children 
        this.accessForm.controls[cbParent].setValue(true);
        this.changechildren(cbChildren, true);
      }    
      else{
        //else re-enable non check children
        cbChildren.forEach(innerElem=> {  

          if(innerElem.type !=='check' && listofAllValues.some(allTrueE)){
            this.accessForm.controls[innerElem.item].enable();
          }
          
        });

        //parent set to false ..no intermediate implementation for now
        this.accessForm.controls[cbParent].setValue(false);
      }
    }

  }

  changechildren(cbChildren, isChecked){
    cbChildren.forEach(innerElem=> {
      
      if(innerElem.type == "check"){
        this.accessForm.get(innerElem.item).setValue(isChecked);
      }else{
          if(isChecked){
            this.accessForm.controls[innerElem.item].enable();
          }else{
            this.accessForm.controls[innerElem.item].disable();
          }
        }
    });
  }

}
