import { MicroOrganismsModule } from './micro-organisms.module';

describe('MicroOrganismsModule', () => {
  let microOrganismsModule: MicroOrganismsModule;

  beforeEach(() => {
    microOrganismsModule = new MicroOrganismsModule();
  });

  it('should create an instance', () => {
    expect(microOrganismsModule).toBeTruthy();
  });
});
