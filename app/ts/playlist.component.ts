import {Component} from 'angular2/core';

@Component ({
    selector: 'playlist',
    templateUrl: 'app/ts/playlist.component.html'
})
export class PlaylistComponent{
	videos = ["What is my duty?", "Ziyarat Ameenallah", "Where is she?", "Where are they?"];
}