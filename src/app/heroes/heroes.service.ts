import { Injectable } from '@angular/core';


import { ConfigService } from '../config/config.service';

@Injectable()
export class HeroesService {

  constructor(private configService: ConfigService) { }

}