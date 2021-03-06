$(document).ready(function () {
    let likesMeter = $(".likeMeter");
    let button = $("#like-unlike");
    
    /******** AJAX get request *********/
    
    /*let likeStats = [];
    
    
    $.get("https://jsonplaceholder.typicode.com/todos/5", function(res) {
        likeStats = res;
        console.log(likeStats)
        console.log(likesCount.id)
    });*/
    
    // Fake Like data
    const likeStats = {
        isLiked: false,
        likeCounts: 45
    }
    
    likesMeter.text(likeStats.likeCounts);
    
    button.click(function () {
        //  console.log(likesCount.completed);
        
        if (likeStats.isLiked == false) {
            console.log("if block executed")
            
            /******** AJAX Post Request ***********/
            /*fetch('https://jsonplaceholder.typicode.com/todos/5', {
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
            }); */
            likeStats.isLiked = !likeStats.isLiked;
            likeStats.likeCounts++;
            likesMeter.text(likeStats.likeCounts);
            
            // Change Icon
            button.addClass('fas').removeClass('far')
            
        } else {
            console.log("else statement executed");
            
            likeStats.isLiked = !likeStats.isLiked;
            likeStats.likeCounts--;
            likesMeter.text(likeStats.likeCounts);
            
            // Change Icon
            button.addClass('far').removeClass('fas')
            
            /******* AJAX post request ******/
            /*fetch('https://jsonplaceholder.typicode.com/todos/5', {
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
            }); */
        }
        
    });
    
})