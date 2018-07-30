import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CNodeService } from './../../services/cnode/cnode.service';
import { TopicDetail } from './../../models/cnode/topic.model';

@Component({
    selector: 'app-topic-detail',
    templateUrl: './cnode-detail.component.html',
    styleUrls: ['./cnode-detail.component.scss']
})
export class CNodeDetailComponent implements OnInit {

    topcicDetail: TopicDetail;

    constructor(private route: ActivatedRoute, private service: CNodeService) { }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.getTopicDetail(params.id);
        });
    }

    getTopicDetail(id: String) {
        this.service.getTopic(id).subscribe(res => {
            this.topcicDetail = res.data;
        });
    }
}
