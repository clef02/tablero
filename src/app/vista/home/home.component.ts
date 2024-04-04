import { Component,HostListener} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{

  constructor(private router:Router){
    const storeA = localStorage.getItem('texto');
    const storeB = localStorage.getItem('texto1');
    const storeC = localStorage.getItem('minutos');
    const storeD = localStorage.getItem('segundos');
    const storeF = localStorage.getItem('faltas');
    const storeG = localStorage.getItem('faltas1');
    const storeH = localStorage.getItem('periodo');
    const storeI = localStorage.getItem('gol');
    const storeJ = localStorage.getItem('gol1');
    const storeK = localStorage.getItem('color');
    const storeL = localStorage.getItem('color1');
    const storell = localStorage.getItem('bat');
    const StoreColor = localStorage.getItem('buttonColor');
    const StoreColor1 = localStorage.getItem('buttonColor1');

    if (storeA) {
      this.texto = storeA;
    }
    if (storeB) {
      this.texto1 = storeB;
    }
    if (storeC) {
      this.minutos = +storeC;
    }
    if (storeD) {
      this.segundos = +storeD;
    }
    if (storeF) {
      this.falta1 = +storeF;
    }
    if (storeG) {
      this.falta2 = +storeG;
    }    
    if (storeH) {
      this.periodo = +storeH;
    }
    if (storeI) {
      this.gol1 = +storeI;
    }
    if (storeJ) {
      this.gol2 = +storeJ;
    }
    if (storeK) {
      this.color1 = storeK;
    }
    if (storeL) {
      this.color2 = storeL;
    }
    if (storell) {
      this.newLetter = storell;
    }
    if (StoreColor) {
      this.buttonColor = StoreColor;
    }
    if (StoreColor1) {
      this.buttonColor1 = StoreColor1;
    }
  }


  timeut:any;
  colorbloc:string = 'black';
  timeut2:any;
  colorbloc2:string = 'black';
  ocultar:boolean =true;
  letters: string[] = [''];
  newLetter: string = ''; 
  showInput: boolean = true;
  color1:string ='#000000';
  color2:string ='#000000';
  minutos:number = 0;
  segundos: number = 0;
  timer: any;
  date = new Date();
  disable: boolean = false;
  gol1:number = 0;
  gol2:number = 0;
  periodo:number = 1;
  texto:string = '';
  texto1:string = '';
  falta1:number = 0;
  falta2:number = 0;
  buttonColor:string = 'green';
  buttonColor1:string = 'green';
  counterRed:number = 0;
  redCircleVisible:boolean = false;
  counterRed1:number = 0;
  redCircleVisible1:boolean = false;
  
  
  OcultarFalta(){
    this.ocultar = !this.ocultar;
  }

  addLetter() {
    if (this.newLetter.trim() !== '') {
      this.letters.push(this.newLetter.toUpperCase()); 
      this.newLetter = ''; 
      this.showInput = false;
    }
  }

   transfData(){
    this.router.navigate(['/penals'], {
      queryParams:{
        data1:this.texto,
        data2:this.texto1,
        contador1:this.gol1,
        contador2:this.gol2,
        color1:this.color1,
        color2:this.color2,
      }})
    localStorage.setItem('texto',this.texto)
   }


   minut1Data(){
    this.buttonColor = 'red'; 
    this.stop();
    this.router.navigate(['/minut1'], {
      queryParams:{
        data1:this.texto,
      }})
    localStorage.setItem('texto',this.texto),
    localStorage.setItem('texto1',this.texto1),
    localStorage.setItem('minutos',this.minutos.toString()),
    localStorage.setItem('segundos',this.segundos.toString()),
    localStorage.setItem('faltas',this.falta1.toString()),
    localStorage.setItem('faltas1',this.falta2.toString()),
    localStorage.setItem('periodo',this.periodo.toString()),
    localStorage.setItem('gol',this.gol1.toString()),
    localStorage.setItem('gol1',this.gol2.toString()),
    localStorage.setItem('color',this.color1),
    localStorage.setItem('color1',this.color2),
    localStorage.setItem('bat',this.letters.toString()),
    localStorage.setItem('buttonColor',this.buttonColor)
   }
   EliminarLo(){
    localStorage.removeItem('texto'),
    localStorage.removeItem('texto1'),
    localStorage.removeItem('minutos'),
    localStorage.removeItem('segundos'),
    localStorage.removeItem('faltas'),
    localStorage.removeItem('faltas1'),
    localStorage.removeItem('periodo'),
    localStorage.removeItem('gol'),
    localStorage.removeItem('gol1')
    localStorage.removeItem('color'),
    localStorage.removeItem('color1'),
    localStorage.removeItem('bat'),
    localStorage.removeItem('buttonColor'),
    localStorage.removeItem('buttonColor1')
   }


   minut2Data(){
    this.stop();
    this.buttonColor1 = 'red';
    this.router.navigate(['/minut2'], {
      queryParams:{
        data2:this.texto1,
      }})
    localStorage.setItem('texto',this.texto),
    localStorage.setItem('texto1',this.texto1),
    localStorage.setItem('minutos',this.minutos.toString()),
    localStorage.setItem('segundos',this.segundos.toString()),
    localStorage.setItem('faltas',this.falta1.toString()),
    localStorage.setItem('faltas1',this.falta2.toString()),
    localStorage.setItem('periodo',this.periodo.toString()),
    localStorage.setItem('gol',this.gol1.toString()),
    localStorage.setItem('gol1',this.gol2.toString()),
    localStorage.setItem('color',this.color1),
    localStorage.setItem('color1',this.color2),
    localStorage.setItem('bat',this.letters.toString()),
    localStorage.setItem('buttonColor1',this.buttonColor1)
   }
   Faltas1(){
    if (this.falta1 < 5) {
      this.falta1+=1;
    } else {
      this.falta1 = 0;
    }

    if (this.counterRed === 5) {
      this.redCircleVisible = false;
    }

    if (this.counterRed < 5) {
      this.counterRed += 1;
    }

    if (this.falta1 === 5) {
      this.redCircleVisible = true;
    }

   }
   Faltas1Dec(){
    if (this.falta1 > 0) {
      this.falta1 -= 1;
    }
  }
   Faltas2(){
    if (this.falta2 < 5) {
      this.falta2 += 1;
    } else {
      this.falta2 = 0;
    }
    if (this.counterRed1 === 5) {
      this.redCircleVisible1 = false;
    }

    if (this.counterRed1 < 5) {
      this.counterRed1 += 1;
    }

    if (this.falta2 === 5) {
      this.redCircleVisible1 = true;
    }
   }
   Faltas2Dec(){
    if (this.falta2 > 0) {
      this.falta2 -= 1;
    }
   }
   convertir(){
    this.texto = this.texto.toUpperCase();
   }
   convertir1(){
    this.texto1 = this.texto1.toUpperCase()
   }

   conta1(){
     this.gol1 += 1;
   }
   conta1Dec(){
    if (this.gol1 > 0) {
      this.gol1 -= 1;  
    }
   }
   conta2(){
    this.gol2 += 1;
   }
   conta2Dec(){
    if (this.gol2 > 0) {
      this.gol2 -= 1;
    }
   }


   perio(){
      if (this.periodo < 4) {
        this.periodo += 1;
      } else {
        this.periodo = 1;
      }
      if (this.periodo === 2) {
        this.buttonColor = 'green';
        this.buttonColor1 = 'green';
      }
      if (this.periodo === 3) {
        this.buttonColor = 'green';
        this.buttonColor1 = 'green';
      }
      if (this.periodo === 4) {
        this.buttonColor = 'green';
        this.buttonColor1 = 'green';
      }
      if (this.periodo === 5) {
        this.buttonColor = 'green';
        this.buttonColor1 = 'green';
      }
   }
   perioDec(){
    if (this.periodo > 0) {
      this.periodo -= 1;
    }
   }
  

   cambiaColor(colorN:string){
      this.color1 = colorN;
   }
   cambiaColor2(colorN:string){
      this.color2 = colorN;
   }

   incremet(type: 'm' | 's' ){
     if (type === 'm'){
       if (this.minutos >= 59) return;
       this.minutos += 1
     }else{
       if (this.segundos >= 59) return;
       this.segundos += 1
     }
   }


  @HostListener('document:keydown', ['$event'])
   hand(event: KeyboardEvent){
      switch(event.key){
        case 'Enter':
          this.star()
          break;
        case 'ArrowUp':
          this.incremet('m')
          break;
        case 'ArrowDown':
          this.decremet('m')
          break;
        case 'Alt':
          this.stop()
          break;
        case '0':
          this.reset()
          break;
        case '1':
          this.conta1() 
          break;
        case 'z':
          this.conta1Dec()
          break;
        case '2':
          this.conta2()
          break;
        case 'x':
          this.conta2Dec()
          break;
        case '3':
          this.perio()
          break;
        case 'c':
          this.perioDec()
          break;
        case '4':
          this.Faltas1()
          break;
        case 'v':
          this.Faltas1Dec()
          break;
        case '5':
          this.Faltas2()
          break;
        case 'b':
          this.Faltas2Dec()
          break;
        case '6':
          this.EliminarLo()
          break;
      }
   }

  star(){
    if( this.minutos > 0.0 || this.segundos > 0.0 ){
      this.disable =true;
      this.update();
      if( this.segundos > 0 ){
        this.timer = setInterval(() => {
          this.update();
        },1000);
      }
    }
  }
   decremet(type: 'm' | 's' ){
     if (type === 'm'){
       if (this.minutos <= 0) return;
       this.minutos -= 1
     }else{
       if (this.segundos <= 0) return;
       this.segundos -= 1
     }
   }
   update(){
     this.date.setMinutes(this.minutos);
     this.date.setSeconds(this.segundos);
     this.date.setMilliseconds(0);
     const time = this.date.getTime();
     this.date.setTime(time - 1000);

     this.minutos = this.date.getMinutes();
     this.segundos = this.date.getSeconds();

     if ( this.date.getMinutes() === 0 && this.date.getSeconds() === 0){
       clearInterval(this.timer);
     }
   }

   stop(){
     this.disable = false;
     clearInterval(this.timer);
   }

  
   reset(){
     this.falta1 = 0;
     this.falta2 = 0;
   }




  
}
