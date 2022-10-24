/**
 * The javascript files for our Team 7 Project.
 *  Authors:
 *  Rahabar Mahmud(A00446187)
 *  Mainuddin Alam Irteja(A00446752)
 *  Toufiq Abir Farhan Tufan(A00446190)
 *  Kazi Istiak(A00452666)
 */

/**
 * The global variables for our project.
 */
//The 3 global variables storing our blog when saved button has been clicked
//-by Mainuddin Alam Irteja
let save1 = "",
  save2 = "",
  save3 = "";

//The boolean variable for setting the shift value to be false at the start
//of the program - By Rahabar Mahmud
let shift = false;
let caps = false;
let remove = false;
let btnColor = "";
let innerBtnColor = "";

let firstBlog, secondBlog, thirdBlog;
let publish1, publish2, publish3;
let bool1, bool2, bool3;
let informString = "Sorry. This blog is not currently available.";
let state1 = "false",
  state2 = "false",
  state3 = "false";
let pBlog1, pBlog2, pBlog3;

//The array containing the word bank
const bankArr = [];



//server URL
const SERVER_URL = "http://140.184.230.209:3896";
let id1 = "#words";

/**
 * The function that sets the shift value to be true when shift method is clicked
 * - by Rahabar Mahmud
 */
function shiftOn() {
  //shift = true;
  //calling display methods done by Mainuddin Alam Irteja
  //document.getElementById(".new").style.display = "";
  // document.getElementById(".change").style.display = "none";

  var x = document.querySelectorAll(".btn-danger");
  if (caps == true) {
    shift = false;
  } else {
    shift = true;

    //This part was implemented by Rahabar and Mainuddin
    display("exclamation", "1");
    display("at", "2");
    display("hash", "3");
    display("dollar", "4");
    display("percentage", "5");
    display("power", "6");
    display("and", "7");
    display("star", "8");
    display("closeBracket", "9");
    display("quote2", "quote1");
    display("openBracket", "0");
    display("lessThan", "comma");
    display("greaterThan", "fullStop");
    display("forwardSlash", "questionMark");
    display("equal", "plus");
    display("underScore", "minus");
    display("colon", "semiColon");
    display("line", "backSlash");

    //This part was implemented by Rahabar
    let checkId = document.getElementById("shiftID");
    shiftColor(checkId);

    capital(x);
  }
}

/**
 * The function to switch all the alphabets to upper case
 *
 * Finally one function by Toufiq that works.
 *
 */
function capital(x) {
  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = x[i].innerHTML.toUpperCase();
  }
}

/**
 * Method to turn shift off
 * Done by Mainuddin Alam Irteja
 * and corrected by Rahabar Mahmud
 */
function shiftOff() {
  shift = false;
  display("1", "exclamation");
  display("2", "at");
  display("3", "hash");
  display("4", "dollar");
  display("5", "percentage");
  display("6", "power");
  display("7", "and");
  display("8", "star");
  display("9", "closeBracket");
  display("0", "openBracket");
  display("quote1", "quote2");
  display("comma", "lessThan");
  display("fullStop", "greaterThan");
  display("questionMark", "forwardSlash");
  display("plus", "equal");
  display("minus", "underScore");
  display("semiColon", "colon");
  display("backSlash", "line");
}

/**
 * This changes the color of the capslock button.
 *
 * By Toufiq and Rahabar
 *
 */
function capsColor(x) {
  if (caps == true) {
    x.style.background = "green";
    //shift = false;
  } else {
    x.style.background = "blue";
  }
}

/**
 * This function is called when capslock button has been clicked.
 * This switches our keyboard to capslock mode, and turns all the keys
 * in our keyboard to upper case.
 *
 * by Toufiq Abir Farhan
 */
function capsOn() {
  var x = document.querySelectorAll(".btn-danger");
  let capscheckId = document.getElementById("capsID");
  if (caps == true) {
    small(x);
    caps = false;
    // let capscheckId = document.getElementById("capsID");
    capsColor(capscheckId);
  } else {
    capital(x);
    caps = true;
    shiftOff();
    let checkId = document.getElementById("shiftID");
    shiftColor(checkId);
    capsColor(capscheckId);
  }
}

