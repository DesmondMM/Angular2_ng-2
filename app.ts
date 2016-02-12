import {bootstrap} from "angular2/platform/browser";
import {Component} from "angular2/core";
import {ngFor} from "angular2/common"''

@Component({
    selector: 'hello-world',
    template: `
    <div>
        <ul>
            <li *ngFor="#name of names">Hello {{name}}</li>
        </ul>

    </div>
    `
})
class HelloWorld {
    name: string;

    constructor(){
        this.names = ['Desmond', 'Munashe', 'Denford', 'Tinashe'];
    }
}

bootstrap(HelloWorld);