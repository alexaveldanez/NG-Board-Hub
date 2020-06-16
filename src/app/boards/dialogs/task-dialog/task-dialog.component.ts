import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialogState } from '@angular/material/dialog';

import { BoardService } from '../../board.service';

@Component({
  selector: 'app-task-dialog',
  templateUrl: 'task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})

export class TaskDialogComponent {

  labelOptions = ['blue', 'green', 'orange', 'yellow', 'red', 'gray'];

  constructor(
    public dialogRef: MatDialogRef<TaskDialogComponent>,
    private boardService: BoardService,
    @Inject(MAT_DIALOG_DATA) public data: any
    ) {}

  onDeleteTask() {
    this.boardService.removeTask(this.data.boardId, this.data.task);
    this.dialogRef.close();
  }
}