//This was designed by toufiq, but was never utilized sadly. :(
function small(x) {
  for (let i = 0; i < x.length; i++) {
    x[i].innerHTML = x[i].innerHTML.toLowerCase();
  }
}

/**
 * Method written by Mainuddin Alam Irteja
 *
 * @param {*} toBeShown the button to be shown
 * @param {*} toBeHid the button to be hid
 */
function display(toBeShown, toBeHid) {
  document.getElementById(toBeShown).style.display = "";
  document.getElementById(toBeHid).style.display = "none";
}

/**
 * This method changes the color of the shift button when the shift button has been pressed.
 * It takes the id of the shift button and changes its color upon click. When
 * any other key has been clicked and the shift value has been set to false, it
 * makes the shift button go back to its previous state and color.
 *
 * by Rahabar Mahmud
 */
function shiftColor(x) {
  if (shift == true) {
    x.style.background = "green";
  } else {
    x.style.background = "blue";
  }
}

/**
 * This method is used to display and hide the word bank, text field and the keyboard.
 * It makes the introductory page disappear and brings in the edit page.
 * 
 * @param {*} toBeShown 
 * @param {*} toBeHid 
 * 
 * by Rahabar Mahmud
 */
function display(toBeShown, toBeHid) {
  document.getElementById(toBeShown).style.display = "";
  document.getElementById(toBeHid).style.display = "none";
}

/**
 * This is the function used to hide elements
 * 
 * @param {*} toHid 
 * 
 * by Rahabar Mahmud
 */
function hide(toHid){
  document.getElementById(toHid).style.display = "none";
}

/**
 * This is the function used to display elements.
 * 
 * @param {*} toShow 
 * 
 * by Rahabar Mahmud
 */
function show(toShow){
  document.getElementById(toShow).style.display = "";
}

/**
 * This is used to focus on the textArea.
 * Implemented by Mainuddin
 * Idea by Toufiq.
 */
function focusWordBank() {
  id1 = "#bankInput";
}

/**
 * This is used to focus on the word bank.
 * Implemented by Mainuddin
 * Idea by Toufiq
 */
function focusTextField() {
  id1 = "#words";
}

/**
 * This is the function to add characters to the text field.
 * When a button on the keyboard has been clicked we take the value
 * of the button and then display it on our blog.
 * This function is also used to remove blog elements when
 * the backspace key has been pressed.
 *
 * by Rahabar Mahmud, Mainuddin Alam and Toufiq Abir Farhan
 */
function addChar(selection) {
  //This is the array that is used to store and write the blog in the text box.
  var currChars = $(id1).val();
  var x = document.querySelectorAll(".btn-danger");

  if (selection === "bksp") {
    $(id1).val(currChars.substring(0, currChars.length - 1));
  } else {
    if (caps === true) {
      $(id1).val(currChars.concat(selection.toUpperCase()));
    } else if (shift == true) {
      $(id1).val(currChars.concat(selection.toUpperCase()));
      shiftOff();
      small(x);
      //After a letter has been capitalized and the shift value has been set to false,
      //we get the id of the shift button and then change its color back to normal using
      //the shiftColor function.
      //-By Rahabar Mahmud
      let checkId = document.getElementById("shiftID");
      shiftColor(checkId);
    } else {
      $(id1).val(currChars.concat(selection));
    }
  }
}

/**
 * This function is used to control the visibility and the invisibility of the elements of our project.
 * We have 3 toggle buttons. When any one of the toggle buttons is selected, the function gets the id of the
 * toggle button. Then it checks to see which of the toggle buttons has been set to checked mode. The one that
 * has been clicked, our function takes the id of the button, keeps it visible using style.visibility and
 * sets all the other buttons to be invisible. Once any of the edit buttons has been set to checked mode,
 * it brings up a textfield and a keyboard which can then be used to write the individual blogs.
 * Each of the 3 toggle buttons has the same scripting code, so if other buttons are clicked, the same
 * process also works sucessfully for all the buttons.
 * - by Toufiq Abir Farhan Tufan.
 */

//The first edit button which makes the second and the third buttons invisible and
//brings out the keyboard and the textfield.
document.getElementById("edit1").onclick = function () {
  if (this.checked) {
    display("gr", "switchBox");
    show("wordBox");

    //If the toggle has been checked the saved content will be loaded on the
    //textfield again which was stored in our global variable.
    //-By Mainuddin Alam Irteja
    $("#words").val(save1);
  } else {
    //When the toggle button has been unchecked, it will reset the textfield
    //to an empty string.
    //-By Mainuddin Alam Irteja
    $("#words").val("");
  }
};

