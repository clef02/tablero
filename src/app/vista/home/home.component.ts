import { Component,HostListener} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{


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

   convertir(){
    this.texto = this.texto.toUpperCase();
   }
   convertir1(){
    this.texto1 = this.texto1.toUpperCase()
   }

   conta1(){
     this.gol1 += 1;
   }

   conta2(){
    this.gol2 += 1;
   }

   perio(){
    this.periodo += 1;
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
        case 'Shift':
          this.stop()
          break;
        case '0':
          this.reset()
          break;
        case '1':
          this.conta1() 
          break;
        case '2':
          this.conta2()
          break;
        case '3':
          this.perio()
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
     this.minutos = 0;
     this.segundos = 0;
     this.gol1 = 0;
     this.gol2 = 0;
   }




  
}
