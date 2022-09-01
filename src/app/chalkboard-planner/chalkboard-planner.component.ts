import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-chalkboard-planner',
  templateUrl: './chalkboard-planner.component.html',
  styleUrls: ['./chalkboard-planner.component.scss']
})
export class ChalkboardPlannerComponent implements OnInit {

  boardArray: any = {
    'wahrenhouse': [],
    'monday': [],
    'wednesday': [],
    'friday': [],
    'remove': []
  };

  constructor(public service: DataService) { }

  async ngOnInit(): Promise<void> {
    await this.service.getAllData();
    this.changeProductFilter();
  }


  changeProductFilter() {
    let wahrenhouse = this.service.foodsArray.filter(t => t['chalkboard'] == 'wahrenhouse');
    wahrenhouse.forEach(element => {
      this.boardArray.wahrenhouse.push(element);
    });

    let monday = this.service.foodsArray.filter(t => t['chalkboard'] == 'monday');
    monday.forEach(element => {
      this.boardArray.monday.push(element);
    });

    let wednesday = this.service.foodsArray.filter(t => t['chalkboard'] == 'wednesday');
    wednesday.forEach(element => {
      this.boardArray.wednesday.push(element);
    });

    let friday = this.service.foodsArray.filter(t => t['chalkboard'] == 'friday');
    friday.forEach(element => {
      this.boardArray.friday.push(element);
    });

    console.log(this.boardArray)
  }


  async drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
    if (event.container.id === 'wahrenhouse') {
      let name: any = 'wahrenhouse';
      await this.service.editFood(name, event.container.data[event.currentIndex]['id']);
    }
    if (event.container.id === 'monday') {
      let name: any = 'monday';
      await this.service.editFood(name, event.container.data[event.currentIndex]['id']);
    }
    if (event.container.id === 'wednesday') {
      let name: any = 'wednesday';
      await this.service.editFood(name, event.container.data[event.currentIndex]['id']);
    }
    if (event.container.id === 'friday') {
      let name: any = 'friday';
      await this.service.editFood(name, event.container.data[event.currentIndex]['id']);
    }
    if (event.container.id === 'remove') {
      this.boardArray.remove = [];
      this.service.deleteFoodFromDoc(event.container.data[0]['id']);
    }
  }
}
