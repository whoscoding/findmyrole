import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilityService } from '@core/utility/utility.service';
import { ENV } from '@env/environment';
import { iif, map, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeService {

  constructor(
    public http:HttpClient,
    public utilityService:UtilityService
  ) { }

  submitFormToAnalyzeResume = (uiBody:SubmitFormToAnalyzeResumeUIRequestBody,raw = false)=>{
    let apiBody = submitFormToAnalyzeResumeLoad(uiBody)
    return iif(
      ()=>ENV.resumeService.submitFormToAnalyzeResume.automate,
      of(new SubmitFormToAnalyzeResumeUIResponseBody()),
      this.http
      .post(ENV.resumeService.submitFormToAnalyzeResume.url(),apiBody)
      .pipe(raw ? tap() : map(submitFormToAnalyzeResumeSuccess))
    )
  }

}

let submitFormToAnalyzeResumeLoad  = (uiBody:SubmitFormToAnalyzeResumeUIRequestBody): SubmitFormToAnalyzeResumeAPIRequestBody=>{
  let apiBody = new SubmitFormToAnalyzeResumeAPIRequestBody()
  return apiBody
}

let submitFormToAnalyzeResumeSuccess = (apiBody:SubmitFormToAnalyzeResumeAPIResponseBody):SubmitFormToAnalyzeResumeUIResponseBody=>{
  let uiBody = apiBody
  return uiBody
}


class SubmitFormToAnalyzeResumeUIRequestBody {
  constructor(params:Partial<SubmitFormToAnalyzeResumeUIRequestBody>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
}

class SubmitFormToAnalyzeResumeUIResponseBody {
  constructor(params:Partial<SubmitFormToAnalyzeResumeUIResponseBody>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
}


class SubmitFormToAnalyzeResumeAPIRequestBody {
  constructor(params:Partial<SubmitFormToAnalyzeResumeAPIRequestBody>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
  data = {}
}

class SubmitFormToAnalyzeResumeAPIResponseBody {
  constructor(params:Partial<SubmitFormToAnalyzeResumeAPIResponseBody>={}){
    Object.assign(
      this,
      {
        ...params
      }
    )
  }
}
