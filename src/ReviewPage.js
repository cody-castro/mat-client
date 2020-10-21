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

submitForm = (e) =>{
    e.preventDefault()
    this.props.submitHandler({
        review: this.state.userReview,
        rating: parseInt(this.state.userRating),
        user_id: localStorage.getItem("currentUser"),
        location_id: this.props.stationId
    })
}
     

    render = () =>{

        return(
            <div className="reviewpage">

            <div>
                <h1>Leave a review for this station</h1>
            </div>

            <div>
                <form onSubmit={(e)=>{(this.submitForm(e))}}>
                    <input type="text" name="userReview" value= {this.state.userReview} onChange={(e)=>{this.changeHandler(e)}} placeholder="Write your review"></input>
                    <br></br>
                    <input type="number" name="userRating" value= {this.state.userRating} onChange={(e)=>{this.changeHandler(e)}} placeholder="Rate 1-5"></input>
                    <br></br>
                    <input type="submit" ></input>
                </form>
            </div>
            </div>
        )

    }


}

export default ReviewPage;