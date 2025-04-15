import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';
import { ThemeService } from '../../../services/theme/theme.service';

@Component({
  selector: 'app-markdown-renderer',
  standalone: true,
  imports: [CommonModule, MarkdownModule],
  templateUrl: './markdown-renderer.component.html',
  styleUrl: './markdown-renderer.component.css',
})
export class MarkdownRendererComponent implements OnChanges {
  @Input() markdownContent: string = '';
  @Input() markdownPath: string = '';

  isDarkTheme: boolean = false;

  constructor(private themeService: ThemeService) {
    // Subscribe to theme changes
    this.themeService.theme$.subscribe(() => {
      this.isDarkTheme = this.themeService.getEffectiveTheme() === 'dark';
    });
    // Initialize theme
    this.isDarkTheme = this.themeService.getEffectiveTheme() === 'dark';
  }

  ngOnChanges(changes: SimpleChanges): void {
    // Handle input changes if needed
  }
}
