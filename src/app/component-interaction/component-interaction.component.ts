import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {

  @Input('users') user: any[] | undefined;
  @Input('name') name: string | undefined;
  @Input('age') tuoi: number | undefined;
  @Input('gender') gioitinh: string | undefined;
  private _subject!: string;

  ngOnInit(): void {
    console.log(this.user);
  }

  @Input()
  set subject(subject: string) {
    this._subject = subject;
  }

  get subject() {
    return this._subject;
  }
  
}
