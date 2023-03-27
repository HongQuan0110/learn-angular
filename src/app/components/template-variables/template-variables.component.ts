import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-variables',
  templateUrl: './template-variables.component.html',
  styleUrls: ['./template-variables.component.scss']
})
export class TemplateVariablesComponent {
  @ViewChild('txtName') name: ElementRef | undefined;

  onGetData(txtName: string, txtPhone: string): void {
    console.log(txtName, txtPhone);
  }

  onGetDataComp(): void {
    console.log(this.name?.nativeElement.value, this.name);
  }
}
