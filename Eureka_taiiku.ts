enum vibrater_onoff {
    ON,
    OFF,
}
enum daisyou {
    大きい,
    小さい,
}
enum select_xyz {
    X,
    Y,
    Z,
    }

enum limit_deg {
    //% block="0",
    zero,
    //% block="10",
    ten,
    //% block="20",
    twenty,
    //% block="30",
    thirty,
    //% block="40",
    forty,
    //% block="50",
    fifty,
    //% block="60",
    sixty,
    //% block="70",
    seventy,
    //% block="80",
    eighty,
    //% block="90",
    ninety,
     //% block="100",
    one_hundred,
    //% block="110",
    one_ten,
    //% block="120",
    one_twenty,
    //% block="130",
    one_thity,
    //% block="140",
    one_forty,
    //% block="150",
    one_fifty,
    //% block="160",
    one_sixty,
    //% block="170",
    one_seventy,
    //% block="180",
    one_eighty
    }









//% color="#3943c2" block="上教大_体育V1.01"
namespace matubara_blocks {


  //% color="#3943ff" weight=50 blockId=axis
  //% block="|%xyz| 角度の値" group="センサー"
  export function axis( xyz:select_xyz){
    switch(xyz){
        case select_xyz.X:
        return Math.round(input.acceleration(Dimension.X)/1100*90)+90;
        case select_xyz.Y:
        return Math.round(input.acceleration(Dimension.Y)/1100*90);
        case select_xyz.Z:
        return Math.round(input.acceleration(Dimension.Z)/1100*90);
    }
  }


 //% weight=39 blockId=x_ude_more block="腕をふる角度が |%limit| 度より |%kakudo|" group="センサー"
    export function x_ude_more (limit:limit_deg,kakudo:daisyou): boolean {
    switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.X)/1100*90)+90 > limit*10 )
            {
            return true;
            }
            else
            {
            return false;
            }
        case daisyou.小さい :
            if ((input.acceleration(Dimension.X)/1100*90)+90 < limit*10 ){
            return true;
            }
            else
            {
            return false;
            }
        }
    }
/*
 
 //% weight=37 blockId=y_ude_more block="Ｙ＿腕をふる角度が |%limit| 度より |%kakudo|" group="センサー"
  export function y_ude_more(limit: limit_deg,kakudo:daisyou): boolean {
     switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.Y)/1100*90) > limit*10 ){
            return true;
            }else{
            return false;
        }
 
        case daisyou.小さい :
        if ((input.acceleration(Dimension.Y)/1100*90) < limit*10 ){
            return true;
            }else{
            return false;
        }
    }   
  }
 
 //% weight=35 blockId=z_ude_more block="Ｚ＿腕をふる角度が |%limit| 度より |%kakudo|" group="センサー"
  export function z_ude_more(limit: limit_deg,kakudo:daisyou): boolean {
     switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.Z)/1100*90) > limit*10 ){
            return true;
            }else{
            return false;
        }
        
        case daisyou.小さい :
        if ((input.acceleration(Dimension.Z)/1100*90) < limit*10 ){
            return true;
            }else{
            return false;
        }
    }
    }   
*/
 //% color="#ff7b00" weight=23 blockId=vib_kanketu block="振動する（音なし）" group="機能"
  export function vib_kanketu() {
    let i=0;
    for (let i=1 ; i<3 ;i++)　{
            basic.pause(100); 
            pins.digitalWritePin(DigitalPin.P1, 1); 
            basic.pause(400);  
            pins.digitalWritePin(DigitalPin.P1, 0);
            basic.pause(400); 
        }
    }

 //% color="#ff7b00" weight=23 blockId=vib_kanketu_oto block="振動する（音付き）" group="機能"
  export function vib_kanketu_oto() {
    let i=0;
    for (let i=1 ; i<3 ;i++)　{
            basic.pause(100); 
            pins.digitalWritePin(DigitalPin.P1, 1); 
            music.ringTone(698)
            basic.pause(400);  
            pins.digitalWritePin(DigitalPin.P1, 0);
            music.rest(music.beat(BeatFraction.Sixteenth))           
            basic.pause(400); 
        }
    }



 //% color="#ff7b00" weight=12 blockId=vib block="振動 |%mode|" group="機能"
  export function vib(mode: vibrater_onoff) {
            if (mode == vibrater_onoff.ON ) {
            return pins.digitalWritePin(DigitalPin.P1, 1);
            } else {
            return pins.digitalWritePin(DigitalPin.P1, 0);
        }
    }   

  
    
 //% color="#ff7b00" weight=11 blockId=oto block="音を鳴らす" group="機能"
  export function oto() {
        music.playTone(659, music.beat(BeatFraction.Eighth))
  }

  //% color="#1E90FF" weight=10 block="待ち時間（秒）|%second|" group="機能"
  //% second.min=0 second.max=10
  export function driveForwards(second: number): void {
    basic.pause(second * 1000);
  }

 //% color="#009A00" weight=9 blockId=x_ude_more_sub block="腕をふる角度が |%limit| 度より |%kakudo|" group="予備"
    export function x_ude_more_sub (limit:number,kakudo:daisyou): boolean {
    switch(kakudo){
        case daisyou.大きい:
        if ((input.acceleration(Dimension.X)/1100*90)+90 > limit )
            {
            return true;
            }
            else
            {
            return false;
            }
        case daisyou.小さい :
            if ((input.acceleration(Dimension.X)/1100*90)+90 < limit ){
            return true;
            }
            else
            {
            return false;
            }
        }
    }

}