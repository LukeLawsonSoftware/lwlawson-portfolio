import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ProjectData } from '../../../services/project/project.service';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.css',
})
export class ProjectCardComponent {
  @Input() project!: ProjectData;

  constructor(private router: Router) {}

  navigateToDetail(event: Event, id: number): void {
    // Prevent navigation if clicking on links within the card
    if ((event.target as HTMLElement).closest('a')) {
      return;
    }
    this.router.navigate(['/projects', id]);
  }
}
