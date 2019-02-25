import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfigService } from 'src/app/services/config.service';
import { CommonService } from 'src/app/services/common.service';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  @Input() taskId: string = '';
  task:any = {
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 1
  };
  submitBtnLabel: string = 'Add';
  today: object;
  constructor(
    public activeModal: NgbActiveModal,
    private configService: ConfigService,
    private commonService: CommonService
  ) { }

  ngOnInit() {
    if(this.taskId != ''){
      this.submitBtnLabel = 'Update';
      this.getTaskDetail();
    } else {
      this.submitBtnLabel = 'Add';
    }
    this.today = this.commonService.formatDate(new Date());
  }

  getTaskDetail = async () => {
    try {
      let resp = await this.configService.getRequest('tasks/'+this.taskId, {});
      if(resp){
        if(resp['status']==true){
          resp['status'] = 1;
        } else {
          resp['status'] = 0;
        }
        resp['startDate'] = this.commonService.formatDate(resp['startDate']);
        resp['endDate'] = this.commonService.formatDate(resp['endDate']);
        console.log(resp);
        this.task = resp;
      }
    } catch(err) {
      this.commonService.showError(err);
    }
  }

  onSubmit = async () => {
    console.log(this.task);
    let startDate = this.task['startDate']['year']+'-'+this.task['startDate']['month']+'-'+this.task['startDate']['day'];
    let endDate = this.task['endDate']['year']+'-'+this.task['endDate']['month']+'-'+this.task['endDate']['day'];
    if(new Date(startDate) > new Date(endDate)){
      this.commonService.showError("End date can not be earlier from start date");
      return false;
    }
    this.task['startDate'] = startDate;
    this.task['endDate'] = endDate;
    try {
      let resp;
      if(this.taskId != ''){
        resp = await this.configService.patchRequest('tasks/'+this.taskId, this.task);
      } else {
        resp = await this.configService.postRequest('tasks', this.task);
      }
      if(resp){
        let message;
        if(this.taskId != ''){
          message = "Task has been updated.";
        } else {
          message = "Task has been added.";
        }
        this.commonService.showSuccess(message);
        this.activeModal.close(2);
      }
    } catch(err) {
      this.commonService.showError(err);
    }
  }

}
