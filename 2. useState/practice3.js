import React from "react";
import ReactDOM from "react-dom";
import "./styles.css";

/*
  Instructions:
    Given the array of "posts", recreate the functionality for this app. 
    By default, each post preview is cut off until the user clicks "Open". 
    Only one post can be "Open" at a time.

    Or view in a sandbox: https://codesandbox.io/s/usestate-practice-showhide-yie4m?from-embed
*/

function App ({ posts }) {
  return (
    <div>
      {JSON.stringify(posts, null, 2)}
    </div>
  )
}

const rootElement = document.getElementById("root");
ReactDOM.render(
  <App posts={[
    {
      id: 0,
      img: 'https://tylermcginnis.com/static/084b5fe6ce2589e754a188671ba13987/ec435/code-splitting-with-react-and-react-router.jpg',
      text: 'Code splitting has gained popularity recently for its ability to allow you to split your app into separate bundles your users can progressively load. In this post we’ll take a look at not only what code splitting is and how to do it, but also how to implement it with React Router.'
    },
    {
      id: 1,
      img: 'https://tylermcginnis.com/static/e87fe9a59e14efa29d0fe8c1b3c47cae/ec435/javascript-inheritance-vs-composition.jpg',
      text: 'The problem with object-oriented languages is they’ve got all this implicit environment that they carry around with them. You wanted a banana but what you got was a gorilla holding the banana and the entire jungle. - Joe Armstrong.'
    },
    {
      id: 2,
      img: 'https://tylermcginnis.com/static/d84e034af76365f2f08d939cbb5fc646/ec435/javascript-modules-iifes-commonjs-es6-modules.jpg',
      text: 'I’ve taught JavaScript for a long time to a lot of people. Consistently the most commonly under-learned aspect of the language is the module system. There’s good reason for that. Modules in JavaScript have a strange and erratic history. In this post we’ll walk through that history and you’ll learn modules of the past to better understand how JavaScript modules work today.'
    }
  ]} />,
  rootElement
);
