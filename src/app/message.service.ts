import { Injectable } from '@angular/core';
//用 @Injectable() 装饰器来提供元数据，以便让 Angular 可以把它作为依赖注入到组件中
@Injectable({
  providedIn: 'root',
})
export class MessageService {
  messages: string[] = [];

  add(message: string) {
    this.messages.push(message);
  }

  clear() {
    this.messages = [];
  }
}