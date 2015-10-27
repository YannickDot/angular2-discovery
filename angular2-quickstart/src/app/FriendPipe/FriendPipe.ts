import {Pipe} from 'angular2/angular2'

@Pipe({
  name: 'friendTransform'
})

export class FriendPipe {
  transform(value:string, args:string[]) : any {
    return value +' '+ args[0];
  }
}
