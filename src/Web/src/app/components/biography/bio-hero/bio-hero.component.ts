import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bio-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bio-hero.component.html',
  styleUrl: './bio-hero.component.css',
})
export class BioHeroComponent {
  myName = 'Luke Lawson';
  title = 'Full Stack Developer';
  intro =
    'Hi, I am a full stack developer with a passion for creating dynamic and responsive web applications. I have experience in both front-end and back-end development, and I enjoy working with the latest technologies to build innovative solutions.';
}
