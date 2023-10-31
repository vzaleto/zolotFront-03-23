    let getPostId = document.querySelector('.post-id');

    let getPostBody = document.querySelector('.post-body')

    let getPostTitle = document.querySelector('.post-title');

    let input = document.querySelector('#id_post');

        let inputError = document.querySelector('.error');
    
        let itemBtn =  document.querySelector('.item-btn');

        let btnComment =  document.querySelector('.item-btn .btn');

    let getComName = document.querySelector('.comment-name');

    let getComEmail = document.querySelector('.comment-email');

    let getComBody = document.querySelector('.comment-body')


input.oninput = function(){

        fetch(`https://jsonplaceholder.typicode.com/posts/${input.value}`)




    .then((resp)=>{

        if (resp.status != 200) {

            console.log(resp.status)

        }else{

            inputError.innerHTML = '';

            return resp.json();
        }
        
    })
    .then((data)=>{

                getPostId.innerHTML = data.id ? data.id : "";

                getPostTitle.innerHTML = data.title ? data.title : "";

                getPostBody.innerHTML = data.body ? data.body : "";

                getComName.innerHTML = "";

                getComEmail.innerHTML =  "";

                getComBody.innerHTML =  "";

                if(  input.value.length  > 0){

                    console.log(333)

                      itemBtn.style.display = "block";

                }else{
                     itemBtn.style.display = "none";

                }

                    

    }).catch((error)=>{

        inputError.innerHTML = 'pleathe enterr correct 1 - 100, or number';
        // itemBtn.style.display = "none"

        getComName.innerHTML = "";
        getComEmail.innerHTML =  "";
        getComBody.innerHTML =  "";

    })

}

function getContact(){

    fetch(`https://jsonplaceholder.typicode.com/comments/${input.value}`)

    .then((resp) =>{

        if(resp.status != 200){

            console.log(resp.status)

        }else{

            return resp.json();

        }
    })
    .then((data)=>{

        getComName.innerHTML = data.name ? data.name : "";

        getComEmail.innerHTML = data.email ? data.email : "";

        getComBody.innerHTML = data.body ? data.body : "";

    })
    .catch((error) => {

        console.log(error)
    })
}

btnComment.addEventListener('click',getContact.bind(null,input.value));

