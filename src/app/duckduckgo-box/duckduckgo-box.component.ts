import { Component, OnInit } from '@angular/core';
import { DuckDuckGoService } from '../services/duck-duck-go.service';
import { DuckDuckGoRes } from '../lib/DuckDuckGoRes';

/**
 * Class that handles box where entries from
 * DuckDuckGo are displayed
 */
@Component({
  selector: 'app-duckduckgo-box',
  templateUrl: './duckduckgo-box.component.html',
  styleUrls: ['./duckduckgo-box.component.css']
})
export class DuckduckgoBoxComponent implements OnInit {

  /** Results from the search */
  entries: DuckDuckGoRes[];

  constructor(private service: DuckDuckGoService) { }

  ngOnInit(): void {
    this.service.emitter.subscribe(data => {
        this.entries = data.RelatedTopics;
      });
  }



}
