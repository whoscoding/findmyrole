// angular
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, HostBinding, OnInit,  Input   } from '@angular/core';



// services
import { ConfigService } from '@app/core/config/config.service';
import { UtilityService } from '@app/core/utility/utility.service';
import { BaseService } from '@core/base/base.service';


// rxjs
import { Subject } from 'rxjs';
import { delay, takeUntil,tap } from 'rxjs/operators';

// misc

import { ENV } from '@env/environment';
import { SectionsTwoParams, SectionsTwoParamsPartsType, SectionsTwoParamsPartsTypeJobSummaryType } from '@shared/components/sections-two/sections-two.component';
import { WMLUIProperty } from '@windmillcode/wml-components-base';
import { ButtonOneParams, ButtonOneParamsTypeEnum } from '@shared/components/button-one/button-one.component';
import { FileUploadParams, FileUploadParamsPodTypeEnum } from '@shared/components/file-upload/file-upload.component';
import { CSSVARS } from '@core/utility/common-utils';
import { WMLForm } from '@windmillcode/wml-form';
import { WMLField, WMLFieldTextAreaFieldParams } from '@windmillcode/wml-field';
import { FormsService } from '@shared/services/forms/forms.service';
import { FormArray } from '@angular/forms';
import { ResumeService } from '@shared/services/resume/resume.service';
import { WmlNotifyBarModel, WmlNotifyService } from '@windmillcode/wml-notify';



@Component({

  selector: 'profile-one-main',
  templateUrl: './profile-one-main.component.html',
  styleUrls: ['./profile-one-main.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush



})
export class ProfileOneMainComponent  {

  constructor(
    public cdref:ChangeDetectorRef,

    public utilService:UtilityService,
    public configService:ConfigService,
    public baseService:BaseService,
    public formsService:FormsService,
    public resumeService:ResumeService
  ) { }

  classPrefix = this.utilService.generateClassPrefix('ProfileOneMain')


  @Input('params') params: ProfileOneMainParams = new ProfileOneMainParams()


  @HostBinding('class') myClass: string = this.classPrefix(`View`);
  ngUnsub= new Subject<void>()
  lastAnalysisSection = new SectionsTwoParams({
    title:new WMLUIProperty({
      text:"ProfileOneMain.lastAnalysis.title"
    }),
    parts:[
      new WMLUIProperty({
        type:SectionsTwoParamsPartsType.JOB_SUMMARY,
        value:[
          new WMLUIProperty({
            text:"Job Role: Software Engineer @ NBA",
            type:SectionsTwoParamsPartsTypeJobSummaryType.HEADER
          }),
          ...[
            "3 generated questions",
            "3 generated answers",
            "3 questions to ask recruiters",
            "3 facts about company",
            "3 latest news about comapny"
          ]
          .map((text)=>{
            return new WMLUIProperty({
              text
            })
          })

        ]
      })
    ]

  })


  formVars = ENV.profileOneMain.mainForm

  resumeUpload = new FileUploadParams({
    border:new WMLUIProperty({
      type:FileUploadParamsPodTypeEnum.SECONDARY
    }),
    title:new WMLUIProperty({
      text:"HomeMain.resumeUpload.title"
    }),
    button: new ButtonOneParams({
      text:new WMLUIProperty({
        text:"HomeMain.resumeUpload.button"
      })
    }),
    subText:new WMLUIProperty({
      text:"HomeMain.resumeUpload.subText"
    }),
    formArray:this.formsService.profileOneMain.mainForm.controls[this.formVars.resumeFormControlName] as unknown as FormArray
  })


  jobDescField = this.baseService.generateTextAreaFormField({
    labelValue:"ProfileOneMain.uploadForm.jobDescField.label",
    fieldFormControlName:this.formVars.jobDescFormControlName,
    fieldParentForm:this.formsService.profileOneMain.mainForm,
    errorMsgs:{
      required:"ProfileOneMain.uploadForm.jobDescField.error.required"
    },
    selfType:"standalone",
    fieldCustomParams:new WMLFieldTextAreaFieldParams({
      placeholder:"ProfileOneMain.uploadForm.jobDescField.placeholder"
    })
  });
  fields:Array<WMLField> = [
    this.jobDescField
  ]

  wmlForm =  new WMLForm({
    fields: this.fields,
  })

  submitBtnClick = ()=>{
    // @ts-ignore
    this.resumeService.submitFormToAnalyzeResume(this.formsService.profileOneMain.mainForm.value)
    .pipe(
      takeUntil(this.ngUnsub),
      tap(this.baseService.openOverlayLoading),
      this.baseService.closeOverlayLoading,
      tap({
        next:()=>{
          this.baseService.generateWMLNote("global.formSubmitSuccess")
        }
      })

    )
    .subscribe()

  }
  submitBtn = new ButtonOneParams({
    text:new WMLUIProperty({
      text:"ProfileOneMain.uploadForm.submit",
      style:{
        textAlign:"center",
        margin:"0",
        padding:"0 "+CSSVARS.spacing9
      }
    }),
    button:new WMLUIProperty({
      click:this.submitBtnClick
    })
  })


  initForm = ()=>{
    this.jobDescField.deleteLabel()
  }

  mabyeLaterBtn = new ButtonOneParams({
    type:ButtonOneParamsTypeEnum.TERTIARY,
    text:new WMLUIProperty({
      text:"ProfileOneMain.helpUs.mabyeLater"
    })
  })

  submitPersonalInfoBtn = new ButtonOneParams({
    type:ButtonOneParamsTypeEnum.SECONDARY,
    text:new WMLUIProperty({
      text:"ProfileOneMain.helpUs.submitPersonalInfo"
    })
  })

  ngOnInit(): void {
    this.initForm()
  }

  ngOnDestroy(){
    this.ngUnsub.next();
    this.ngUnsub.complete()
  }

}



export class ProfileOneMainParams {
  constructor(params:Partial<ProfileOneMainParams>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
}


