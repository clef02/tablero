import { Component, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  texto:string = '';
  texto1:string = '';
  contador:number = 0;
  contador1:number = 0;
  color1:string ='#000000';
  color2:string ='#000000';
  backColor1:string = 'white';
  backColor2:string = 'white';
  backColor3:string = 'white';
  backColor4:string = 'white';
  backColor5:string = 'white';
  backColor6:string = 'white';
  backColor7:string = 'white';
  backColor8:string = 'white';
  backColor9:string = 'white';
  backColor0:string = 'white';
  backColor11:string = 'white';
  backColor12:string = 'white';
  backColor13:string = 'white';
  backColor14:string = 'white';
  backColor15:string = 'white';
  backColor16:string = 'white';
  backColor17:string = 'white';
  backColor18:string = 'white';
  backColor19:string = 'white';
  backColor20:string = 'white';
  visibCirc:boolean = false;
  visibCirc1:boolean = false;

  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params =>{
        this.texto = params['data1'];
        this.texto1 = params['data2'];
        this.color2 = params['color2'];
        this.color1 = params['color1'];
    })

  }
  visibleCi(){
    this.visibCirc = true;
  }
  visibleCi1(){
    this.visibCirc1 = true;
  }

  conta1(){
    this.contador += 1; 
  }
  conta2(){
    this.contador1 += 1; 
  }
  decre1(){
    if (this.contador > 0) {
      this.contador -= 1;
    }
  }
  decre2(){
    if (this.contador1 > 0) {
      this.contador1 -= 1;      
    } 
  }


  convertir(){
    this.texto = this.texto.toUpperCase();
   }
   convertir1(){
    this.texto1 = this.texto1.toUpperCase()
   }

   @HostListener('document:keydown', ['$event'])
   hand(event: KeyboardEvent){
    switch (event.key){
      case '1':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor1 = 'green';
        }
        break;
      case '2':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor2 = 'green';
        }
        break;
      case '3':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor3 = 'green';
        }
        break;
      case '4':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor4 = 'green';
        }
        break;
      case '5':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor5 = 'green';
        }
        break;
      case '6':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor11 = 'green';
        }
        break;
      case '7':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor12 = 'green';
        }
        break;
      case '8':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor13 = 'green';
        }
        break;
      case '9':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor14 = 'green';
        }
        break;
      case '0':
        if (!event.ctrlKey) {
          this.contador += 1; 
          this.backColor15 = 'green';
        }
        break;
      case 'a':
        if (!event.ctrlKey) {
          this.contador1 += 1; 
          this.backColor6 = 'green';
        }
        break;
      case 's':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor7 = 'green'
        }
        break;
      case 'd':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor8 = 'green';
        }
        break;
      case 'f':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor9 = 'green';
        }
        break;
      case 'g':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor0 = 'green'
        }
        break;
      case 'h':
        if (!event.ctrlKey) {
          this.contador1 += 1; 
          this.backColor16 = 'green';
        }
        break;
      case 'j':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor17 = 'green'
        }
        break;
      case 'k':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor18 = 'green';
        }
        break;
      case 'l':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor19 = 'green';
        }
        break;
      case 'm':
        if (!event.ctrlKey) {
          this.contador1 += 1;
          this.backColor20 = 'green'
        }
        break;
      case 'z':
        this.decre1();
        break;
      case 'x':
        this.decre2();
        break;
      case 'c':
        this.visibleCi();
        this.visibleCi1();
        break;
    }
    if (event.ctrlKey) {
      switch(event.key) {
        case '1':
          this.backColor1 = 'red';
          break;
        case '2':
          this.backColor2 = 'red';
          break;
        case '3':
          this.backColor3 = 'red';
          break;
        case '4':
          this.backColor4 = 'red';
          break;
        case '5':
          this.backColor5 = 'red';
          break;
        case 'a':
          this.backColor6 = 'red';
          event.preventDefault();
          break;
        case 's':
          this.backColor7 = 'red';
          event.preventDefault();
          break;
        case 'd':
          this.backColor8 = 'red';
          event.preventDefault();
          break;
        case 'f':
          this.backColor9 = 'red';
          event.preventDefault();
          break;
        case 'g':
          this.backColor0 = 'red';
          event.preventDefault();
          break;
        case '6':
          this.backColor11 = 'red';
          break;
        case '7':
          this.backColor12 = 'red';
          break;
        case '8':
          this.backColor13 = 'red';
          break;
        case '9':
          this.backColor14 = 'red';
          break;
        case '0':
          this.backColor15 = 'red';
          break;
        case 'h':
          this.backColor16 = 'red';
          event.preventDefault();
          break;
        case 'j':
          this.backColor17 = 'red';
          event.preventDefault();
          break;
        case 'k':
          this.backColor18 = 'red';
          event.preventDefault();
          break;
        case 'l':
          this.backColor19 = 'red';
          event.preventDefault();
          break;
        case 'm':
          this.backColor20 = 'red';
          event.preventDefault();
          break;
      }
   }
  }
}
