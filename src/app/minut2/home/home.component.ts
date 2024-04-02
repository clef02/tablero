import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  texto:string = '';
  minutos:number = 1;
  segundos: number = 0;
  timer: any;
  date = new Date();
  disable: boolean = false;

  constructor(private route:ActivatedRoute,private router:Router){
    this.route.queryParams.subscribe(params => {
      this.texto = params['data2'];
    })
  }

  ngOnInit() {
    this.star();
    setTimeout(() => {
      this.router.navigate(['/'])
    }, 60000);
  }  

  convertir(){
    this.texto = this.texto.toUpperCase();
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
  
  incremet(type: 'm' | 's' ){
    if (type === 'm'){
      if (this.minutos >= 59) return;
      this.minutos += 1
    }else{
      if (this.segundos >= 59) return;
      this.segundos += 1
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

}
