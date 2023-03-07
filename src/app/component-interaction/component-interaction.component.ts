import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-component-interaction',
  templateUrl: './component-interaction.component.html',
  styleUrls: ['./component-interaction.component.scss']
})
export class ComponentInteractionComponent implements OnInit {

  @Input() users: any[] | undefined;
  @Input('name') name: string | undefined;
  @Input('age') tuoi: number | undefined;
  @Input('gender') gioitinh: string | undefined;
  private _subject!: string;

  public txtFullName!: string;
  public txtPhone!: number;
  @Output('logName') onHandelFullName = new EventEmitter<string>();
  @Output() onHandelPhone = new EventEmitter<number>();

  ngOnInit(): void {
    console.log(this.users);
  }

  @Input()
  set subject(subject: string) {
    this._subject = subject;
  }

  get subject(): string {
    return this._subject;
  }

  onHandelClick() {
    this.onHandelFullName.emit(this.txtFullName);
    this.onHandelPhone.emit(this.txtPhone);
  }
  
}
