import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerErrorLogsComponent } from './player-error-logs.component';

describe('PlayerErrorLogsComponent', () => {
  let component: PlayerErrorLogsComponent;
  let fixture: ComponentFixture<PlayerErrorLogsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlayerErrorLogsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerErrorLogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
