function scuberGreetingForFeet(tripDistance) {
  if (tripDistance <= 400) return "This one is on me!";
  else if (tripDistance > 400 && tripDistance < 2000)
    return "That will be twenty bucks.";
  else if (tripDistance < 2500) return "I will gladly take your thirty bucks.";
  else return "No can do.";
}

function ternaryCheckCity(tripCity) {
  if (tripCity === "NYC") return "Ok, sounds good.";
  return "No go.";
}

function switchOnCharmFromTip(tipStatus) {
  if (tipStatus === "generous") return "Thank you so much.";
  else if (tipStatus === "not as generous") return "Thank you.";
  return "Bye.";
}
