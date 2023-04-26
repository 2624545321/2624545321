import { Component } from '@angular/core';
import { HeaderNavLink } from '../../models';

@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent {
  protected navLink: HeaderNavLink[] = [
    { path: '/home', label: '首页' },
    { path: '/login', label: '登录' },
    { path: '/register', label: '注册' },
  ]
}
