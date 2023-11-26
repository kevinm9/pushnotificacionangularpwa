import { Component } from '@angular/core';
import { AngularFireMessaging } from '@angular/fire/compat/messaging';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  token:string = '';

  constructor(private afMessaging: AngularFireMessaging) {}

  ngOnInit() {
    this.requestPermission();
    this.listen();
  }

  requestPermission() {
    this.afMessaging.requestPermission.subscribe({
      next: (token) => {
        if (token === 'granted') {
          this.afMessaging.onBackgroundMessage;
          this.getToken();
        }else{
          alert("por favor de permiso para enviar notificaciones")
        }
      },
    });
  }

  getToken() {
    this.afMessaging.getToken.subscribe({
      next: (token) => {
        this.token = token as string;
        console.log(token);
      },
    });
  }

  listen() {
    this.afMessaging.messages.subscribe((message) => {
      console.log(message);
      alert('nuevo alumon');
    });
  }
}
