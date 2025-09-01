import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { Router } from 'express';

const landingSteps = [
  {
    title: '1. Set Your Strategy ',
    img: 'assets/img/landing/first-step.webp',
  },
  {
    title: '2. Turn on Trade Switch',
    img: 'assets/img/landing/second-step.webp',
  },
  {
    title: '3. Start Trading',
    img: 'assets/img/landing/third-step.webp',
  },
];

@Component({
  selector: 'app-how-it-works',
  imports: [RouterLink, RouterLinkActive, CommonModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss',
  standalone: true,
})
export class HowItWorks {
  landingSteps = landingSteps;

  constructor() {}
}
