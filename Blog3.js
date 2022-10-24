const SERVER_URL_3 = "http://140.184.230.209:3896";

//get the state of the third blog onload
$(window).on("load", function () {
  $.get(SERVER_URL_3 + "/blogState3", getThirdBlogState).fail(errorCallback);
});

/**
 * Function to get the state of the third blog
 *
 * @param {*} returnedData the returned data from database
 */
function getThirdBlogState(returnedData) {
  if (returnedData.state3 == "true") {
    $.get(SERVER_URL_3 + "/blog3", getThirdBlog).fail(errorCallback);
  } else {
    getNoBlog();
  }
}

/**
 * Function to get the third blog
 *
 * @param {*} returnedData the returned data from database
 */
function getThirdBlog(returnedData) {
  // console.log(returnedData);
  let x = document.getElementById("Blog3");
  x.innerHTML = returnedData.blog3;
}

/**
 * Function to let user know that blog is not currently available
 */
function getNoBlog() {
  let x = document.getElementById("Blog3");
  x.innerHTML = "Sorry. The blog is not currently available.";
}

//callback function when error arises
function errorCallback(err) {
  console.log(err.responseText);
}
