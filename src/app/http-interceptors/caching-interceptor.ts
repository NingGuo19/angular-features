import {Injectable} from '@angular/core';
import {
  HttpEvent, HttpHeaders, HttpRequest, HttpResponse,
  HttpInterceptor, HttpHandler
} from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { startWith, tap } from 'rxjs/operators';

import { RequestCache } from '../request-cache.service';

@Injectable()
export class CachingInterceptor implements HttpInterceptor{

    constructor(private cache: RequestCache) {}
    intercept(req: HttpRequest<any>, next: HttpHandler){

        return undefined;

    }
}

function isCachable(req: HttpRequest<any>) {
  // Only GET requests are cachable
  return req.method === 'GET' &&
    // Only npm package search is cachable in this app
    -1 < req.url.indexOf('https://npmsearch.com/query');
}

function sendRequest(
  req: HttpRequest<any>,
  next: HttpHandler,
  cache: RequestCache): Observable<HttpEvent<any>> {

  // No headers allowed in npm search request
  const noHeaderReq = req.clone({ headers: new HttpHeaders() });

  return next.handle(noHeaderReq).pipe(
    tap(event => {
      // There may be other events besides the response.
      if (event instanceof HttpResponse) {
        cache.put(req, event); // Update the cache.
      }
    })
  );
}