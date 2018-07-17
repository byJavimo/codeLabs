import {Post} from '../app/classes/post';

export const POSTS: Post[] = [
    {
        id: 0,
        title: "Título post mock 1",
        description: "Description post mock",
        mainImg: "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg",
        author: {id: 1, name: "John", surname: "Doe", avatarImage: "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg"}
    },
    {
        id: 1,
        title: "Título post mock 2",
        description: "Description post mock",
        mainImg: "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg",
        author: {id: 1, name: "John", surname: "Doe", avatarImage: "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg"}
    },
    {
        id: 2,
        title: "Título post mock 3",
        description: "Description post mock",
        mainImg: "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg",
        author: {id: 1, name: "John", surname: "Doe", avatarImage: "http://jsequeiros.com/sites/default/files/imagen-cachorro-comprimir.jpg" }
    }
]