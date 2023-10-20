import { OTUniverseActive__factory } from '../../typechain-types';
import { rpcProvider } from '../utils';
import { contract } from '../constant';

export function otUniverseActive() {
  return OTUniverseActive__factory.connect(contract().OTUniverseActive, rpcProvider);
}