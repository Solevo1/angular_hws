import { Pipe, PipeTransform } from '@angular/core';
import { Gender } from '../services/user.service';

export enum GenderEmoji {
  MALE = '👦',
  FEMALE = '👧'
}

@Pipe({
  name: 'gender'
})
export class GenderPipe implements PipeTransform {
  public genderEmoji = new Map([
    [Gender.MALE, GenderEmoji.MALE],
    [Gender.FEMALE, GenderEmoji.FEMALE]
  ]);
  public transform(value: Gender): GenderEmoji | void {
    if(value===Gender.MALE) {
      return GenderEmoji.MALE
    } else if (value===Gender.FEMALE) {
      return GenderEmoji.FEMALE
    }
    return;
  }

}
