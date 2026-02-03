import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule, Smartphone, Banknote, ArrowUpRight } from 'lucide-angular';

@Component({
  selector: 'app-services-grid',
  standalone: true,
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './services-grid.component.html',
  styleUrl: './services-grid.component.css'
})
export class ServicesGridComponent {
  readonly ArrowUpRight = ArrowUpRight;

  services = [
    {
      id: 'recharge',
      title: 'Mobile Recharge',
      description: 'Instant mobile recharges for all major operators including Jio, Airtel, Vi, and BSNL.',
      icon: Smartphone
    },
    {
      id: 'dth',
      title: 'DTH Recharge',
      description: 'Seamless DTH recharges for Tata Play, Dish TV, Videocon d2h, Sun Direct, and Airtel Digital TV.',
      icon: Banknote
    },
  ];
}
