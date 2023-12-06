import {Component, OnInit} from '@angular/core';
import {SocketService} from "./socket.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-socket-io-sample';

  constructor(private readonly socketService: SocketService) {
  }

  name: string;
  action: string;

  ngOnInit() {
    this.socketService.on('startTimer', () => {
      setTimeout(() => {
        this.socketService.emit('action', {name: this.name, action: this.action});
      }, 5000);
    });
  }

  startTimer(name: string) {
    this.socketService.emit('timer', {name, action: 'none'});
  }

  sendAction(name: string, action: string) {
    this.name = name;
    this.action = action;
  }

}
