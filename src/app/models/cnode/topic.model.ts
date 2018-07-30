export enum Tab {
    'all' = 'all',
    'good' = 'good',
    'share' = 'share',
    'ask' = 'ask',
    'job' = 'job',
    'dev' = 'dev'
}

export enum Tab_Map {
    'all' = '全部',
    'good' = '精华',
    'share' = '分享',
    'ask' = '问答',
    'job' = '招聘',
    'dev' = '客户端测试'
}


export interface Author {
    loginname: string;
    avatar_url: string;
}

export class Topic {
    id: string;
    title: string;
    author_id: string;
    good: boolean;
    top: boolean;
    tab: string;
    reply_count: number;
    visit_count: number;
    create_at: string;
    author: Author;
}

export class Reply {
    id: string;
    author: Author;
    content: string;
    create_at: string;
    is_uped: boolean;
    reply_id: string | null;
    ups: any[];
}

export class TopicDetail {
    id: string;
    title: string;
    author_id: string;
    content: string;
    good: boolean;
    top: boolean;
    tab: string;
    is_collect: boolean;
    reply_count: number;
    visit_count: number;
    create_at: string;
    last_reply_at: string;
    author: Author;
    replies: Reply[];
}
