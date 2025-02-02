import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LinkedinPostComponent } from "./linkedin-post/linkedin-post.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [RouterOutlet, LinkedinPostComponent]
})
export class AppComponent {
  title = 'linkedin-post';
}
