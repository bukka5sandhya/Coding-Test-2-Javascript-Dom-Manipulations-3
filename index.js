let blogsList =[
    {
        blogName:'TechCrunch',
        uniqueNo:1
    },
    {
        blogName:'Wired',
        uniqueNo:2
    },
    {
        blogName:"Mashable",
        uniqueNo:3
    },
];
let blogsListContainerEle = document.getElementById("blogsListContainer");

function createAndAppend(blog){
    let blogId = "blog"+blog.uniqueNo;
    let buttonId="button"+blog.uniqueNo;

    let blogEle = document.createElement("li");
    blogEle.id = blogId;
    blogEle.textContent = blog.blogName;
    blogsListContainerEle.appendChild(blogEle);

    let buttonEle = document.createElement("button");
    buttonEle.id = buttonId;
    buttonEle.textContent = "Delete";
    buttonEle.classList.add("btn","btn-danger","ml-3");
    buttonEle.onclick = function(){
        blogsListContainerEle.removeChild(blogEle);
    }
    blogEle.appendChild(buttonEle);
}

for(let blog  of blogsList){
    createAndAppend(blog)
}