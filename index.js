// Import stylesheets
import './style.css';
let alltweetcontainer = document.getElementById('alltweetscontainer')

getdata()

let alltweetdiv=``
function getdata(){
    fetch('https://jsonplaceholder.typicode.com/posts?').then((data)=>{
        return data.json()
    }).then((resp)=>{
        console.log(resp)
        // getcommand(resp[7].id)
        resp.forEach(element =>{
        alltweetdiv=alltweetdiv+`<br><div class="maindiv">
                                         <div id="postdiv">
                                                <div class="imgdiv">
                                                 <p><b>Title :</b>${element.title}</p>
                                               </div><hr>
                                                   <div class="bottomdiv">
                                                        <span id="comment" onclick="commentfun(${element.id})" style="color:red;">&#128172;</span>
                                                        <span id="retweetbtn${element.id}" class="retweetbtn" onclick="repeatfun(${element.id})">&#10562;</span>
                                                        <span onclick="likeandunlike(${element.id})" class="likebtn" id="likebtn${element.id}">&#10084;</span>
                                                        <span id="share" onclick="sharefun(${element.id})">&#9895;</span>
                                                   </div><hr>
                                                    <div id="commentsdiv${element.id}" class="commentsbox" style="display: none;">
                                           </div>   </div>  
                                    </div>`
        })

    
alltweetcontainer.innerHTML=alltweetdiv
    })
}

let commentdisp = true
function  commentfun(id){
    let commentsdiv=document.getElementById('commentsdiv'+id)
    let postcomments=``
    
    commentdisp=!commentdisp 

    fetch('https://jsonplaceholder.typicode.com/comments?postId='+id).then((data)=>{
        return data.json()
    }).then((com)=>{
        console.log(com)
        let commennum=1
        com.forEach(element => {
            postcomments=postcomments+`<p><b>Comment${commennum}</b>: ${element['body']}`
           commennum++
           
    
    });
        commentsdiv.innerHTML=postcomments
        if(commentdisp){
         commentsdiv.style.display='none'
        }else{
            commentsdiv.style.display='block' 
        }
    })
}
