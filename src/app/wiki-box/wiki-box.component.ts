import { Component, OnInit, Input } from '@angular/core';
import { WikiService } from '../services/wiki.service';
import { WikiResponse } from '../lib/WikiResponse';

@Component({
  selector: 'app-wiki-box',
  templateUrl: './wiki-box.component.html',
  styleUrls: ['./wiki-box.component.css']
})
export class WikiBoxComponent implements OnInit {

  entries: WikiResponse[] = [];

  constructor(private wikiService: WikiService) { }

  ngOnInit() {
      this.wikiService.WikiEmitter.subscribe(r =>
        this.entries = r);
  }

}