//The second edit button which makes the first and the third buttons invisible and
//brings out the keyboard and the textfield.
document.getElementById("edit2").onclick = function () {
  if (this.checked) {
    display("gr", "switchBox");
    show("wordBox");

    //If the toggle has been checked the saved content will be loaded on the
    //textfield again which was stored in our global variable.
    //-By Mainuddin Alam Irteja
    $("#words").val(save2);
  } else {
    //When the toggle button has been unchecked, it will reset the textfield
    //to an empty string.
    //-By Mainuddin Alam Irteja
    $("#words").val("");
  }
};

//The third edit button which makes the second and the first buttons invisible and
//brings out the keyboard and the textfield.
document.getElementById("edit3").onclick = function () {
  if (this.checked) {
    display("gr", "switchBox");
    show("wordBox");

    //If the toggle has been checked the saved content will be loaded on the
    //textfield again which was stored in our global variable.
    //-By Mainuddin Alam Irteja
    $("#words").val(save3);
  } else {
    //When the toggle button has been unchecked, it will reset the textfield
    //to an empty string.
    //-By Mainuddin Alam Irteja
    $("#words").val("");
  }
};

/**
 * The event-listener which are called when any of the two save buttons on our
 * project has been clicked.
 * It will take the id of the toggle buttons and it will verify which one
 * of them has been checked. When any of the buttons has been checked, we
 * will get the blog written on the textfield and assign it to our global variables.
 * The global variables will be loaded onto the text field when the toggle buttons are checked.
 * This is done when any of the toggle buttons has been checked.
 * -By Mainuddin Alam Irteja
 */
$("#save").on("click", function () {
  let e1 = document.getElementById("edit1");
  let e2 = document.getElementById("edit2");
  let e3 = document.getElementById("edit3");
  if (e1.checked) {
    save1 = $("#words").val();
    firstBlog = { bNum1: "1", blog1: save1 };

    $("#edit1").prop("checked", false);
    display("switchBox", "gr");
    hide("wordBox");

    $.post(SERVER_URL + "/blog1", firstBlog, callback).fail(errorCallback);
  }
  if (e2.checked) {
    save2 = $("#words").val();
    secondBlog = { bNum2: "2", blog2: save2 };

    $("#edit2").prop("checked", false);
    display("switchBox", "gr");
    hide("wordBox");

    $.post(SERVER_URL + "/blog2", secondBlog, callback).fail(errorCallback);
  }
  if (e3.checked) {
    save3 = $("#words").val();
     thirdBlog = { bNum: "3", blog3: save3 };

    $("#edit3").prop("checked", false);
    display("switchBox", "gr");
    hide("wordBox");
    $.post(SERVER_URL + "/blog3", thirdBlog, callback).fail(errorCallback);
  }
});

/**
 * This function is called when we click on the star button to add
 * elements to our word bank. This function makes sure that no duplicate
 * words and blank buttons are inserted into the word bank.
 * It stores the array containing the words of the word bank into the local
 * server.The addToBank function also changes the color of the buttons in the
 * word bank depending on whether we are adding buttons or removing them.
 * The color changes are done by Rahabar Mahmud and Toufiq Abir Farhan.
 *
 * by Toufiq Abir Farhan (Rahabar was here as well)
 */
