import { CookingMethodsModule } from './cooking-methods.module';

describe('CookingMethodsModule', () => {
  let cookingMethodsModule: CookingMethodsModule;

  beforeEach(() => {
    cookingMethodsModule = new CookingMethodsModule();
  });

  it('should create an instance', () => {
    expect(cookingMethodsModule).toBeTruthy();
  });
});
