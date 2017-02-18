import { Injectable, EventEmitter } from '@angular/core';
import { LogService } from './log.service';

@Injectable()
export class DataService {

  pushedData = new EventEmitter<string>();
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

  pushData(val: string){
    this.pushedData.emit(val);
  }
}
