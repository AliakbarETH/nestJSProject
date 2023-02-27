import { Injectable, Request, Req } from '@nestjs/common';

@Injectable()
// we can inject a service in a class through constructor
export class UserService {
  get() {
    return ' I am a user service';
  }
  create(body: any) {
    return body;
  }
  update(req: Request, param: { userID: number }) {
    return { body: req.body, param };
  }
  show(param: { userID: number }) {
    return param ;
    // body: req.body,
  }

  delete(param: { userID: number }) {
    return param;
  }

  
}
