import { Component } from '@angular/core';
import { LucideAngularModule, MessageCircle } from 'lucide-angular';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './whatsapp-button.component.html',
  styleUrl: './whatsapp-button.component.css'
})
export class WhatsappButtonComponent {
  readonly MessageCircle = MessageCircle;
}
