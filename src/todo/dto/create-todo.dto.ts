/* eslint-disable prettier/prettier */

import { ApiProperty } from '@nestjs/swagger';
export class CreateTodoDto {
  @ApiProperty({
    description: "The title of todo.",
  })
  title: string;

  @ApiProperty({
    description: "The status of the todo.",
    default: false,
  })
  done: boolean;
}
