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
  backColor21:string = 'white';
  backColor22:string = 'white';
  backColor23:string = 'white';
  backColor24:string = 'white';
  visibCirc2:boolean = false;
  visibCirc5:boolean = false;
  visibCirc7:boolean = false;

  colorVerde(){
    this.backColor1 = 'green';
    this.contador += 1;
  }
  colorRojo(){
    this.backColor1 = 'red';
  }
  colorVerde1(){
    this.backColor2 = 'green';
    this.contador += 1;
  }
  colorRojo1(){
    this.backColor2 = 'red';
  }
  colorVerde2(){
    this.backColor3 = 'green';
    this.contador += 1;
  }
  colorRojo2(){
    this.backColor3 = 'red';
  }
  colorVerde3(){
    this.backColor4 = 'green';
    this.contador += 1;
  }
  colorRojo3(){
    this.backColor4 = 'red';
  }
  colorVerde4(){
    this.backColor5 = 'green';
    this.contador += 1;
  }
  colorRojo4(){
    this.backColor5 = 'red';
  }
  colorVerde5(){
    this.backColor11 = 'green';
    this.contador += 1;
  }
  colorRojo5(){
    this.backColor11 = 'red';
  }
  colorVerde6(){
    this.backColor12 = 'green';
    this.contador += 1;
  }
  colorRojo6(){
    this.backColor12 = 'red';
  }
  colorVerde7(){
    this.backColor13 = 'green';
    this.contador += 1;
  }
  colorRojo7(){
    this.backColor13 = 'red';
  }
  colorVerde8(){
    this.backColor14 = 'green';
    this.contador += 1;
  }
  colorRojo8(){
    this.backColor14 = 'red';
  }
  colorVerde9(){
    this.backColor15 = 'green';
    this.contador += 1;
  }
  colorRojo9(){
    this.backColor15 = 'red';
  }
  colorVerde21(){
    this.backColor21 = 'green';
    this.contador += 1;
  }
  colorRojo21(){
    this.backColor21 = 'red';
  }
  colorVerde22(){
    this.backColor22 = 'green';
    this.contador += 1;
  }
  colorRojo22(){
    this.backColor22 = 'red';
  }




  colorVerde10(){
    this.backColor6 = 'green';
    this.contador1 += 1;
  }
  colorRojo10(){
    this.backColor6 = 'red';
  }
  colorVerde11(){
    this.backColor7 = 'green';
    this.contador1 += 1;
  }
  colorRojo11(){
    this.backColor7 = 'red';
  }
   colorVerde12(){
     this.backColor8 = 'green';
     this.contador1 += 1;
   }
   colorRojo12(){
     this.backColor8 = 'red';
   }
   colorVerde13(){
     this.backColor9 = 'green';
     this.contador1 += 1;
   }
   colorRojo13(){
     this.backColor9 = 'red';
   }
   colorVerde14(){
     this.backColor0 = 'green';
     this.contador1 += 1;
   }
   colorRojo14(){
     this.backColor0 = 'red';
   }
  colorVerde15(){
    this.backColor16 = 'green';
    this.contador1 += 1;
  }
  colorRojo15(){
    this.backColor16 = 'red';
  }
   colorVerde16(){
     this.backColor17 = 'green';
     this.contador1 += 1;
   }
   colorRojo16(){
     this.backColor17 = 'red';
   }
   colorVerde17(){
     this.backColor18 = 'green';
     this.contador1 += 1;
   }
   colorRojo17(){
     this.backColor18 = 'red';
   }
   colorVerde18(){
     this.backColor19 = 'green';
     this.contador1 += 1;
   }
   colorRojo18(){
     this.backColor19 = 'red';
   }
   colorVerde19(){
     this.backColor20 = 'green';
     this.contador1 += 1;
   }
   colorRojo19(){
     this.backColor20 = 'red';
   }
   colorVerde23(){
     this.backColor23 = 'green';
     this.contador1 += 1;
   }
   colorRojo23(){
     this.backColor23 = 'red';
   }
   colorVerde24(){
     this.backColor24 = 'green';
     this.contador1 += 1;
   }
   colorRojo24(){
     this.backColor24 = 'red';
   }





  constructor(private route: ActivatedRoute){
    this.route.queryParams.subscribe(params =>{
        this.texto = params['data1'];
        this.texto1 = params['data2'];
        this.color2 = params['color2'];
        this.color1 = params['color1'];
    })

  }
  visibleCi2(){
    this.visibCirc2 = true;
  }
  visibleCi5(){
    this.visibCirc5 = true;
  }
  visibleCi7(){
    this.visibCirc7 = true;
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
      case 'z':
        this.decre1();
        break;
      case 'x':
        this.decre2();
        break;
    }
  }
}
