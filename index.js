AFRAME.registerComponent('zinga_position_z%40v0.1', {
    schema: {
    speed: {type: 'number', default: -.005}
  },
  init: function () {
    console.log('Component attached!');
  },
    tick: function () {
this.el.object3D.position.z=this.el.object3D.position.z+this.data.speed;   }
});
