import React from 'react'


function ReviewPage(props) {



return(
    <>
    <div>
        <h1>Leave a review for this station</h1>
    </div>
    <div>
        <form>
            <input type="text" placeholder="Write your review"></input>
            <input type="submit" onClick="()=>{preventDefault()}"></input>
        </form>
    </div>
    </>
)

}

export default ReviewPage;