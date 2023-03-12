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

import { ENV } from '@env/environment';
import { WMLUIProperty } from '@windmillcode/wml-components-base';


@Component({

  selector: 'sections-two',
  templateUrl: './sections-two.component.html',
  styleUrls: ['./sections-two.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class SectionsTwoComponent  {

  constructor(
    public cdref:ChangeDetectorRef,
    public utilService:UtilityService,
    public configService:ConfigService,
    public baseService:BaseService

  ) { }

  classPrefix = this.utilService.generateClassPrefix('SectionsTwo')
  @Input('params') params: SectionsTwoParams = new SectionsTwoParams()
  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  SectionsTwoParamsPartsType = SectionsTwoParamsPartsType
  SectionsTwoParamsPartsTypeJobSummaryType = SectionsTwoParamsPartsTypeJobSummaryType
  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}


export enum SectionsTwoParamsPartsType {
  STRIKETHRU = "strike",
  TITLE = "title",
  BULLET ="bullet",
  JOB_SUMMARY = "job_summary"
}

export enum SectionsTwoParamsPartsTypeJobSummaryType{
  HEADER,CONTENT
}
export class SectionsTwoParams {
  constructor(params:Partial<SectionsTwoParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )

    this.parts = this.parts.map((val)=>{
      if(val.type === SectionsTwoParamsPartsType.JOB_SUMMARY){
        val.value = val.value.map((line)=>{
          line.type = line.type ??SectionsTwoParamsPartsTypeJobSummaryType.CONTENT
          return line
        })
      }
      return val
    })
  }
  title = new WMLUIProperty({
    text:"Title"
  })
  parts: WMLUIProperty<
    any|WMLUIProperty<any,SectionsTwoParamsPartsTypeJobSummaryType>[],
    SectionsTwoParamsPartsType
  >[] = []
}


