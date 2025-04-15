import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-education',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-education.component.html',
  styleUrl: './bio-education.component.css',
})
export class BioEducationComponent {
  educationList = [
    {
      institution: 'University Example',
      degree: 'Master of Science in Computer Science',
      duration: '2020 - 2022',
      description:
        'Specialized in artificial intelligence and machine learning.',
    },
    {
      institution: 'College Example',
      degree: 'Bachelor of Science in Software Engineering',
      duration: '2016 - 2020',
      description:
        'Graduated with honors. Focused on full stack development and database management.',
    },
  ];
}
