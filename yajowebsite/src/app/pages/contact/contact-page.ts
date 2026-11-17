import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact-page',
  imports: [FormsModule],
  templateUrl: './contact-page.html',
  styleUrl: './contact-page.css',
})
export class ContactPage {
  protected readonly year = new Date().getFullYear();
  protected message = { name: '', email: '', subject: '', body: '' };

  protected sendMessage(): void {
    const body = `From: ${this.message.name} (${this.message.email})\n\n${this.message.body}`;
    const mailto = `mailto:yajuflutistacharya@gmail.com?subject=${encodeURIComponent(this.message.subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailto;
  }
}
