let isVerified = true;
let isLoggedin = true;
let hasPayment = true;
let isGuest = true;
if (isVerified && isLoggedin && hasPayment) {
  console.log("greetig message to user");
  console.log("Grant access to paid course");
} else if (isVerified || isGuest) {
  condsole.log("allow free previews");
} else {
  console.log("message: please contact admin");
}