function addToBank() {
  var y = null;
  // arrayIn();
  if (remove == true) {
    btnColor = "red";
    innerBtnColor = "red";
    
  } else {
    btnColor = "rgb(196, 235, 240)";
    innerBtnColor = "rgb(196, 235, 240)";
  }

  let x = document.getElementById("bankInput").value;
  document.getElementById("bank").innerHTML = "";

  if (bankArr.length == 0 && x != "" && bankArr.join("").length < 460) {
    console.log(x);
    bankArr.push(x);
  } else {
    for (var i = 0; i < bankArr.length; i++) {
      if (x == bankArr[i]) {
        y = i;
        console.log("index" + y);
      }
      // let x = document.getElementById("#bankInput").value;
    }
    if (x != "" && bankArr.join("").length < 460) {
      bankArr.push(x);
    } else {
      // alert
      console.log("Length exceeded");
    }
    if (y != null) {
      console.log("duplicate gone");
      bankArr.splice(i, 1);
    }
  } // createButton(char);

  // document.getElementById("kbd").innerHTML += createButton(char);

  console.log(bankArr.length);
  bankArr.forEach((element) => {
    document.getElementById("bank").innerHTML += createButton(
      //bankArr[bankArr.length - 1]
      element,
      innerBtnColor
    );
  });
  $("#bankInput").val("");
  console.log(bankArr);
  if (typeof Storage !== "undefined") {
    console.log(bankArr);
    // window.localStorage.setItem("buttons", JSON.stringify(bankArr));
    let wordBankString = JSON.stringify(bankArr);

    let sendWordBank = { bName: "bankName", wBank: wordBankString };

    $.post(SERVER_URL + "/wordBank", sendWordBank, callback).fail(
      errorCallback
    );
  } else {
    console.log("Local storage is not available.");
  }
}

// function addToBank() {
//   let x = document.getElementById("bankInput").value;
//   document.getElementById("bank").innerHTML += createButton(x);
//   $("#bankInput").val("");
// } failure by toufiq

/**
 * This method is used to create the buttons containing the words
 * in the word bank
 *
 * By Toufiq Abir Farhan
 */
function createButton(x, z) {
  return ` <button type="button" style="background-color: ${z}" onclick="setOutput('${x}')">
      ${x}
    </button>`;
}

/**
 * This method is used to print the value of the buttons in the word bank
 * onto the text area. This setoutput also changes color of the word buttons in the
 * word bank. This is done by both Rahabar Mahmud and Toufiq Abir Farhan.
 * It also works on deleting and removing buttons from the bank.
 *
 * by Toufiq Abir Farhan
 */
function setOutput(y) {
  if (remove == true) {
    btnColor = "red";
    innerBtnColor = "red";
    document.getElementById("bank").innerHTML = "";
    let index = -1; // initialized to invalid value
    for (var i = 0; i < bankArr.length; i++) {
      if (y == bankArr[i]) {
        index = i;
        console.log("index" + index);
      }
      // let x = document.getElesmentById("#bankInput").value;
    }
    if (index != -1) {
      console.log("deleted");
      bankArr.splice(index, 1);
    }

    if (typeof Storage !== "undefined") {
    console.log(bankArr);
    // window.localStorage.setItem("buttons", JSON.stringify(bankArr));
    let wordBankString = JSON.stringify(bankArr);

    let sendWordBank = { bName: "bankName", wBank: wordBankString };

    $.post(SERVER_URL + "/wordBank", sendWordBank, callback).fail(
      errorCallback
    );
  } else {
    console.log("Local storage is not available.");
  }

    console.log(bankArr.length);
    bankArr.forEach((element) => {
      document.getElementById("bank").innerHTML += createButton(
        //bankArr[bankArr.length - 1]
        element,
        btnColor
      );
    });
  } else {
    let word = $("#words").val();
    let text = " " + y;
    $("#words").val(word.concat(text));
  }
}

/**
 * This method is used to change inbetween the delete mode and the add to word bank mode. 
 * When the delete button is clicked, it enters into a delete mode. The buttons clicked will
 * be deleted from the word bank.
 * 
 * by Toufiq Abir Farhan, (Rahabar was here as well)
 */
function mode() {
  document.getElementById("bank").innerHTML = "";
  let h = document.getElementById("head");
  let header = document.getElementById("wordBankHeader");
  let wordBG = document.getElementById("bank");
  if (remove == true) {
    btnColor = "rgb(30, 154, 238)";
    innerBtnColor = "rgb(196, 235, 240)";
    document.getElementById("bankToggle").style.background = btnColor;
    h.style = "color: white; font-size: larger; display: inline-block";
    /**header.style = "red";*/
    h.innerHTML = "The Word Bank";
    remove = false;
    header.style = "background-color: #3ab3e8";
    wordBG.style = "background-color: #eaf4f8";
  } else {
    btnColor = "red";
    innerBtnColor = "red";
    document.getElementById("bankToggle").style.background = btnColor;
    h.style = "color: white; font-size: larger; display: inline-block";
    h.innerHTML = "Delete from Word Bank";

    remove = true;
     header.style = "background-color: red";
     wordBG.style = "background-color: #f0c2c7";
  }
  bankArr.forEach((element) => {
    document.getElementById("bank").innerHTML += createButton(
      //bankArr[bankArr.length - 1]
      element,
      innerBtnColor
    );
  });
}

