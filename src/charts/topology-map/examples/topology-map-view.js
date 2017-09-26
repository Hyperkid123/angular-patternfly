/**
 * @ngdoc directive
 * @name patternfly.charts.component:pfTopologyMap
 * @restrict E
 *
 * @description
 *   Component for rendering a topology chart.  Individual nodes and relationships can be represented with this view.  CSS is especially important for rendering the nodes and lines.  The example inline contains specific examples that can be used to change the icon size and the line type of the relationships.
 *
 *   In addition; searching, filtering and label visibility is also supported.<br/>
 * @example
   <example module="patternfly.charts">
    <file name="index.html">
      <div ng-controller="TopologyMapCtrl" class="container-topology">
        <pf-topology-map nodes="nodes" edges="edges" force="2"></pf-topology-map>
      </div>
    </file>
    <file name="script.js">
      angular.module( 'patternfly.charts' ).controller( 'TopologyMapCtrl', function( $scope, $rootScope ) {
        $scope.nodes = [
          {
            id: 1,
            title: 'testNode',
          },
        ];
        $scope.edges = [];
      });
    </file>
   </example>
 */
