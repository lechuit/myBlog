import {AfterContentInit, AfterViewInit, Component, ElementRef, OnInit, ViewChild,Renderer2} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit, AfterViewInit{


  constructor(public renderer: Renderer2) { }

  ngOnInit(): void {
    //this.myNameElem.nativeElement.innerHTML = "I am changed by ElementRef & ViewChild";
  }
  ngAfterViewInit() {

  }
}
