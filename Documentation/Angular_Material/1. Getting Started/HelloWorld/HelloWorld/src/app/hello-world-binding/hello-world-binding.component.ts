import { Component } from "@angular/core";

@Component({
    selector: 'hello-world-binding',
    templateUrl: './hello-world-binding.component.html' 
})

export class HelloWorldBindingComponent {
    fontColor = 'red';
    sayHelloId = 1;
    canClick = false;
    message = 'Hello, World';

    sayMessage(){
        alert(this.message);
    }
}