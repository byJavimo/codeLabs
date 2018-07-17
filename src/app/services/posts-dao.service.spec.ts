import { TestBed, inject } from '@angular/core/testing';

import { PostsDAOService } from '../services/posts-dao.service';

describe('PostsDAOService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PostsDAOService]
    });
  });

  it('should be created', inject([PostsDAOService], (service: PostsDAOService) => {
    expect(service).toBeTruthy();
  }));
});
