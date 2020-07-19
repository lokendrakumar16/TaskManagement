import { Component, OnInit } from '@angular/core';
import { TaskService } from '../app/task.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'task';
  addTaskPopup = false;
  updateTaskPopup = false;
  txtTask='';
  txtDesc='';
  taskId=1;
  dataset: any;
  isDataLoaded= false;

  constructor (private _service: TaskService) {}
  ngOnInit(): void {
    this.txtTask='';
    this.txtDesc='';
    this.isDataLoaded = false;
    this._service.gettask().subscribe((res) => {
        this.dataset = res;
        this.isDataLoaded = true;
    });
  }

  openNewPopup () {
    this.txtTask='';
    this.txtDesc='';
    this.addTaskPopup = true;
  }

  addTask() {
    this.isDataLoaded = false;
    let taskPayload= {
      'Description': this.txtTask,
      'ShortDescription': this.txtDesc
    }
    this.isDataLoaded = false;
    this._service.addtask(taskPayload).subscribe(() => {
    });
    this.addTaskPopup = false;
    setTimeout(() => {
      this._service.gettask().subscribe((res) => {
        if(res){
          this.dataset = res;
          this.txtTask='';
          this.txtDesc='';
          this.isDataLoaded = true;
        }          
      });        
    }, 2000);
    

  }

  openUpdatePopup (task) {
    this.txtTask='';
    this.txtDesc='';
    this.taskId = 0;
    this.taskId = task.id;
    this.txtTask=task.description;
    this.txtDesc=task.shortDescription;
    this.updateTaskPopup = true;
  }

  updateTask () {
    let taskPayload= {
      'Id':this.taskId,
      'Description': this.txtTask,
      'ShortDescription': this.txtDesc
    }
    this.isDataLoaded = false;
    this._service.updatetask(taskPayload).subscribe(() => {
    });
    this.addTaskPopup = false;
    this.updateTaskPopup = false;
    setTimeout(() => {
      this._service.gettask().subscribe((res) => {
        if(res){
          this.dataset = res;
          this.txtTask='';
          this.txtDesc='';
          this.isDataLoaded = true;
        }          
      });        
    }, 2000);
  }

  deleteTask(task) {
    this.isDataLoaded = false;
    this._service.deletetask(task.id).subscribe((res)=>{
    });
    setTimeout(() => {
      this._service.gettask().subscribe((res) => {
        if(res){
          this.dataset = res;
          this.txtTask='';
          this.txtDesc='';
          this.updateTaskPopup = false;
          this.isDataLoaded = true;
        }          
      });        
    }, 2000);
  }
}
