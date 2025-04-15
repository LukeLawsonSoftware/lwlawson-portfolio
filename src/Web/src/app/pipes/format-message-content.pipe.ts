import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'formatMessageContent',
  standalone: true
})
export class FormatMessageContentPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(content: string): SafeHtml {
    if (!content) return '';
    
    // Convert URLs to clickable links
    const withLinks = content.replace(
      /(https?:\/\/[^\s]+)/g, 
      '<a href="$1" target="_blank" class="text-blue-500 hover:underline">$1</a>'
    );
    
    // Convert line breaks to <br> tags
    const withLineBreaks = withLinks.replace(/\n/g, '<br>');
    
    // Return sanitized HTML
    return this.sanitizer.bypassSecurityTrustHtml(withLineBreaks);
  }
}
