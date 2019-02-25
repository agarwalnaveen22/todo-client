import { Component, OnInit } from '@angular/core';
import { ConfigService } from 'src/app/services/config.service';
import { CommonService } from 'src/app/services/common.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddTaskComponent } from '../add-task/add-task.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  tasks: any;
  constructor(
    private configService: ConfigService,
    private commonService: CommonService,
    private modalService: NgbModal,
  ) { }

  ngOnInit() {
    this.getAllTasks();
  }

  logout = () => {
    this.commonService.logout();
  }

  getAllTasks = async () => {
    try {
      let resp = await this.configService.getRequest('tasks', {});
      if (resp) {
        this.tasks = resp;
      }
    } catch (err) {
      this.commonService.showError(err);
    }
  }

  addTask = async (taskId) => {
    const modalRef = this.modalService.open(AddTaskComponent);
    modalRef.componentInstance.taskId = taskId;
    let resp = await modalRef.result;
    if (resp == 2) {
      this.getAllTasks();
    }
  }

  removeTask = async (taskId) => {
    if (confirm('Are you sure?')) {
      try {
        let resp = await this.configService.deleteRequest('tasks/'+taskId, {});
        if (resp) {
          this.commonService.showSuccess("Task has been removed.");
          this.getAllTasks();
        }
      } catch (err) {
        this.commonService.showError(err);
      }
    }
  }

}
