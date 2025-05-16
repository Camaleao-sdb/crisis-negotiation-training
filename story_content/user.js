function ExecuteScript(strId)
{
  switch (strId)
  {
      case "60sHgL6Fq37":
        Script1();
        break;
      case "6IofVHx1jZN":
        Script2();
        break;
      case "6FdC9LGwm83":
        Script3();
        break;
      case "6rGmFmPZlDr":
        Script4();
        break;
      case "5cKBnz2ekFk":
        Script5();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var learnerText = player.GetVar("learnerText");
var jimState = player.GetVar("jimState");

fetch("https://chatbot-api-final.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    learnerText: learnerText,
    jimState: jimState
  })
})
.then(res => res.json())
.then(data => {
  console.log("✅ API response:", data);
  player.SetVar("jimReply", data.jimReply || "...");
  player.SetVar("jimState", data.jimState);
})
.catch(error => {
  console.error("❌ API error:", error);
  player.SetVar("jimReply", "API call failed.");
});

}

function Script2()
{
  var player = GetPlayer();
var userInput = player.GetVar("TextEntry1");

alert("JS is running. Sending to API: " + userInput); // <--- DEBUG popup

fetch("https://storyline-ai-chatbot.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ userInput: userInput })
})
.then(response => response.json())
.then(data => {
  player.SetVar("jimReply", data.jim_reply);
  player.SetVar("jimState", data.state_change);
})
.catch(error => {
  alert("Error talking to API."); // <--- DEBUG popup
  console.error("API error:", error);
  player.SetVar("jimReply", "Something went wrong.");
  player.SetVar("jimState", 0);
});

}

function Script3()
{
  var player = GetPlayer();
var userInput = player.GetVar("TextEntry1");

alert("JS is running. Sending to API: " + userInput); // <--- DEBUG popup

fetch("https://storyline-ai-chatbot.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ userInput: userInput })
})
.then(response => response.json())
.then(data => {
  player.SetVar("jimReply", data.jim_reply);
  player.SetVar("jimState", data.state_change);
})
.catch(error => {
  alert("Error talking to API."); // <--- DEBUG popup
  console.error("API error:", error);
  player.SetVar("jimReply", "Something went wrong.");
  player.SetVar("jimState", 0);
});

}

function Script4()
{
  var player = GetPlayer();
var userInput = player.GetVar("TextEntry1");

alert("JS is running. Sending to API: " + userInput); // <--- DEBUG popup

fetch("https://storyline-ai-chatbot.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ userInput: userInput })
})
.then(response => response.json())
.then(data => {
  player.SetVar("jimReply", data.jim_reply);
  player.SetVar("jimState", data.state_change);
})
.catch(error => {
  alert("Error talking to API."); // <--- DEBUG popup
  console.error("API error:", error);
  player.SetVar("jimReply", "Something went wrong.");
  player.SetVar("jimState", 0);
});

}

function Script5()
{
  var player = GetPlayer();
var userInput = player.GetVar("TextEntry1");

alert("JS is running. Sending to API: " + userInput); // <--- DEBUG popup

fetch("https://storyline-ai-chatbot.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({ userInput: userInput })
})
.then(response => response.json())
.then(data => {
  player.SetVar("jimReply", data.jim_reply);
  player.SetVar("jimState", data.state_change);
})
.catch(error => {
  alert("Error talking to API."); // <--- DEBUG popup
  console.error("API error:", error);
  player.SetVar("jimReply", "Something went wrong.");
  player.SetVar("jimState", 0);
});

}

