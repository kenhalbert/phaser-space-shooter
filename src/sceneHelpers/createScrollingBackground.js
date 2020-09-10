
import ScrollingBackground from '../props/ScrollingBackground';

export default (scene, backgrounds) => {
  for (let i = 0; i < 5; i++) { // create five scrolling backgrounds
    const bg = new ScrollingBackground(
      scene, 
      "sprBg0", 
      10 * i,  // each successive background layer moves faster than the last
      
      // x and y offsets to prevent jarring appearance on animation start
      (i%2 === 0 ? 5 : -5) * i,
      (i%2 === 0 ? 10 : -10) * i
    );
    
    backgrounds.push(bg);
  }
};