const SERVER_URL_2 = "http://140.184.230.209:3896";

//get the state of the second blog onload
$(window).on("load", function () {
  $.get(SERVER_URL_2 + "/blogState2", getSecondBlogState).fail(errorCallback);
});

/**
 * Function to get the state of the second blog
 * 
 * @param {*} returnedData the returned data from database
 */
function getSecondBlogState(returnedData) {
  if (returnedData.state2 == "true") {
    $.get(SERVER_URL_2 + "/blog2", getSecondBlog).fail(errorCallback);
  }
  else {
    getNoBlog();
  }
}

/**
 * Function to get the second blog
 * 
 * @param {*} returnedData the returned data from database
 */
function getSecondBlog(returnedData) {
 // console.log(returnedData);
  let x = document.getElementById("Blog2");
  x.innerHTML = returnedData.blog2;
}

/**
 * Function to let user know that blog is not currently available
 */
function getNoBlog() {
  let x = document.getElementById("Blog2");
  x.innerHTML = "Sorry. The blog is not currently available.";
}

//callback function when error arises
function errorCallback(err) {
  console.log(err.responseText);
}
