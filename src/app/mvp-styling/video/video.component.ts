import { Component, OnInit, PipeTransform, Pipe } from '@angular/core';
import { DomSanitizer } from "@angular/platform-browser";

@Pipe({ name: 'safe' })
export class SafePipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }
  transform(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}

@Component({
    selector: 'mvp-styling-video',
    templateUrl: './video.component.html',
    styleUrls: ['./video.component.scss']
})
export class VideoComponent {
  private videos: YouTubeVideo[] = [
    {url: 'https://www.youtube.com/embed/rtjOdFJzuvc', name: 'Gaidaa - Morning Blue'},
    {url: 'https://www.youtube.com/embed/6czMEm2BzBQ', name: 'Bouzzy - Shock It ft. F1rstman'},
    {url: 'https://www.youtube.com/embed/ABaL0Uxtexk', name: 'TheColorGrey - Nothing At All'},
    {url: 'https://www.youtube.com/embed/M6FioGxassE', name: 'Chaz & Djalu - Bella Donna'},
    {url: 'https://www.youtube.com/embed/x3FFuHZ3JCw', name: 'Surafeal - Ulysse'},
    {url: 'https://www.youtube.com/embed/HZWgBseLPeY', name: 'TheColorGrey - Swerve'}
  ];
}

export class YouTubeVideo {
  url: string;
  name: string;
}
