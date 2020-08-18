// Remember that our list is called `todos`, and it's in `todos.js`. It's not in this file, nor is it being `require`-d in, but it's available globally because its file is loaded in before this one in `index.html`.

// Write each function below its comment and you'll be doing pretty well.  The printTodo function has been begun for you so that we can drill down in the comments on its individual steps. Add the code for each part below its comment as well.
// Doing our code under its pre-written comment in this way will self-document your code and, more importantly, make it easier to follow along with the assignment!

// Remember that each function below is a helper function or an event listener function that runs when the user interacts with our page. So we should NOT be calling any functions or doing anythinmg in the global scope. Just functions functions functions!
// (With one big exception, which you'll see in the comments when we get there.)

// And now: code away.



// Given a todo object, adds an item to our todo list.

const addTodo = function (todo) {
  todos.push(todo)
}


// Given a todo object, put it on the DOM. This is a pretty big function!
const printTodo = function (todo) {
  // Use `document.createElement` to make an <li>, and set its text (preferably using `.innerText`) to be our given object's text field.
  const li = document.createElement('li')
  li.innerText = todo.text


  // Query the ol and put it in a variable.
  const ol = document.querySelector('.todo-list')


  // Append the li we made to the ul as the last child using `.appendChild`. If this isn't working for you, check what is being appended to what!
  ol.appendChild(li)


  // Give our new li a `todo-item` class using `classList`.
  li.classList.add('todo-item')


  // Give our new li an id that is the object's id. This is so that we have a matching relationship between todo node elements and their corresponding objects.
  li.id = todo.id


  // Give the li a `complete` class if the todo object indicates it was complete already.
  if (todo.complete === true) {
      li.classList.add('complete')
  }


  // Give the <li> with the todo's text in it an event listener
  li.addEventListener('click', toggleCompleteness)

  // to toggle that todo's completeness.
  function toggleCompleteness(event) {
      let liClicked = event.target
      // Toggle class .complete of the clicked <li> in the DOM
      liClicked.classList.toggle('complete')
      
      // Toggle true/false for the complete property of that object in the array.
      if (liClicked.classList.contains('complete')) {
          todos[liClicked.id].complete = true
      } else {
          todos[liClicked.id].complete = false
      }
  }

  // This is quite a challenge, so feel free to come back to this one at the end!
  // You'll want to add an event listener to the `li` you just made, and in that event listener function, toggle its completeness on both the DOM (using `classList.toggle`) and in our global array (toggling its completeness property).
  // The hard part will be finding it on the DOM and finding it in our array. We can tell what `li` was clicked using the `event` property passed in, and we can tell what object it goes to using the node element's id that we added above

}


// Print all todos. Loop through our todos array and call the above function on each one.

const printAll = function() {
  for (const todo of todos) {
      printTodo(todo)
  }
}


// Call the above function immediately after you define it, so our todos array gets printed out on page load. This is the only time we're calling a function, the rest is event listeners and helper functions that run when the user interacts with the DOM!

printAll();


// Clear all todos from the DOM. This is a great helper function for refreshing our todos.
const clearTodo = function() {
  let ol = document.querySelector('.todo-list').innerText = ''
}

// Test it in the console and see if your lis disappear!

// Refresh our page by calling each of the two above functions. Since printing all todos checks our todos array, if we make a change to our todos array, we can make our DOM match by simply clearing it and repopulating it according to our todos' new state.



//Let's wire it all together. Add an event listener for the add todo button that will:

const button = document.querySelector('button')
button.addEventListener('click', createToDo)


function createToDo() {
  //1. Queries the input box. We will need that node element again, so save it to a variable!
  
  let todoText = document.querySelector('.todo-input').value
  
  //2. Create a todo object. Its text should be the text that was in the input box (you might have to research this!), its priority should be set to 2 (we'll return to this when we follow up on this project), and its completeness should be false, as we definitely haven't completed the todo yet.
  
  todo = {
      text: todoText,
      priority: 2,
      complete: false,
      id: todos.length
  }

  //3. Pass that object to your adding todos function to put it in our array.
  
  addTodo(todo)
  
  //4. Pass that object to your adding todos function to put it on the DOM.

  printTodo(todo)

  //5. Stretch goal: remove all text from the input box. Try it without this first, you'll see why we should do it!
  document.querySelector('.todo-input').value = ''
}


/*
Wire up your clear todos button. Give it an event listener that clears all todos from the DOM (we have a function for that!) and removes them all todo objects from the todos array as well.
*/

document.querySelector('.clear-todo').addEventListener('click', clearTodo)


// And you're DONE with a basic todo app! Next we'll make it very, very powerful.

