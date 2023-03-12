// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';



// services
import { ConfigService } from '@app/core/config/config.service';
import { UtilityService } from '@app/core/utility/utility.service';
import { BaseService } from '@core/base/base.service';


// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc

import {  WMLButton2, WMLUIProperty } from '@windmillcode/wml-components-base';



@Component({

  selector: 'button-one',
  templateUrl: './button-one.component.html',
  styleUrls: ['./button-one.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class ButtonOneComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

    public utilService:UtilityService,
    public configService:ConfigService,
    public baseService:BaseService

  ) { }

  classPrefix = this.utilService.generateClassPrefix('ButtonOne')


  @Input('params') params: ButtonOneParams = new ButtonOneParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


export enum ButtonOneParamsTypeEnum{
  PRIMARY,SECONDARY,TERTIARY
}
export class ButtonOneParams extends WMLButton2 {
  constructor(params:Partial<ButtonOneParams>={}){
    super();
    Object.assign(
      this,
      {
        ...params
      }
    )

    let val = {
      [ButtonOneParamsTypeEnum.PRIMARY]:"0",
      [ButtonOneParamsTypeEnum.SECONDARY]:"1",
      [ButtonOneParamsTypeEnum.TERTIARY]:"2"
    }[this.type]
    this.button.class = "ButtonOneMainButton"+val;
    this.text.class = "ButtonOneMainButton" + val +"Text0"

  }
  type =ButtonOneParamsTypeEnum.PRIMARY
  override text = new WMLUIProperty({
    text:"Click Me"
  })
  override button = new WMLUIProperty({
    click:()=>{
      alert("This button was clicked")
    }
  })


}


