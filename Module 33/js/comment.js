const LoadComments =() =>{
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.error('error happened',error))
}

const  LoadComments2 = async() =>{
    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
        const data = await res.json();
        console.log(data);
    }
    catch{
        console.log('data load error' ,error);
    }
}