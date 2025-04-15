import { FormatMessageContentPipe } from './format-message-content.pipe';
import { DomSanitizer } from '@angular/platform-browser';
import { TestBed } from '@angular/core/testing';

describe('FormatMessageContentPipe', () => {
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('create an instance', () => {
    const pipe = new FormatMessageContentPipe(sanitizer);
    expect(pipe).toBeTruthy();
  });
});
