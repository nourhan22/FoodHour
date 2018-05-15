import { CuttingMethodsModule } from './cutting-methods.module';

describe('CuttingMethodsModule', () => {
  let cuttingMethodsModule: CuttingMethodsModule;

  beforeEach(() => {
    cuttingMethodsModule = new CuttingMethodsModule();
  });

  it('should create an instance', () => {
    expect(cuttingMethodsModule).toBeTruthy();
  });
});
