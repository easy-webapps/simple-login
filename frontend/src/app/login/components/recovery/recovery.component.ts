import { Component, Input } from '@angular/core';

import { RecoveryService } from '../../services/recovery.service';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.scss']
})
export class RecoveryComponent {

  @Input() recoveryService: RecoveryService;
  constructor() { }

}
