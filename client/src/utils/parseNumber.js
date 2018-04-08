import { toNumber } from 'lodash';

export default function thousandSymbol(number) {
  return toNumber(number).toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

