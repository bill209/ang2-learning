
export class DataService {

  private data: string[] = [];

  addNumber(nbr: string) {
    this.data.push(nbr);
  }

  getData(){
    return this.data;
  }
}
