import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
export class PipeComponent {
  public so: number = 15.4;
  public text: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`;
  public products: any[] = [
    {
      id: 1,
      name: 'iphone 11',
      status: true,
      price: '500'
    },
    {
      id: 2,
      name: 'macbook m1',
      status: false,
      price: '600'
    },
    {
      id: 3,
      name: 'porsche cayenne',
      status: true,
      price: '4000'
    },
    {
      id: 4,
      name: 'bitcoin',
      status: false,
      price: '800'
    },
    {
      id: 14,
      name: 'eth',
      status: false,
      price: '1000'
    }
  ];
  public inpId!: number;
  public inpName!: string;
  public inpStatus!: boolean;
  public sortBy: string | undefined;
  public sortValue: number = 1;

  public onSort(data: string): void {
    this.sortBy = data;
    this.sortValue = -this.sortValue
  }
}