/**
 * The event listener which are called when any of the two cancel buttons on our blog
 * has been clicked.
 * It will take the id of the toggle buttons and it will verify which one of them
 * has been checked. Then it will return the blog to its previous saved state.
 * If anything has been not saved, and the cancel button has been clicked, we again
 * go back to the previous saved state by removing all the unsaved elements.
 *
 * -By Mainuddin Alam Irteja
 */
$("#cancel").on("click", function () {
  let e1 = document.getElementById("edit1");
  let e2 = document.getElementById("edit2");
  let e3 = document.getElementById("edit3");
  if (e1.checked) {
    $("#words").val(save1);
  }
  if (e2.checked) {
    $("#words").val(save2);
  }
  if (e3.checked) {
    $("#words").val(save3);
  }
});

/**
 * This method removes the last word entered into the text field.
 *
 * by Rahabar Mahmud
 */
function undo() {
  let e1 = document.getElementById("edit1");
  let e2 = document.getElementById("edit2");
  let e3 = document.getElementById("edit3");
  if (e1.checked) {
    removeWord();
  }
  if (e2.checked) {
    removeWord();
  }
  if (e3.checked) {
    removeWord();
  }
}

function moveCursor(){
  let end = document.getElementById("words");
  var len = end.value.length;
  
  var ta = document.getElementById("words");
  ta.scrollTop = ta.scrollHeight

  if (end.setSelectionRange) {
      end.focus();
      end.setSelectionRange(len, len);
  } 
  /**else if (end.createTextRange) {
      var t = end.createTextRange();
      t.collapse(true);
      t.moveEnd('character', len);
      t.moveStart('character', len);
      t.select();
  }*/

}
/**
 * This function is called by the undo funtion to remove a
 * the last word after a space has been entered from the text area.
 *
 * by Mainnudin Alam Irteja
 */
function removeWord() {
  // $("#words").val("");
  //ave1 = $("#words").val();
  let currWds = $("#words").val();
  const lastWord = currWds.split(" ").pop();
  //console.log(names[i]);
  currWds = currWds.substring(0, currWds.lastIndexOf(" "));
  $("#words").val(currWds);
  /** 
  //  const lastPhrase = names[names[counter] - 1];
  for (let i = 0; i < names.length; i++) {
    // $("#words").val("");
    // let y = names[i];

    if (names[i] == lastWord) {
      
    }
  }
  */
}

/**
 * This starts when the page has been loaded. Small code my Mainuddin
 */
$(load);

/**
 * This function starts working when our webpage is loaded. It brings
 * the word bank array and the buttons from local storage.
 * By Toufiq Abir Farhan (Mainuddin Alam Irteja was here as well)
 */
function load(returnedData) {
  //let index = 0;
  //let btns = JSON.parse(localStorage.getItem("buttons"));
  btnColor = "rgb(196, 235, 240)";
  let btns = JSON.parse(returnedData.wBank);
  if (btns != null) {
    console.log("Buttons are " + btns);
    //  bankArr = btns;
    btns.forEach(function (element, index) {
      //  make2(element);
      bankArr[index] = element;
      document.getElementById("bank").innerHTML += createButton(
        element,
        btnColor
      );
    });
    console.log(btns.length);
  }
}

/**
 * This make was made by Mainuddin Alam, but was never used.
 * Another method created by Mainuddin which was never utilized.
 * Good thing Rahabar didnt not take any part of this
 * Helped create the final version of createButton.
 * @param {*} values
 */
function make2(values) {
  let counter = 0;

  bankArr[counter] = values;
  $("#bank").append(
    '<button class ="buttonClass" type="button" id=' +
      counter +
      ">" +
      bankArr[counter] +
      "</button>"
  );
  counter++;
}

/**
 * Failure by Mainuddin
 
$("body").on("click", ".buttonClass", function () {
  let c = $("#words").val();
  let x = $(this).attr("id");
  let sR = bankArr[x] + " ";
  $("#words").val(c.concat(sR));
});*/

