import { DatePipe, DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TemperaturePipe } from './temperature.pipe';
import { ShortPipe } from './short.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DatePipe, DecimalPipe, TemperaturePipe, ShortPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentDate = new Date()
  currentTemperature ={
    berlin :4.2749812,
    newYork : 18.1214,
    paris:72.1209001,
    chicago:65.0775238,
  }

  historicTemperatures =[ 
    25,  37,19, -4,28,21,19,28,33,31,9,11,5,-12,-5
  ];
  constructor(){
    this.historicTemperatures.sort((a,b)=>{ return a-b 

    })
  }
 
  onReset(index:number){
    this.historicTemperatures[index] = 18;
  //   const newTmps = [...this.historicTemperatures]
  // newTmps[index]= 18;
  // this.historicTemperatures = newTmps
  }
  // trackByTemperature(index: number, temperature: number | string): number | string {
  //   return temperature;
  // }
  

}
