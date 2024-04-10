/* eslint-disable @typescript-eslint/no-unused-vars */
import { convertIsoDateToDate } from './getdate';

describe('', () => {
  it('', () => {
    // arrange
    const isoDateString = '2024-04-08T14:25:23.123Z';
    const expectedDate = '08/04/2024';

    // act
    const convertedDate = convertIsoDateToDate(isoDateString);

    // assert
    expect(convertedDate).toBe(expectedDate);
  });

  it('', () => {
    const date = new Date('xxxx-xx-xxxxx:xx:xx.xxxx');
    expect(date).toBeInstanceOf(Date); // Verifica se é uma instância de Date
    expect(isNaN(date.getTime())).toBe(true); // Verifica se é NaN
  });
});
