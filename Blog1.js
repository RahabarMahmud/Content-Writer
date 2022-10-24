const SERVER_URL_1 = "http://140.184.230.209:3896";

//get the state of the first blog onload
$(window).on("load", function () {
  $.get(SERVER_URL_1 + "/blogState1", getFirstBlogState).fail(errorCallback);
});
/**
 * Function to get the state of the first blog
 * 
 * @param {*} returnedData the returned data from database
 */
function getFirstBlogState(returnedData) {
  if (returnedData.state1 == "true") {
    $.get(SERVER_URL_1 + "/blog1", getFirstBlog).fail(errorCallback);
  }
  else {
    getNoBlog();
  }
}
/**
 * Function to get the first blog
 * 
 * @param {*} returnedData the returned data from database
*/


function getFirstBlog(returnedData) {
 // console.log(returnedData);
  let x = document.getElementById("Blog1");
  x.innerHTML = returnedData.blog1;
}

/**
function getFirstBlog(returnedData) {
  // console.log(returnedData);
  let x = document.getElementById("Blog1");
  x.innerHTML = `<p> ${returnedData.blog1.replace("\n","<br>")} </p>`;
  //$("#Blog1").val(returnedData.blog1);
}*/

/**
 * Function to let user know that blog is not currently available
 */
function getNoBlog() {
  let x = document.getElementById("Blog1");
  x.innerHTML = "Sorry. The blog is not currently available.";
}

//callback function when error arises
function errorCallback(err) {
  console.log(err.responseText);
}
