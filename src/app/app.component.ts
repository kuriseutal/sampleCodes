import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <!--<style>
  table, th, td {
      border: 1px solid black;
      border-collapse: collapse;
  }
  </style>-->
 <div>
      <ng-container
        [ngTemplateOutlet]="tmpl"
        [ngTemplateOutletContext]="ctx">
      </ng-container>
      <ng-template #tmpl let-name let-location="loc">
        {{name}} : {{location}}
      </ng-template>
    </div>
  <table  style="width:100%" >
    <tr>
      <th>Topic</th>
      <th>Demo</th>
    </tr>
    <tr >
      <td>Interpolation</td>
      <td>{{name}}</td>
    </tr>
    <tr>
      <td>Arithmetic Expression</td>
      <td>{{5+5}}</td>
    </tr>
    <tr>
      <td>Boolean Expression</td>
      <td>{{checkString ? 'Gakung' : 'Nyeongan'}}</td>
    </tr>
    <tr>
      <td>Property Binding</td>
      <td><input type='text' [value] = 'namee'></td>
    <tr>
    </tr>
    <tr>
      <td>Event Binding</td>
      <td><input type='text' [value] = 'namee' 
      (input) = 'onInput($event)'> {{msg}}</td>
    </tr>
    <tr>
      <td>Two-way Data Binding</td>
      <td><input type='text' [(ngModel)] = "nameee">
      <br>See this text change as you type --> {{nameee}}</td>
    </tr>
    <tr>
      <td>#ref variables</td>
      <td><input type='text' #refName>
      <button (click)="print(refName.value)">Print</button>
      <br>See your text appear as you click --> {{printName}}</td>
    </tr>
    <tr>
      <td>*ngIf</td>
      <td><button (click)="countClick()">
      Click Me 5 times</button>
      <div *ngIf = "clickCounter == 5 ">Congrats</div></td>
    </tr>
    <tr>
      <td>*ngFor</td>
      <td><div *ngFor = "let s of stringCollection"q>{{s}}</div></td>
    </tr>
    <tr>
      <td>Slice from 3rd character using pipes</td>
      <td>{{sliceText | slice: 3}}</td>
    </tr>
    <tr>
      <td>Slice 3rd and 4th using pipes</td>
      <td>{{sliceText | slice: 3: 5}}</td>
    </tr>
    <tr>
      <td>Set allowable whole number and decimal places using pipes</td>
      <td>{{2.2222 | number:'2.1-2' }}</td>
    </tr>
    <tr>
      <td>Put percentage</td>
      <td>{{.33 | percent}}</td>
    </tr>
    <tr>
      <td>Put currency</td>
      <td>{{55 | currency}} or {{55 |currency:'KRW'}} or {{55 | currency:'EUR' :'code'}}</td>
    </tr>
    <tr>
      <td>COMPLETE DATE
      <br>May 24, 2018
      <br>5/24/18, 11:57 AM
      <br>5/24/18
      <br>12:00 PM</td>
      <td>
{{todaysDate}} 
<br>{{todaysDate | date}} 
<br>{{todaysDate | date:'short'}} 
<br>{{todaysDate | date:'shortDate'}} 
<br>{{todaysDate | date:'shortTime' }} </td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
    <tr>
      <td></td>
      <td></td>
    </tr>
  </table>
    
  `
})
export class AppComponent {
  name: string;

  checkString: boolean;
  namee: string;
  nameee: string;
  msg: string;
  // refName: string;
  printName: string;

  clickCounter: number;

  stringCollection: string[];

  sliceText: string = "abcdefghijklmnopqrstuvwxyz";

  todaysDate = new Date();

  ctx = {
    $implicit: 'todd', loc: 'UK'
  };

  constructor() {
    this.name = 'Crystal';

    if (this.name == 'Crystal') {
      this.checkString = true;
    }

    this.checkString = false;

    this.namee = 'Danielle';
    this.nameee = 'Two way binding demo';

    this.clickCounter = 0;

    this.stringCollection = ['a', 'b', 'c', 'd'];
  }

  onInput(event) {
    this.msg = 'Input is changed';
  }

  print(refName) {
    console.log('success');
    this.printName = refName;
  }

  countClick() {
    this.clickCounter += 1;

  }

}