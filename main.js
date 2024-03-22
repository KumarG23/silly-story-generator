// get reference to input field with id customname
const customName = document.getElementById('customname');
// get reference to button with class randomize
const randomize = document.querySelector('.randomize');
// get reference to the element with class story
const story = document.querySelector('.story');
// function to return a random value from an array
function randomValueFromArray(array){
  // generate a random index within the array length
  const random = Math.floor(Math.random()*array.length);
  // return the element at the randomly generated index
  return array[random];
}

// initialize the story template with placeholders for insertion
let storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.'

// arrays containing possible values for insertion
const insertX =
[
    'Willy the Goblin',
'Big Daddy',
'Father Christmas'
]

const insertY =
[
'the soup kitchen',
'Disneyland',
'the White House'
]

const insertZ =
[
'spontaneously combusted',
'melted into a puddle on the sidewalk',
'turned into a slug and crawled away'
]

// add an event listener to the randomize button
randomize.addEventListener('click', result);

// function to generate & display the story based on user inputs
function result() {
  // copy the original story template
    let newStory = storyText
    //randomly select item from each insertion array
    let xItem = randomValueFromArray(insertX)
    let yItem = randomValueFromArray(insertY)
    let zItem = randomValueFromArray(insertZ)

    // replace placeholders in the story template with random value
    newStory = newStory.replaceAll(':insertx:', xItem).
    replaceAll(':inserty', yItem).replaceAll(':insertz', zItem)

    // check if a custom name is given & replace placeholder bob with it
  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name)

  }
// check if uk checkbox is checked and convert temperature & weight
  if(document.getElementById("uk").checked) {
    let weight = Math.round(300 / 14);
    weight += ' stone';
    let temperature =  Math.round((94 - 32) * (5/9));
    temperature += ' centigrade';
    // replace temp and weight placeholders w/ converted values
    newStory = newStory.replaceAll('94 fahrenheit', temperature).replaceAll('300 pounds', weight);

  }
// update the story element w/ generated story text and make it visible
  story.textContent = newStory;
  story.style.visibility = 'visible';
}