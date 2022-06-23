import axios from 'axios'

const url = 'https://jsonplaceholder.typicode.com/posts/1'
interface Post {
    id: number;
    title: string;
    description: string;
}
axios.get(url).then(response => {
    const post = response.data as Post
    const ID = post.id
    const title = post.title
    const description = post.description
    logPost(ID, title, description) 
})

const logPost = (id: number, title:string, description:string) =>{
    console.log(`
    The post with ID: ${id}
    has a title of: ${title}
    description: ${description}
    `)
}

