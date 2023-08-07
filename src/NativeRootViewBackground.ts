import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  setBackground(r: number, g: number, b: number, a: number): void;
}

export default TurboModuleRegistry.getEnforcing<Spec>('RootViewBackground');
