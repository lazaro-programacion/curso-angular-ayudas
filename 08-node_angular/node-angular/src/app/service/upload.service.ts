import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {

  constructor(private httpClient: HttpClient) { }



  upload = (files: FileList) => {
    console.log("ficheros", files);
    const form = new FormData();
    for (let index = 0; index < files.length; index++) {
      form.append(`file-${index}`, files.item(index), files.item(index).name);
    }

    return this.httpClient.post<any>(
      'http://localhost:4000/patients/upload', form
    );
  }
}
