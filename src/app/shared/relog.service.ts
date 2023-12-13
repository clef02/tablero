import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RelogService {


  private minutos:number = 0;
  private segundos: number = 0;
  public timer: any;
  private date = new Date();
  public disable: boolean = false;


  incremet(type: 'm' | 's' ){
    if (type === 'm'){
      if (this.minutos >= 59) return;
      this.minutos += 1;
    }else{
      if (this.segundos >= 59) return;
      this.segundos += 1
    }
  }
  // decremet(type: 'm' | 's' ){
  //   if (type === 'm'){
  //     if (this.minutos <= 0) return;
  //     this.minutos -= 1
  //   }else{
  //     if (this.segundos <= 0) return;
  //     this.segundos -= 1
  //   }
  // }
  // update(){
  //   this.date.setMinutes(this.minutos);
  //   this.date.setSeconds(this.segundos);
  //   this.date.setMilliseconds(0);
  //   const time = this.date.getTime();
  //   this.date.setTime(time - 1000);

  //   this.minutos = this.date.getMinutes();
  //   this.segundos = this.date.getSeconds();

  //   if ( this.date.getMinutes() === 0 && this.date.getSeconds() === 0){
  //     clearInterval(this.timer);
  //   }
  // }

  // stop(){
  //   this.disable = false;
  //   clearInterval(this.timer);
  // }

  
  // reset(){
  //   this.minutos = 0;
  //   this.segundos = 0;
  // }


  // star(){
  //   if( this.minutos > 0.0 || this.segundos > 0.0 ){
  //     this.disable =true;
  //     this.update();
  //     if( this.segundos > 0 ){
  //       this.timer = setInterval(() => {
  //         this.update();
  //       },1000);
  //     }
  //   }
  // }

}
