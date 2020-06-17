import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MaterialModule } from '../shared/material.module';
import { BoardListComponent } from './board-list/board-list.component';
import { BoardComponent } from './board/board.component';
import { BoardDialogComponent } from './dialogs/board-dialog/board-dialog.component';
import { TaskDialogComponent } from './dialogs/task-dialog/task-dialog.component';
import { BoardRoutingModule } from './board-routing.module';


@NgModule({
  declarations: [
    BoardListComponent,
    BoardComponent,
    BoardDialogComponent,
    TaskDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    DragDropModule,
    MatDialogModule,
    MatButtonToggleModule,
    BoardRoutingModule
  ],
  entryComponents: [BoardDialogComponent, TaskDialogComponent]
})
export class BoardsModule {}
