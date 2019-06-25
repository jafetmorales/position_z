AFRAME.registerComponent('zinga___position_z', {
    schema: {
    speed: {type: 'number', default: -.005}
  },
  init: function () {
    console.log('Component attached!');
  },
    tick: function () {
this.el.object3D.position.z=this.el.object3D.position.z+this.data.speed;   }
});
