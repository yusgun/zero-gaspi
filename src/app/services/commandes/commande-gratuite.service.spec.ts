import { TestBed } from '@angular/core/testing';

import { CommandeGratuiteService } from './commande-gratuite.service';

describe('CommandeGratuiteService', () => {
  let service: CommandeGratuiteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommandeGratuiteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
