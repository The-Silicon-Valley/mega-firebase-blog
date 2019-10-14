import React, { Component } from 'react';
import './App.css';
import firebase from "./firebase/";

const db = firebase.firestore();
const titleRef = React.createRef();
const bodyRef = React.createRef();

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      loadedPosts: false,
      posts: []
    }
  }

  componentDidMount(){
    this.loadPosts();
  }

  loadPosts(){
    db.collection("blogs").get().then(snapshot => {
      let posts =[];
      snapshot.forEach(doc => {
          posts.push({
            ...doc.data(),
            id: doc.id
          });
      });
        this.setState({
          posts,
          loadedPosts: true
        });
    })
  }

  handleSubmit(e){
    e.preventDefault();
    db.collection("blogs").add({
      title: titleRef.current.value,
      body: bodyRef.current.value
    }).then(ref => {
      this.loadPosts();
    });
  }

  render(){
    const { posts, loadedPosts } = this.state;
    return (
        <div className="App">
          <h2>List of Blogs</h2>
          {
            loadedPosts ? posts.map(post => {
              return (
                  <div>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                  </div>
              )
            })
                : "Loading Posts"
          }
          <form onSubmit={e => this.handleSubmit(e)}>
              <input type="text" ref={titleRef} />
              <input type="text" ref={bodyRef} />
              <button>Submit</button>
          </form>
        </div>
    );
  }
}


export default App;
