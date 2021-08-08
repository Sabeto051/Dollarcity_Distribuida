import { Injectable } from '@angular/core';
import { createClient, Entry } from 'contentful';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { from } from 'rxjs';

const CONFIG = {
  space: environment.space,
  accessToken: environment.accessToken,
};

@Injectable({
  providedIn: 'root',
})
export class ContentfulService {
  private cdaClient = createClient({
    space: CONFIG.space,
    accessToken: CONFIG.accessToken,
  });

  constructor() {}

  getProducts(contentType: string) {
    return from(this.cdaClient.getEntries({ content_type: contentType })).pipe(
      map((res) => res['items'])
    );
  }
}
