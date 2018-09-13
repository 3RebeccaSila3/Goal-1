import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date();   //get current date and time
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference = Math.abs(value-todayWithNoTime )  //returns value in miliseconds
    const secondsInADay = 86400  //60sec * 60min *24hrs

    var dateDifferenceSeconds = dateDifference*0.001;  //converts to seconds

    var dateCounter = dateDifferenceSeconds/secondsInADay;

    if (dateCounter >= 1){
      return dateCounter;
    }else {
      return 0;
    }
    
  }

}
