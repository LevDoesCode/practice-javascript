function viralAdvertising(n) {
  let likes = 0;
  let ads = 5;
  for (let i = 0; i < n; i++) {
    let todaysLikes = Math.floor(ads / 2);
    ads = todaysLikes * 3;
    likes += todaysLikes;
  }
  return likes;
}
