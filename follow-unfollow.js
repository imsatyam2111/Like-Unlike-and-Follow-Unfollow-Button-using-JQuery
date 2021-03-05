$(document).ready(function() {
    let button = $(".follow-unfollow");
    let followerMeter = $(".follower-count");
    
    // Fake Followers Data
    /*** Fetch and put data here from your API ***/
    const followerStats = {
        isFollowed: false,
        followersDetail: [ 'user_1', 'user_2'],
        followersCount: 2
    }
    
    // Control Follwers Meter
    followerMeter.text(followerStats.followersCount)
    
    // Follow/Unfollow Button Functionalilty
    button.click(function followUnfollow() {
        if (followerStats.isFollowed === false){
            followerStats.isFollowed = !followerStats.isFollowed;
            followerStats.followersCount++;
            followerStats.followersDetail.push('user_3');   // Pushing the userName to later track the follower lists
            
            // Change Button text
            button.text("Unfollow")
            
            // Control Follwers Meter
            followerMeter.text(followerStats.followersCount);
            
            // Trigger Toast
            sweetAlertTrigger("You Started Following Satyam");  // Add your Custom toast message here
            
        } else {
            followerStats.isFollowed = !followerStats.isFollowed;
            followerStats.followersCount--;
            followerStats.followersDetail = followerStats.followersDetail.filter(user => user != 'user_3');   // Filter the array to remove the user from the follower list
            
            // Change Button text
            button.text("Follow")
            
            // Control Follwers Meter
            followerMeter.text(followerStats.followersCount);
            
            sweetAlertTrigger("You Unfollowed Satyam"); 
        }
        
    });
    
    // SweetAlert Toast on Follow/Unfollow Event
    function sweetAlertTrigger(title) {
        const Toast = Swal.mixin({
        toast: true,
        position: 'top',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
        });

        Toast.fire({
          icon: 'success',
          title
        });
    };
    
    
    
});