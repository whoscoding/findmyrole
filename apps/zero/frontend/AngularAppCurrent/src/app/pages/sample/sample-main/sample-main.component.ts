// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  } from '@angular/core';



// services
import { ConfigService } from '@app/core/config/config.service';
import { UtilityService } from '@app/core/utility/utility.service';
import { BaseService } from '@core/base/base.service';


// rxjs
import { Subject } from 'rxjs';
import { takeUntil,tap } from 'rxjs/operators';

// misc

import { ENV } from '@env/environment';
import { WMLImage, WMLUIProperty } from '@windmillcode/wml-components-base';
import { SectionsTwoParams, SectionsTwoParamsPartsType } from '@shared/components/sections-two/sections-two.component';



@Component({

  selector: 'sample-main',
  templateUrl: './sample-main.component.html',
  styleUrls: ['./sample-main.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class SampleMainComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

    public utilService:UtilityService,
    public configService:ConfigService,
    public baseService:BaseService

  ) { }

  classPrefix = this.utilService.generateClassPrefix('SampleMain')



  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()

  companyLogo = new WMLImage({
    src:"assets/media/sampleMain/nba-logo.png"
  })
  resultsSection = new SectionsTwoParams({
    title:new WMLUIProperty({
      text:"SampleMain.sections.results.title"
    }),
    parts:[
      new WMLUIProperty({
        type:SectionsTwoParamsPartsType.STRIKETHRU
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.title",
        type:SectionsTwoParamsPartsType.TITLE
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.0",
        type:SectionsTwoParamsPartsType.BULLET,
        value:0
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.1",
        type:SectionsTwoParamsPartsType.BULLET,
        value:1
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.2",
        type:SectionsTwoParamsPartsType.BULLET,
        value:2
      }),
      new WMLUIProperty({
        type:SectionsTwoParamsPartsType.STRIKETHRU
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.answers.title",
        type:SectionsTwoParamsPartsType.TITLE
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.answers.bullets.0",
        type:SectionsTwoParamsPartsType.BULLET,
        value:0
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.answers.bullets.1",
        type:SectionsTwoParamsPartsType.BULLET,
        value:1
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.answers.bullets.2",
        type:SectionsTwoParamsPartsType.BULLET,
        value:2
      })
    ]
  })
  factsSection = new SectionsTwoParams({
    title:new WMLUIProperty({
      text:"SampleMain.sections.facts.title"
    }),
    parts:[
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.0",
        type:SectionsTwoParamsPartsType.BULLET,
        value:0
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.1",
        type:SectionsTwoParamsPartsType.BULLET,
        value:1
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.2",
        type:SectionsTwoParamsPartsType.BULLET,
        value:2
      })
    ]
  })
  newsSection = new SectionsTwoParams({
    title:new WMLUIProperty({
      text:"SampleMain.sections.news.title"
    }),
    parts:[
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.0",
        type:SectionsTwoParamsPartsType.BULLET,
        value:0
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.1",
        type:SectionsTwoParamsPartsType.BULLET,
        value:1
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.2",
        type:SectionsTwoParamsPartsType.BULLET,
        value:2
      })
    ]
  })
  recruiterQuestionsSection = new SectionsTwoParams({
    title:new WMLUIProperty({
      text:"SampleMain.sections.questions.title"
    }),
    parts:[
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.0",
        type:SectionsTwoParamsPartsType.BULLET,
        value:0
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.1",
        type:SectionsTwoParamsPartsType.BULLET,
        value:1
      }),
      new WMLUIProperty({
        text:"SampleMain.sections.results.questions.bullets.2",
        type:SectionsTwoParamsPartsType.BULLET,
        value:2
      })
    ]
  })

  ngOnInit(): void {
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}




