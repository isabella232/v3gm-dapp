import { truncate } from 'lodash';

export const truncateString = (value: string, maxLength = 5) =>
  truncate(value, {
    length: maxLength,
  });

export const truncateAddress = (address: string, first = 5, last = 5) =>
  `${address.slice(0, first)}...${address.slice(-last, address.length)}`;
