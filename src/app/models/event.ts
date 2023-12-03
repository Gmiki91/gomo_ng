interface Accessory{
    name: string;
    qty:number;
}

export type Event = {
    id:string;
    name:string;
    minPeople:number;
    maxPeople:number;
    startingAt:string;
    location:string;
    duration?:number;
    note?:string;
    accessories?:Accessory[];
}