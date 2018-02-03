import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsComponent } from './news.component';

describe('NewsComponent', () => {
  let component: NewsNewsNewsomponent;
  let fixture: ComponentFixture<NewsNewsomponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
