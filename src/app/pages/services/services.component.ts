import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Smartphone, Monitor, ArrowRight } from 'lucide-angular';
import { ParticlesComponent } from '../../components/ui/particles/particles.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink, LucideAngularModule, ParticlesComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  readonly ArrowRight = ArrowRight;

  services = [
    {
      id: 'recharge',
      title: 'Mobile Recharge',
      description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
      features: ['99.9% uptime', 'Covers all operators', 'Instant confirmation'],
      icon: Smartphone,
      color: 'bg-[#217095]',
    },
    {
      id: 'dth',
      title: 'DTH Recharge',
      description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
      features: ['All providers supported', 'Instant activation', 'Best commissions'],
      icon: Monitor,
      color: 'bg-[#738233]',
    },
  ];
}
