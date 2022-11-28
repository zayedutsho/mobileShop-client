import React from "react";

const Blog = () => {
  return (
    <div className="h-screen max-w-[1440px] mx-auto">
      <div className="mx-10">
        <h1 className="mb-6 text-xl font-bold text-center">Blog</h1>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Question</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>
                  What are the different ways to manage a state in a React
                  application?
                </td>
                <td>
                  The Four Kinds of React State to Manage Local state. Global
                  state. Server state. URL state.
                </td>
              </tr>

              <tr>
                <th>2</th>
                <td>How does prototypical inheritance work?</td>
                <td>
                  The Prototypal Inheritance is a feature in javascript used to
                  add methods and properties in objects. It is a method by which
                  an object can inherit the properties and methods of another
                  object.
                </td>
              </tr>

              <tr>
                <th>3</th>
                <td>What is a unit test? Why should we write unit tests?</td>
                <td>
                  The main objective of unit testing is to isolate written code
                  to test and determine if it works as intended. Unit testing is
                  an important step in the development process, because if done
                  correctly, it can help detect early flaws in code which may be
                  more difficult to find in later testing stages.
                </td>
              </tr>
              <tr>
                <th>4</th>
                <td>React vs. Angular vs. Vue?</td>
                <td>
                  React is a UI library, Angular is a fully-fledged front-end
                  framework, while Vue.js is a progressive framework.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Blog;
