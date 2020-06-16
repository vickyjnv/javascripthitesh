//let myArray = ["name", 33, true];
let myYoutubeVideoOne = {
  title: "loops in javascript",
  videoLength: 15,
  videoDescription: "this is a video description anda long one",
  videoCreator: "vicky",
};

let myYoutubeVideoTwo = {
  title: "loops in javascript",
  videoLength: 10,
  videoDescription: "this is a video description anda long one",
  videoCreator: "vicky",
};
// console.log(myYoutubeVideo);
// console.log(
//   `hey new video on ${myYoutubeVideo.title} by ${myYoutubeVideoOne.videoCreator}`
// );

let changeVideoLength = function (myObject) {
  //   console.log(`time of this video is: ${myObject.videoLength + 2}`);
  //return `time of this video is: ${myObject.videoLength + 2}`;
  return {
    formatOne: `Time of this video is: ${myObject.videoLength + 2}`,
    formatTwo: `Time of this video is: ${myObject.videoLength + 2}`,
  };
};
let adOne = changeVideoLength(myYoutubeVideoOne);
console.log(adOne.formatOne);
console.log(adOne.formatTwo);
