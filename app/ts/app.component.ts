import {Component} from 'angular2/core';
import {Config} from './config.service';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    template: `<h1>First Angular 2 {{mainHeading}} project</h1>
     			<playlist></playlist>
				`,
	directives: [PlaylistComponent]
})

export class AppComponent {
    mainHeading = Config.MAIN_HEADING;

}
