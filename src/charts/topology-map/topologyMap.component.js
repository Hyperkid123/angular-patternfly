angular.module('patternfly.charts').component('pfTopologyMap', {
  bindings: {
    force: '<?',
    nodes: '<',
    edges: '<'
  },
  templateUrl: 'charts/topology-map.html',
  controller: function  ($element) {
    'use strict';
    var ctrl = this;
    var canvasW;
    var canvasH;
    var canvasX;
    var canvasY;
    var context;
    var nodes;
    var links;
    var icons;
    var maxNodeSize;
    var transform;
    var simulation;

    ctrl.canvas = $element[0] ;

    this.$onInit = function () {
      var coords;
      ctrl.canvas = ctrl.canvas.querySelector('canvas.topology-graph');
      // Store the CSS computed width and the height of the canvas
      ctrl.canvasW = ctrl.canvas.clientWidth;
      ctrl.canvasH = ctrl.canvas.clientHeight;
      // We need to set to override the default canvas dimensions
      ctrl.canvas.width = ctrl.canvasW;
      ctrl.canvas.height = ctrl.canvasH;
      coords = this.canvas.getBoundingClientRect();

      ctrl.canvasX = coords.left;
      ctrl.canvasY = coords.top;
      // Store the canvas' context
      ctrl.context = this.canvas.getContext('2d');
      // Set up the initial transform
      ctrl.transform = d3.zoomIdentity;
      console.log('controller: ', ctrl);
    };
  },
});
