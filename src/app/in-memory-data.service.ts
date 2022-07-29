import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const movies = [
      {
        id: 1,
        name: 'The Shawshank Redemption',
        description:
          'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency. Chronicles the experiences of a formerly successful banker as a prisoner in the gloomy jailhouse of Shawshank after being found guilty of a crime he did not commit.',
        imageUrl: 'movie1.jpg',
      },
      {
        id: 2,
        name: 'The Godfather',
        description:
          'The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.',
        imageUrl: 'movie2.jpg',
      },
      {
        id: 3,
        name: 'The Dark Knight',
        description:
          'In the films plot, the superhero vigilante Batman, Police Lieutenant James Gordon and District Attorney Harvey Dent form an alliance to dismantle organized crime in Gotham City, but their efforts are derailed by the intervention of an anarchistic mastermind, the Joker, who seeks to test how far Batman will go to save the city from complete chaos.',
        imageUrl: 'movie3.jpg',
      },
      {
        id: 4,
        name: 'The Godfather Part II',
        description:
          'The continuing saga of the Corleone crime family tells the story of a young Vito Corleone growing up in Sicily and in 1910s New York; and follows Michael Corleone in the 1950s as he attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
        imageUrl: 'movie4.jpg',
      },
      {
        id: 5,
        name: '12 Angry Men',
        description:
          '12 Angry Men focuses on a jurys deliberations in a capital murder case. A 12-man jury is sent to begin deliberations in the first-degree murder trial of an 18-year old Puerto Rican boy accused in the stabbing death of his father, where a guilty verdict means an automatic death sentence.',
        imageUrl: 'movie5.jpg',
      },
      {
        id: 6,
        name: 'Schindlers List',
        description:
          'In German-occupied Poland during World War II, industrialist Oskar Schindler gradually becomes concerned for his Jewish workforce after witnessing their persecution by the Nazis.',
        imageUrl: 'movie6.jpg',
      },
      {
        id: 7,
        name: 'The Lord of the Rings: The Return of the King',
        description:
          'Gandalf and Aragorn lead the World of Men against Saurons army to draw his gaze from Frodo and Sam as they approach Mount Doom with the One Ring.',
        imageUrl: 'movie7.jpg',
      },
      {
        id: 8,
        name: 'Pulp Fiction',
        description:
          'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
        imageUrl: 'movie8.jpg',
      },
      {
        id: 9,
        name: 'The Lord of the Rings: The Fellowship of the Ring',
        description:
          'A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.',
        imageUrl: 'movie9.jpg',
      },
      {
        id: 10,
        name: 'The Good, the Bad and the Ugly ',
        description:
          'A bounty hunting scam joins two men in an uneasy alliance against a third in a race to find a fortune in gold buried in a remote cemetery.',
        imageUrl: 'movie10.jpg',
      },
    ];
    return {movies};

  }

  constructor() { }
}
