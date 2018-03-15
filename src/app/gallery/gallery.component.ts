import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {

  showSelected: boolean;
   animals: any = [
    {id: 0, url: '../assets/animals/fish-3218125_640.jpg', descr: 'I was very proud of my nickname throughout high school.'},
    {id: 1, url:  '../assets/animals/cat-3214075_640.jpg', descr: 'The quick brown fox jumps over the lazy dog.'},
    {id: 2, url:  '../assets/animals/dog-3218160_640.jpg', descr: 'She did her best to help him.'},
    {id: 3, url:  '../assets/animals/egyptian-goose-3215748_640.jpg', descr: 'Is it free?'},
    {id: 4, url:  '../assets/animals/cat-3220381_640.jpg', descr: 'I will never be this young again. Ever. Oh damn… I just got older.'},
    {id: 5, url:  '../assets/animals/german-wasp-3216970_640.jpg', descr: 'He turned in the research paper on Friday.'},
    {id: 6, url:  '../assets/animals/hirsch-3217194_640.jpg', descr: 'He said he was not there yesterday.'},
    {id: 7, url:  '../assets/animals/insect-3216992_640.jpg', descr: 'She was too short to see over the fence.'},
    {id: 8, url:  '../assets/animals/lion-3214071_640.jpg', descr: 'Check back tomorrow; I will see if the book has arrived.'},
    {id: 9, url:  '../assets/animals/owl-3184032_640.jpg', descr: 'He told us a very exciting adventure story.'}
      ];
      animalLikes = [];
      outputmessage = 'Please rate the image to see next';


      public countObject() {
        const co = Object.keys(this.animals).length;

        if (co > 0) {
        this.outputmessage = 'What we have for now';
        } else {
          this.outputmessage = 'No more images to rate :(';
        }
      }

      public like(animal, id) {
        this.animalLikes.push(animal);
        this.animals = this.animals.filter(item => item.id !== id);
        this.countObject();
      }

      public dislike(event, id) {
        // removing item from object
        this.animals = this.animals.filter(item => item.id !== id);
        this.countObject();

      }

}
