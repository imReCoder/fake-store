import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  constructor() { }

  public static showLoader() {
    let element = (document.getElementById('progress-spinner') as HTMLElement);
    if (element && element.classList.contains('d-none')){
      (document.getElementById('progress-spinner')||{} as HTMLElement).classList.remove('d-none');
    }
  }

  public static hideLoader() {
  let element = (document.getElementById('progress-spinner') as HTMLElement);
  if (element && !element.classList.contains('d-none')){
    (document.getElementById('progress-spinner')||{} as HTMLElement).classList.add('d-none');
  }
  }
}





