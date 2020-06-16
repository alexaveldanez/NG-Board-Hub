import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';

import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';
import { Board } from '../board.model';
import { Task } from '../task.model';
import { BoardService } from '../board.service';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent {
  @Input() board: Board;

  constructor(private boardService: BoardService, private dialog: MatDialog) {}

  taskDrop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.board.tasks, event.previousIndex, event.currentIndex);
    this.boardService.updateTasks(this.board.id, this.board.tasks);
  }

  openDialog(task?: Task, idx?: number): void {
    const newTask = { label: 'green' };
    const dialogRef = this.dialog.open(TaskDialogComponent, {
      width: '500px',
      data: task
        ? { task: { ...task }, isNew: false, boardId: this.board.id, idx }
        : { task: newTask, isNew: true }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        if (result.isNew) {
          this.boardService.updateTasks(this.board.id, [
            ...this.board.tasks,
            result.task
          ]);
        } else {
          const update = this.board.tasks;
          update.splice(result.idx, 1, result.task);
          this.boardService.updateTasks(this.board.id, this.board.tasks);
        }
      }
    });
  }

  onDelete() {
    this.boardService.deleteBoard(this.board.id);
  }

}
