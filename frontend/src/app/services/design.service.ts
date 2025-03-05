import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DesignService {
  constructor(private http: HttpClient) {}

  generateDesign(prompt: string) {
    return this.http.post('/api/design/generate', { prompt });
  }
}