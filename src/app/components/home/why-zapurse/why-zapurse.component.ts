import { Component } from '@angular/core';
import { LucideAngularModule, ShieldCheck, Zap, Users, CheckCircle2 } from 'lucide-angular';
import { ParticlesComponent } from '../../ui/particles/particles.component';

@Component({
  selector: 'app-why-zapurse',
  standalone: true,
  imports: [LucideAngularModule, ParticlesComponent],
  templateUrl: './why-zapurse.component.html',
  styleUrl: './why-zapurse.component.css'
})
export class WhyZapurseComponent {
  features = [
    {
      icon: ShieldCheck,
      title: "Trusted & Secure",
      description: "Latest security protocols ensuring 100% safe transactions for you and your customers."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Industry-leading success rates with instant processing for recharges."
    },
    {
      icon: Users,
      title: "Nationwide Network",
      description: "Join a growing family of 50,000+ happy retailers and distributors across India."
    },
    {
      icon: CheckCircle2,
      title: "Best Commissions",
      description: "Maximize your earnings with the most competitive commission structures in the market."
    }
  ];
}
