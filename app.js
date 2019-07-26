new hoverEffect({
  parent: document.querySelector('.distortion'),
  intensity: 0.2, //how aggresive the effect is
  image1: './model1.jpg',
  image2: './model2.jpg',
  angle: Math.PI / 4, //changes the angle the effect comes from. This can be removed to use default.
  displacementImage: './distortionimage.png'
})