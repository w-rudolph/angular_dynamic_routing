import { Component, OnInit, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CNodeService } from './../../services/cnode/cnode.service';
import { Topic, Tab_Map } from './../../models/cnode/topic.model';

@Component({
    selector: 'app-cnode',
    templateUrl: './cnode.component.html',
    styleUrls: ['./cnode.component.scss']
})
export class CNodeComponent implements OnInit {

    topics: Topic[];
    page: number = 1;
    hasMore: boolean = true;
    @ViewChild('tpl')
    tplRef: ElementRef;

    constructor(private service: CNodeService, private render: Renderer2) { }

    ngOnInit() {
        this.getTopics();
    }

    getTopics(page = 1) {
        this.service.getTopics({ page }).subscribe(res => {
            if (res.data.length < 40) {
                this.hasMore = false;
            }
            if (res.data.length === 0) return;
            this.hasMore = true;
            this.topics = res.data;
        })
    }

    getTopicTab(topic: Topic) {
        let tab = topic.tab;
        if (topic.good) {
            tab = 'good';
        }
        if (topic.top) {
            return '置顶';
        }
        return Tab_Map[tab];
    }

    pagerChange(prev = false) {
        if (prev) {
            if (this.page === 1) return;
            else {
                this.page -= 1;
            }
            setTimeout(() => this.scrollToTop(), 1000);
            return this.getTopics(this.page);
        }
        this.page += 1;
        this.getTopics(this.page);
        setTimeout(() => this.scrollToTop(), 1000);
    }

    scrollToTop() {
        const el$ = <HTMLUListElement>this.tplRef.nativeElement
        el$.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    itemTrackBy(index: number, item: Topic) {
        return item.id;
    }

}