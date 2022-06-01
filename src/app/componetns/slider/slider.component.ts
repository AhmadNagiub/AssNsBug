import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  index=0;
  slider=[
    {
      img:'https://svgshare.com/i/hrA.svg',
      text:'accelerate your entire mobile team workflow'
    },
    {
      img:'https://svgshare.com/i/hrB.svg',
      text:'the most comprehensive bug reporting tool for mobile apps'
    },
    {
      img:'https://svgshare.com/i/hrV.svg',
      text:'secure crash reporting with real-time alerts'
    },
  ]
  active={'background-color':'white'}
  not={'background-color':'gray'}
  constructor() { }

  ngOnInit(): void {
    setInterval(()=>{
      this.index +=1
      if(this.index == 3){
        this.index=0
      }
    },2500)
  }

  
  
}
