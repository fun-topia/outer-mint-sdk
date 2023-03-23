import { OTS__factory } from '../../typechain-types';
import { rpcProvider } from '../utils';
import { token } from '../constant';

export function ots() {
  return OTS__factory.connect(token().OTS, rpcProvider);
}
