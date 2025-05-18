function ExecuteScript(strId)
{
  switch (strId)
  {
      case "66Tzvcc5Pca":
        Script1();
        break;
      case "6HQqnUco3hf":
        Script2();
        break;
      case "6DEHcl010Uo":
        Script3();
        break;
      case "5mYYOfn9KBX":
        Script4();
        break;
      case "5vcDdryA3GI":
        Script5();
        break;
      case "6GLy0msYsUG":
        Script6();
        break;
      case "6HrOKYwgjOA":
        Script7();
        break;
      case "5x40934Blwt":
        Script8();
        break;
      case "5kYdqNhVQqi":
        Script9();
        break;
  }
}

function Script1()
{
  var player = GetPlayer();
var jimState = player.GetVar("jimState");

// Fetch Luana's feedback from the API
fetch("https://chatbot-api-final.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    role: "Luana",
    jimState: jimState
  })
})
.then(response => response.json())
.then(data => {
  console.log("Luana says:", data.luanaFeedback);
  player.SetVar("LuanaFeedback", data.luanaFeedback || "I'm here if you need me.");
})
.catch(error => {
  console.error("API error:", error);
  player.SetVar("LuanaFeedback", "There was a problem connecting.");
});

}

function Script2()
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

function Script3()
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

function Script4()
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

function Script5()
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

function Script6()
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

function Script7()
{
  var player = GetPlayer();
var jimState = player.GetVar("jimState");

fetch("https://chatbot-api-final.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    role: "Luana",
    jimState: jimState
  })
})
.then(response => response.json())
.then(data => {
  console.log("Luana’s final coaching:", data.luanaFeedback);
  player.SetVar("LuanaFeedback", data.luanaFeedback || "You're learning — keep practicing.");
})
.catch(error => {
  console.error("Final feedback error:", error);
  player.SetVar("LuanaFeedback", "We couldn't load your final feedback.");
});

}

function Script8()
{
  var player = GetPlayer();
var jimState = player.GetVar("jimState");

fetch("https://chatbot-api-final.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    role: "Luana",
    jimState: jimState
  })
})
.then(response => response.json())
.then(data => {
  console.log("Luana’s final coaching:", data.luanaFeedback);
  player.SetVar("LuanaFeedback", data.luanaFeedback || "You're learning — keep practicing.");
})
.catch(error => {
  console.error("Final feedback error:", error);
  player.SetVar("LuanaFeedback", "We couldn't load your final feedback.");
});

}

function Script9()
{
  var player = GetPlayer();
var jimState = player.GetVar("jimState");

fetch("https://chatbot-api-final.vercel.app/api/index", {
  method: "POST",
  headers: {
    "Content-Type": "application/json"
  },
  body: JSON.stringify({
    role: "Luana",
    jimState: jimState
  })
})
.then(response => response.json())
.then(data => {
  console.log("Luana’s final coaching:", data.luanaFeedback);
  player.SetVar("LuanaFeedback", data.luanaFeedback || "You're learning — keep practicing.");
})
.catch(error => {
  console.error("Final feedback error:", error);
  player.SetVar("LuanaFeedback", "We couldn't load your final feedback.");
});

}

