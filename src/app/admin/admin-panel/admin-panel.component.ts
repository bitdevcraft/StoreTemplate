import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzDrawerModule } from 'ng-zorro-antd/drawer';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { CommonModule } from '@angular/common';
import {
  matMenuOutline,
  matCloseOutline,
} from '@ng-icons/material-icons/outline';

@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    RouterModule,
    NzLayoutModule,
    NzMenuModule,
    NzDrawerModule,
    NgIconComponent,
    NzButtonModule,
    CommonModule,
    NzDropDownModule,
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
  viewProviders: [provideIcons({ matMenuOutline, matCloseOutline })],
})
export class AdminPanelComponent {
  visible = false;

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  navList: string[] = ['Home', 'Services', 'About'];

  subnavList: { parent: string; child: string[] }[] = [
    {
      parent: 'subnav1',
      child: ['option 1', 'option 2', 'option 3'],
    },
    {
      parent: 'subnav2',
      child: ['option 4', 'option 5', 'option 6'],
    },
    {
      parent: 'subnav3',
      child: ['option 7', 'option 8', 'option 9'],
    },
  ];
}
