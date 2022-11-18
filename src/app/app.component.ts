import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';
import { ApiuserService } from './serivices/apiuser.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showNav=true;
  otherScroll=window.pageYOffset;
  x=fromEvent(document, 'scroll')

loginbtn:boolean;
logoutbtn:boolean;

constructor(private dataService: ApiuserService) {
dataService.getLoggedInName.subscribe(name => this.changeName(name));
if(this.dataService.isLoggedIn())
{
console.log("loggedin");
this.loginbtn=false;
this.logoutbtn=true
}
else{
this.loginbtn=true;
this.logoutbtn=false
}
this.x.subscribe((e: any)=>{
  const scroll=e.target.documentElement.scrollTop;

  if(scroll>100){
    this.showNav=false;}
  if(scroll<this.otherScroll){
    this.showNav=true;}
  this.otherScroll=scroll;

})

}

private changeName(name: boolean): void {
this.logoutbtn = name;
this.loginbtn = !name;
}
logout()
{
this.dataService.deleteToken();
window.location.href = window.location.href;
}
}
