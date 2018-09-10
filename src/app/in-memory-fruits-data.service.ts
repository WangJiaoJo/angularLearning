import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryFruitsDataService implements InMemoryDbService {
    createDb() {
        const fruits = [
            { id: 1, name: 'Apple', decription: 'red color and sweet' },
            { id: 2, name: 'Banana', description: 'yellow color and sweet' },
            { id: 3, name: 'Orange', description: 'orange color and sweet and a little sour' },
            { id: 4, name: 'Peach', description: 'pink color and sweer' },
            { id: 5, name: 'Mango', description: 'yellow color and sweet' },
            { id: 6, name: 'Grape', description: 'purple color and sweet' },
            { id: 7, name: 'Watermelon', description: 'green color and sweet' },
            { id: 8, name: 'Strawberry', description: 'red color and sweet' },
            { id: 9, name: 'Pear', description: 'green color and sweet' },
            { id: 10, name: 'Lichi', description: 'red color and sweet' }
        ];
        return fruits;
    }
}