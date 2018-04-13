import { Pipe, PipeTransform } from '@angular/core';
import { timeago } from '../utils/util';

@Pipe({
    name: 'timeago'
})
export class TimeagoPipe implements PipeTransform{
    transform(value: string): string {
        return timeago(new Date(value));
    }
}

