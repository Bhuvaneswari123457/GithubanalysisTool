import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoInsightsComponent } from './repo-insights.component';

describe('RepoInsightsComponent', () => {
  let component: RepoInsightsComponent;
  let fixture: ComponentFixture<RepoInsightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RepoInsightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RepoInsightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
