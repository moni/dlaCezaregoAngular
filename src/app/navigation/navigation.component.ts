import {Component} from '@angular/core';

import {AuthService} from '../auth/auth.service';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {

  constructor(private authService: AuthService) {
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logOut(): BehaviorSubject<any> {
    return this.authService.logOutUser();
  }
}
