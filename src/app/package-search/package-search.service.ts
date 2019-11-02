import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';



export interface NpmPackageInfo {
  name: string;
  version: string;
  description: string;
}

export const searchUrl = 'https://npmsearch.com/query';

const httpOptions = {
  headers: new HttpHeaders({
    'x-refresh':  'true'
  })
};
@Injectable()
export class PackageSearchService {

  constructor() { }

}