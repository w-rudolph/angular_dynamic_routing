import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CNodeComponent } from './cnode.component';
import { CNodeDetailComponent } from './cnode-detail.component';
import { CNodeService } from './../../services/cnode/cnode.service';
import { TimeagoPipe } from './../../pipes/timeago.pipe';
import { SanitizeHtmlPipe } from './../../pipes/santitizeHtml.pipe';

@NgModule({
    declarations: [CNodeComponent, CNodeDetailComponent, TimeagoPipe, SanitizeHtmlPipe],
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: CNodeComponent
            },
            {
                path: 'detail/:id',
                data: { showFooter: false },
                component: CNodeDetailComponent
            }
        ])
    ],
    providers: [CNodeService],
    exports: [RouterModule]
})
export class CNodeModule { }
