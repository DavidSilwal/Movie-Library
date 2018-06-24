import { MovieItem } from "./movieItem";
import * as _ from 'lodash';

export class MovieOrder {
    id: number;
    orderDateTime: Date = new Date();
    orderNumber: string;
    items: Array<MovieItem> = new Array<MovieItem>();
    get total(): number {
       return _.sum(_.map(this.items, i=>i.price * i.quantity));
    };
}
