import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EventsListComponent } from './events-list.component';
import { provideRouter } from '@angular/router';
import { routes } from '../../../app.routes';

describe('EventsListComponent', () => {
  let component: EventsListComponent;
  let fixture: ComponentFixture<EventsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsListComponent],
      providers: [provideRouter(routes)]
    }).compileComponents();

    fixture = TestBed.createComponent(EventsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the page header', async () => {
    await fixture.whenStable();
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.page-header h1')?.textContent).toContain('Upcoming Events');
  });

  it('should load events on init', async () => {
    await fixture.whenStable();
    expect(component.loading).toBeFalsy();
    expect(component.events.length).toBeGreaterThan(0);
  });
});
