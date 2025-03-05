import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';
import 'jest-preset-angular/setup-jest';
import './styles.scss';

setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});
