/* Step 1: using axios, send a GET request to the following URL 
           (replacing the palceholder with your Github name):
           https://api.github.com/users/<your name>
*/
axios.get('https://api.github.com/users/landoDev')
  .then (response => {
    cardEntry.append(gitUserCard(response.data));
    // console.log(response.data);
})
/* Step 2: Inspect and study the data coming back, this is YOUR 
   github info! You will need to understand the structure of this 
   data in order to use it to build your component function 

   Skip to Step 3.
*/

/* Step 4: Pass the data received from Github into your function, 
           create a new component and add it to the DOM as a child of .cards
*/
const cardEntry = document.querySelector('.cards');
/* Step 5: Now that you have your own card getting added to the DOM, either 
          follow this link in your browser https://api.github.com/users/<Your github name>/followers 
          , manually find some other users' github handles, or use the list found 
          at the bottom of the page. Get at least 5 different Github usernames and add them as
          Individual strings to the friendsArray below.
          
          Using that array, iterate over it, requesting data for each user, creating a new card for each
          user, and adding that card to the DOM.
*/

const followersArray = [];

/* Step 3: Create a function that accepts a single object as its only argument,
          Using DOM methods and properties, create a component that will return the following DOM element:

<div class="card">
  <img src={image url of user} />
  <div class="card-info">
    <h3 class="name">{users name}</h3>
    <p class="username">{users user name}</p>
    <p>Location: {users location}</p>
    <p>Profile:  
      <a href={address to users github page}>{address to users github page}</a>
    </p>
    <p>Followers: {users followers count}</p>
    <p>Following: {users following count}</p>
    <p>Bio: {users bio}</p>
  </div>
</div>

*/
function gitUserCard(dataObj) {
  // ===== Card Elements ===== //
  const gitCard = document.createElement('div'),
  gitImg = document.createElement('img'),
  gitInfo = document.createElement('div');
  gitName = document.createElement('h3'),
  gitUserName = document.createElement('p'),
  gitLocation = document.createElement('p'),
  gitProfile = document.createElement('p'),
  gitAddress = document.createElement('a'),
  gitFollowers = document.createElement('p'),
  gitFollowing = document.createElement('p'),
  gitBio = document.createElement('p');

  // ===== Attributes ===== //

  gitAddress.setAttribute('href', dataObj.html_url)
  

  // ===== Card Children Assignment ===== //
  gitCard.appendChild(gitImg);
  gitCard.appendChild(gitInfo);
  gitInfo.appendChild(gitName);
  gitInfo.appendChild(gitUserName);
  gitInfo.appendChild(gitLocation);
  gitInfo.appendChild(gitProfile);
  gitInfo.appendChild(gitFollowers);
  gitInfo.appendChild(gitFollowing);
  gitInfo.appendChild(gitBio);
  gitProfile.appendChild(gitAddress);

  // ===== Assigned Classes ===== //
  gitCard.classList.add('card');
  gitInfo.classList.add('card-info');
  gitName.classList.add('name');
  gitUserName.classList.add('username');

  // ===== Element Content ===== //
  gitImg.src = dataObj.avatar_url;
  gitName.textContent = dataObj.name;
  gitUserName.textContent = dataObj.login;
  gitLocation.textContent = 'Location: ' + dataObj.location;
  gitProfile.textContent = 'Profile: ';
  gitAddress.textContent = dataObj.html_url;
  gitFollowers.textContent = 'Followers: ' + dataObj.followers;
  gitFollowing.textContent = 'Following: ' + dataObj.following;
  gitBio.textContent = 'Bio: ' + dataObj.bio;
  

  return gitCard;
}
// console.log(gitUserCard());
// ===== Passing API call into function ===== //



/* List of LS Instructors Github username's: 
  tetondan
  dustinmyers
  justsml
  luishrd
  bigknell
*/
