import { Component, OnInit } from '@angular/core';
import { BackendService } from '../shared/backend.service';
import { Member } from '../shared/member';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  members!: Member[];
  constructor(private bs: BackendService) { }

  ngOnInit(): void {
    this.readAll();
  }

  readAll(): void {
    this.bs.getAll().subscribe(
      (
        response: Member[]) => {
        this.members = response;
        console.log(this.members);
        return this.members;
      },
      error => console.log(error)
    );
  }

  delete(id: string): void {
    console.log("id :" ,id );

}
}
