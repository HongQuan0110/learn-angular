import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'learn-angular';
  public ten: string = 'lvhquan';
  public age: number = 26;
  public arrayUser: any[] = [
    {
      id: 1,
      name: 'a'
    },
    {
      id: 2,
      name: 'b'
    },
    {
      id: 3,
      name: 'c'
    },
    'abc'
  ];
  public fullName: string | undefined;
  public phone: number | undefined;

  getFullName(data: string, ...rest: any[]): void {
    console.log(data, rest);
    this.fullName = data;
  }

  getPhone(phone: number): void {
    this.phone = phone;
  }
}
