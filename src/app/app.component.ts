import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'LabAssignmentAngular3';
  doAction(event:any){
    console.log("Available in Store: "+event.target.value);
  }  
  onClickSubmit(result:any):any {
    if(!result.ID)
    alert("ID is required !!");
    if(!result.Name)
    alert("Name is required !!");
    if(!result.Cost)
    alert("Cost is required !!");
    if(!result.Online)
    alert("Select an option !!");
    if(!result.Category)
    alert("Select Category !!");
    if(!result.Availability)
    alert("Select Product availability!!");
    console.log("Product ID: "+result.ID+", Product Name: "+result.Name+", Product Cost: "+result.Cost+", Product Online: "+result.Online+", Product Category: "+result.Category); 
 }
}