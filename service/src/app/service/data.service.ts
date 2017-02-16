import { Injectable } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {

  private data: string[] = [];

  constructor (private logService: LogService){

  }

  addNumber(nbr: string) {
    this.data.push(nbr);
    this.logService.writeToLog('saved: ' + nbr);
  }

  getData(){
    return this.data;
  }
}
