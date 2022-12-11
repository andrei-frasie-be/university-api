import { Injectable } from '@nestjs/common';

export interface Student {
  name: string;
  avgGrade: number;
  note?: string;
}

export interface AppStatus {
  state: boolean;
  message: string;
}

@Injectable()
export class AppService {
  getStatus(): AppStatus {
    return { state: true, message: 'Seems like everything is running well' };
  }

  getStudents(): Student[] {
    return [
      {
        name: 'Jack Sparrow',
        avgGrade: 6,
      },
      {
        name: 'Leanne Stark',
        avgGrade: 9,
      },
      {
        name: 'John Snow',
        avgGrade: 1,
        note: 'He knows nothing',
      },
    ];
  }
}