/**
 * This method is used to upload the publish button state onto
 * our server. This is run using the MongoDB database 
 * due to Mainuddin Alam Irteja.
 *
 */
 $("#publishSwitch1").on("click", function () {
  let p1 = document.getElementById("publishSwitch1");
  if (p1.checked) {
    publish1 = "true";
    console.log(publish1);

    bool1 = { sNum1: "1", state1: publish1 };
    $.post(SERVER_URL + "/blogState1", bool1, callback).fail(errorCallback);
    console.log(bool1);
    /**
    pBlog1 = { pubBlog1: save1 };
    $.post(SERVER_URL + "/publishedBlog1", pBlog1, callback).fail(
      errorCallback
    );
    publish1 = "false";
    */
  } else {
    publish1 = "false";
    bool1 = { sNum1: "1", state1: publish1 };
    $.post(SERVER_URL + "/blogState1", bool1, callback).fail(errorCallback);
    /**
    pBlog1 = { pubBlog1: informString };
    $.post(SERVER_URL + "/publishedBlog1", pBlog1, callback).fail(
      errorCallback
    );
      */
  }
});
$("#publishSwitch2").on("click", function () {
  let p2 = document.getElementById("publishSwitch2");
  if (p2.checked) {
    publish2 = "true";
    bool2 = { sNum2: "2", state2: publish2 };
    $.post(SERVER_URL + "/blogState2", bool2, callback).fail(errorCallback);
    pBlog2 = { pubBlog2: save2 };
    $.post(SERVER_URL + "/publishedBlog2", pBlog2, callback).fail(
      errorCallback
    );
  } else {
    publish2 = "false";
    bool2 = { sNum2: "2", state2: publish2 };
    $.post(SERVER_URL + "/blogState2", bool2, callback).fail(errorCallback);
    pBlog2 = { pubBlog2: informString };
    $.post(SERVER_URL + "/publishedBlog2", pBlog2, callback).fail(
      errorCallback
    );
  }
});
$("#publishSwitch3").on("click", function () {
  let p3 = document.getElementById("publishSwitch3");
  if (p3.checked) {
    publish3 = "true";
    bool3 = { sNum: "3", state3: publish3 };
    $.post(SERVER_URL + "/blogState3", bool3, callback).fail(errorCallback);
    /**
    pBlog3 = { pubBlog3: save3 };
    $.post(SERVER_URL + "/publishedBlog3", pBlog3, callback).fail(
      errorCallback
    );
     */
  } else {
    publish3 = "false";
    bool3 = { sNum: "3", state3: publish3 };
    $.post(SERVER_URL + "/blogState3", bool3, callback).fail(errorCallback);
    /** 
    pBlog3 = { pubBlog3: informString };
    $.post(SERVER_URL + "/publishedBlog3", pBlog3, callback).fail(
      errorCallback
    );
    */
  }
});

/**
 * All the callback, 1 to 6 are done my Mr.Alam
 * The first three call backs are used to get the state of the edit buttons.
 * The last three call backs are used to get the states of the publish buttons.
 *
 */
 function callback1(returnedData) {
  let e1 = document.getElementById("edit1");
  save1 = returnedData.blog1;
  if (e1.checked) {
    console.log(returnedData);
    $("#words").val(save1);
  }
}
function callback2(returnedData) {
  let e2 = document.getElementById("edit1");
  save2 = returnedData.blog2;
  if (e2.checked) {
    console.log(returnedData);
    $("#words").val(save2);
  }
}
function callback3(returnedData) {
  let e3 = document.getElementById("edit1");
  save3 = returnedData.blog3;
  if (e3.checked) {
    console.log(returnedData);
    $("#words").val(save3);
  }
}
function callback4(returnedData) {
  //publish1 = returnedData;
  console.log(returnedData);
  if (returnedData.state1 == "true") {
    document.getElementById("publishSwitch1").checked = true;
    /** 
    pBlog1 = { pubBlog1: save1 };
    
    $.post(SERVER_URL + "/publishedBlog1", pBlog1, callback).fail(
      errorCallback
    );
    */
  } else {
    document.getElementById("publishSwitch1").checked = false;
    /** 
    pBlog1 = { pubBlog1: informString };
    $.post(SERVER_URL + "/publishedBlog1", pBlog1, callback).fail(
      errorCallback
    );
        */
  }
}

