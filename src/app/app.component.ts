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
  onClickSubmit(result:any) {
    console.log("Product ID: "+result.ID+", Product Name: "+result.Name+", Product Cost: "+result.Cost+", Product Online: "+result.Online+", Product Category: "+result.Category); 
 }
}