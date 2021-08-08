import { Gender } from '../services/user.service';
import { GenderEmoji, GenderPipe } from './gender.pipe';

describe('GenderPipe', () => {
  it('create an instance', () => {
    const pipe = new GenderPipe();
    expect(pipe).toBeTruthy();
  });
  describe('transform', () => {
    it('should return 👦 if gender is male', () => {
      const pipe = new GenderPipe();
      expect(pipe.transform(Gender.MALE)).toBe(GenderEmoji.MALE);
    });
    it('should return 👧 if gender is female', () => {
      const pipe = new GenderPipe();
      expect(pipe.transform(Gender.FEMALE)).toBe(GenderEmoji.FEMALE);
    });
  });
});
