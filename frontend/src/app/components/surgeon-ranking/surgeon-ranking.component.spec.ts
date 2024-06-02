
import { Component, OnInit } from '@angular/core';
import { SurgeonService } from '../../services/surgeon.service';
import { Surgeon } from '../../models/surgeon.model';

@Component({
  selector: 'app-surgeon-ranking',
  templateUrl: './surgeon-ranking.component.html',
  styleUrls: ['./surgeon-ranking.component.scss']
})
export class SurgeonRankingComponent implements OnInit {
  surgeons: Surgeon[] = [];

  constructor(private surgeonService: SurgeonService) { }

  ngOnInit(): void {
    this.loadSurgeons();
  }

  loadSurgeons(): void {
    this.surgeonService.getSurgeons().subscribe(data => {
      this.surgeons = data;
    });
  }
}
