import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-messages', //一旦在模板 HTML 中找到了这个选择器对应的标签，就创建并插入该组件的一个实例。
  templateUrl: './messages.component.html', //该组件的 HTML 模板文件相对于这个组件文件的地址。
  styleUrls: ['./messages.component.css'], 
  providers:[] //当前组件所需的服务提供商的一个数组。
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService) {}

  ngOnInit() {
  }

}
