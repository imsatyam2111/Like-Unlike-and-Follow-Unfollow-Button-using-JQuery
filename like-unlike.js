$(document).ready(function () {
    let likesMeter = $(".likeMeter");
    let button = $(".like-unlike");
    let likesCount;
    
    
    $.get("https://jsonplaceholder.typicode.com/todos/5", function(res) {
        likesCount = res;
        console.log(likesCount.id)
        likesMeter.text(likesCount.id)
    });
    
    button.click(function () {
        console.log(likesCount.completed);
        
        if (!likesCount.completed) {
            console.log("if block executed")
            fetch('https://jsonplaceholder.typicode.com/todos/5', {
                method: 'PATCH',
                body: JSON.stringify({
                    id: ++likesCount.id,
                    completed: !likesCount.completed
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                likesMeter.text(json.id);
                console.log("2 " + likesCount.completed)
            }); 
        } else {
            console.log("else statement executed");
            fetch('https://jsonplaceholder.typicode.com/todos/5', {
                method: 'PATCH',
                body: JSON.stringify({
                    id: --likesCount.id,
                    completed: !likesCount.completed
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
            .then((response) => response.json())
            .then((json) => {
                console.log(json);
                likesMeter.text(json.id)
            }); 
        }
        
    });
    
})