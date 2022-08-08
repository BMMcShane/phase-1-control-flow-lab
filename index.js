function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    return "This one is on me!";
  } else if (feet < 2000) {
    return 'That will be twenty bucks.';
  } else if (feet < 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (feet > 2500) {
    return 'No can do.'
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tip){
  let tipResponse;
  switch (tip) {
    case 'generous':
      tipResponse = 'Thank you so much.';
      break;
    case 'not as generous':
      tipResponse = 'Thank you.';
      break;
    case 'thanks for everything':
      tipResponse = 'Bye.';
      break;
  }
  return (tipResponse)
}