function callback5(returnedData) {
  //publish1 = returnedData;
  console.log(returnedData);
  if (returnedData.state2 == "true") {
    document.getElementById("publishSwitch2").checked = true;
    /**
    pBlog2 = { pubBlog2: save2 };
    $.post(SERVER_URL + "/publishedBlog2", pBlog2, callback).fail(
      errorCallback
    );
     */
  } else {
    document.getElementById("publishSwitch2").checked = false;
    /**
    pBlog2 = { pubBlog2: informString };
    $.post(SERVER_URL + "/publishedBlog2", pBlog2, callback).fail(
      errorCallback
    );
     */
  }
}

function callback6(returnedData) {
  //publish1 = returnedData;
  console.log(returnedData);
  if (returnedData.state3 == "true") {
    document.getElementById("publishSwitch3").checked = true;
    /** 
    pBlog3 = { pubBlog3: save3 };
    $.post(SERVER_URL + "/publishedBlog3", pBlog3, callback).fail(
      errorCallback
    );
    */
  } else {
    document.getElementById("publishSwitch3").checked = false;
    /** 
    pBlog3 = { pubBlog3: save3 };
    $.post(SERVER_URL + "/publishedBlog3", pBlog3, callback).fail(
      errorCallback
    );
    */
  }
}

function callback(returnedData) {
  console.log(returnedData);
}
function errorCallback(err) {
  console.log(err.responseText);
}

//This starts working when the web page has been loaded.
$(window).on("load", function () {
  $.get(SERVER_URL + "/blog1", callback1).fail(errorCallback);
  $.get(SERVER_URL + "/blog2", callback2).fail(errorCallback);
  $.get(SERVER_URL + "/blog3", callback3).fail(errorCallback);
  $.get(SERVER_URL + "/wordBank", load).fail(errorCallback);
  $.get(SERVER_URL + "/blogState1", callback4).fail(errorCallback);
  $.get(SERVER_URL + "/blogState2", callback5).fail(errorCallback);
  $.get(SERVER_URL + "/blogState3", callback6).fail(errorCallback);
});

//All our Failures. but works [:)] By Mainuddin Alam (Failures)
/**
  function makeBtn(w) {
  names[counter] = $("#" + w).val();
  $("#here").append(
    '<button class ="buttonClass" type="button" id=' +
      counter +
      ">" +
      names[counter] +
      "</button>"
  );
  let word = names[counter];
  counter++;
  $("#" + w).val("");
  if (typeof Storage !== "undefined") {
    console.log(names);
    window.localStorage.setItem("buttons", JSON.stringify(names));
  } else {
    console.log("Local storage is not available.");
  }
}

$("body").on("click", ".buttonClass", function () {
  let c = $("#words").val();
  let x = $(this).attr("id");
  let y = names[x] + " ";
  $("#words").val(c.concat(y));
});

function undo() {
  let e1 = document.getElementById("edit1");
  let e2 = document.getElementById("edit2");
  let e3 = document.getElementById("edit3");
  if (e1.checked) {
    removeWord();
  }
  if (e2.checked) {
    removeWord();
  }
  if (e3.checked) {
    removeWord();
  }
}

function removeWord() {
  // $("#words").val("");
  //ave1 = $("#words").val();
  let currWds = $("#words").val();
  const lastWord = currWds.split(" ").pop();
  //console.log(names[i]);
  currWds = currWds.substring(0, currWds.lastIndexOf(" "));
  $("#words").val(currWds);
  /** 
  //  const lastPhrase = names[names[counter] - 1];
  for (let i = 0; i < names.length; i++) {
    // $("#words").val("");
    // let y = names[i];

    if (names[i] == lastWord) {
      
    }
  }
  
}

// storing into local storage

$(load);

function load() {
  let l = 0;
  let btns = JSON.parse(localStorage.getItem("buttons"));
  if (btns != null) {
    console.log("Buttons are " + btns);
    btns.forEach((element) => {
      make2(element);
    });
  }
}
function make2(values) {
  counter = 0;
  names[counter] = values;
  $("#here").append(
    '<button class ="buttonClass" type="button" id=' +
      counter +
      ">" +
      names[counter] +
      "</button>"
  );
  counter++;
}
 */
