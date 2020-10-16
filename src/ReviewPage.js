import React from 'react'


class ReviewPage extends React.Component {


      state = {
        userInput: "" 
      }


    //   changeHandler = (e) =>{
    //       this.setState({ userInput: e.target.value })
    //   }


    //   submitHandler = (e) =>{
    //       e.preventDefault()
    //       fetch('http://localhost:3000/ratings/', {
    //           method: "POST",
    //           headers: {
    //             "Content-Type": "application/json",
    //              accept: "application/json"
    //       },
    //           body: JSON.stringify({
    //                 review: `${this.state.userInput}`
    //       })
    //     }).then(resp=>resp.json()).then(data => {console.log(data)})
    //   }

    render = () =>{

        return(
            <div className="reviewpage">
            <div>
                <h1>Leave a review for this station</h1>
            </div>
            <div>
                <form onSubmit={this.submitHandler}>
                    <input type="text" value= {this.state.userInput} placeholder="Write your review"></input>
                    <input type="submit"></input>
                </form>
            </div>
            </div>
        )

    }


}

export default ReviewPage;