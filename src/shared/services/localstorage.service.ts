import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class LocalstorageService {
  constructor() {}

  getItem(key: string) {
    const d = localStorage.getItem(key);
    if (d) {
      return JSON.parse(d);
    }
    return [];
  }

  setItem(key: string, data: any) {
    localStorage.setItem(key, JSON.stringify(data));
  }

  clearItem() {
    localStorage.clear();
  }
}
