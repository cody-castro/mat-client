import React from 'react'


class ReviewPage extends React.Component {

      state = {
        userReview: "" ,
        userRating: 0,
      }

      changeHandler = (e) =>{
        e.preventDefault()
        this.setState({
          ...this.state,
          [e.target.name]: e.target.value
        });
      }



      submitHandler = (e) =>{
          e.preventDefault()
          fetch('http://localhost:3000/ratings/', {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                 accept: "application/json"
          },
              body: JSON.stringify({
                    review: this.state.userReview,
                    rating: this.state.userRating

          })
        }).then(resp=>resp.json()).then(data => {console.log(data)})
      }

    render = () =>{

        return(
            <div className="reviewpage">

            <div>
                <h1>Leave a review for this station</h1>
            </div>

            <div>
                <form onSubmit={()=>{this.submitHandler()}}>
                    <input type="text" name="userReview" value= {this.state.userReview} onChange={(e)=>{this.changeHandler(e)}} placeholder="Write your review"></input>
                    <br></br>
                    <input type="number" name="userRating" value= {this.state.userRating} onChange={(e)=>{this.changeHandler(e)}} placeholder="Rate 1-5"></input>
                    <br></br>
                    <input type="submit"></input>
                </form>
            </div>
            </div>
        )

    }


}

export default ReviewPage;