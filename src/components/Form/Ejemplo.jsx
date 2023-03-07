//how to do a circle check?
//returns a new circlepacker instance. it accepts the following options:
	var packerOptions = {
		// the point that the circles should be attracted to
		// REQUIRED
		target: { x: 50, y: 50 },

		// the bounds of the area we want to draw the circles in
		// REQUIRED
		bounds: { width: 100, height: 100 },
	
		// the initial position and sizes of our circles
		// it is possible to add more circles later
		// each circle should have a unique id, a position and a radius
		// REQUIRED
		circles: [
			{ id: 'circle1', radius: 34, position: { x: 32, y: 54 }, isPulledToCenter: true, isPinned: false },
			{ id: 'circle2', radius: 64, position: { x: 24, y: 42 }, isPulledToCenter: true, isPinned: false },
			{ id: 'circle3', radius: 53, position: { x: 23, y: 21 }, isPulledToCenter: true, isPinned: false }
		],

		// true: continuous animation loop
		// false: one-time animation
		// OPTIONAL. default: true
		continuousMode: true,
		
		// correctness of collision calculations.
		// higher number means means longer time to calculate
		// OPTIONAL
		// default = 3
		collisionPasses: 3,
		
		// number of centering animations per frame.
		// higher number means faster movement and longer time to calculate
		// OPTIONAL
		// default = 1
		centeringPasses: 2,

		// callback function for when movement started
		// can get called multiple times
		// OPTIONAL
		onMoveStart: function () { },

		// callback function for updated circle positions
		onMove: function ( updatedCirclePositions ) {
			// draw logic here...
		},

		// callback function for when movement ended
		// can get called multiple times
		// OPTIONAL
		onMoveEnd: function () { }
	};

	var packer = new CirclePacker( packerOptions );

//add an array of new circles. each circle should have a unique id, a position and a radius.
	packer.addCircles( [
		{ id: 'circle4', radius: 21, position: { x: 12, y: 27 }, isPulledToCenter: false, isPinned: false },
		{ id: 'circle5', radius: 64, position: { x: 14, y: 42 }, isPulledToCenter: false, isPinned: false }
	] );

//add a single new circle. a circle should have a unique id, a position and a radius.
	packer.addCircles( { id: 'circle6', radius: 21, position: { x: 12, y: 27 } } );

//update bounds. a bounds object should have a width and a height.
	packer.setBounds( { width: 200, height: 300 } );

//updates the target position. a position object should have x and y values.
	packer.setTarget( { x: 21, y: 29 } );

//updates number of centering passed. should an integer >= 1. high values can impact performance.
	packer.setCenteringPasses( 3 );

//updates number of collision passed. should an integer >= 1. high values can impact performance.
	packer.setCollisionPasses( 3 );

//set damping. this affects the movement speed of the circles. value should be a float between 0 and 1. the default value is 0.025
	packer.setDamping( 0.01 );

//set center pull. if set to false, circles collide, but are not pulled to the center. the default value is true.
	packer.setCenterPull( false );

//starts calculation. useful if continuousMode was set to false.
	packer.update();

//indicate that we're about to start dragging this circle. this is usually called in a mousedown or a touchstart event handler.
	packer.dragStart( 'circle2' );

//update position of dragges circle. a position object should have x and y values. this is usually called in a mousemove or a touchmove event handler.
	packer.drag( 'circle2', { x: 30, y: 45 } );

//indicate that we're done dragging this circle. this is usually called in an mouseup or a touchend event handler.
	packer.dragEnd( 'circle2' );

//pin circle. this means that the circle is static and will not move. other circles will still be bounce off of it.
	packer.pinCircle( 'circle2' );

//unpin circle. this means that the circle is no longer static and will start colliding with other circles as normal.
	packer.unpinCircle( 'circle2' );

//change the radius of a circle.
	packer.setCircleRadius( 'circle2', 20 );

//change the isPulledToCenter value of a circle. if it is set to false, the circle is not pulled to the center. (it still collides with other circles).
	packer.setCircleCenterPull( 'circle2', true );

//tell circlepacker instance we're done and won't be needing it again. it terminates the webworker. useful for lifecycle hooks in single page web apps.
	packer.destroy();

//Source: https://github.com/snorpey/circlepacker


