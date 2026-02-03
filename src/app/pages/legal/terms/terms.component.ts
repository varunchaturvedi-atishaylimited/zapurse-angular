import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LegalLayoutComponent } from '../legal-layout/legal-layout.component';

@Component({
  selector: 'app-terms',
  standalone: true,
  imports: [CommonModule, LegalLayoutComponent],
  templateUrl: './terms.component.html',
  styleUrl: './terms.component.css'
})
export class TermsComponent {
  // Static content, no complex logic needed
}
