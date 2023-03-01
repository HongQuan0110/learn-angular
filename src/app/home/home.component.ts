import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public name: string = 'lvhquan';
  public linkYoutube: string = 'https://www.youtube.com/';
  public title: string = 'Click go to ytb';
  public isNonDecoration: boolean = true;
  public color: string = 'cyan';
  public count: number = 0;
  public keyword: string = '';
  public result: string = '';

  onClick = function(params: any) {
    console.log(params.target.innerHTML)
  }

  onClickCount() {
    this.count++;
  }

  onKeyUp(params:any) {
    console.log(params.target.value);
    this.keyword = params.target.value
  }

  onKeyUpEnter(event:any) {
    console.log(event.target.value);
    this.result = event.target.value;
  }

}
