import { TestBed, inject } from '@angular/core/testing';

import { CoursesDAOService } from './courses-dao.service';

describe('CoursesDAOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CoursesDAOService]
    });
  });

  it('should be created', inject([CoursesDAOService], (service: CoursesDAOService) => {
    expect(service).toBeTruthy();
  }));
});
