//review of callback

// function toggle(e) {
//   e.target.classList.toggle('danger');
// }

// document.querySelector('button').addEventListener('click', toggle);

//#######################################
//displaying posts
// const posts = [
//   { title: 'Post One', body: 'This is post one' },
//   { title: 'Post Two', body: 'This is post two' },
// ];

// function getPosts() {
//   setTimeout(() => {
//     posts.forEach(function (post) {
//       const div = document.createElement('div');
//       div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
//       document.querySelector('#posts').appendChild(div);
//     });
//   }, 3000);
// }

// getPosts();

//#######################################
//create a function which will createPost
const posts = [
  { title: 'Post One', body: 'This is post one' },
  { title: 'Post Two', body: 'This is post two' },
];

function createPost(post, cb) {
  setTimeout(() => {
    posts.push(post);
    cb();
  }, 4000);
}

function getPosts() {
  setTimeout(() => {
    posts.forEach(function (post) {
      const div = document.createElement('div');
      div.innerHTML = `<strong>${post.title}</strong> - ${post.body}`;
      document.querySelector('#posts').appendChild(div);
    });
  }, 2000);
}
createPost({ title: 'Post Three', body: 'This is post three' }, getPosts);

//#######################################
//#######################################
//#######################################
//#######################################
