

// Import the necessary Cesium modules
import Cesium from 'cesium/Cesium';

// Create a viewer and specify the container to render the Cesium scene in
const viewer = new Cesium.Viewer('cesiumContainer', {
    sceneMode: Cesium.SceneMode.SCENE3D, // Set the scene mode to 3D
    shouldAnimate: true, // Enable animation
});

// Add a 3D Tiles layer to the viewer
const tileset = new Cesium.Cesium3DTileset({
    url: 'public/Example/3DTiles/DataSource_toGuy_best_real.json', // Specify the URL to your 3D Tiles dataset
});
viewer.scene.primitives.add(tileset);

// Set the camera position and orientation
viewer.camera.setView({
    destination: Cesium.Cartesian3.fromDegrees(
        /* Longitude */ -75.686980,
        /* Latitude */ 40.039724,
        /* Height */ 1000
    ),
    orientation: {
        heading: Cesium.Math.toRadians(0), // North
        pitch: Cesium.Math.toRadians(-45), // Look down at a 45-degree angle
        roll: 0, // No roll
    },
});

// Handle any other configuration or interactivity as needed

// Example: Add a home button to reset the view
viewer.extend(Cesium.viewerCesiumNavigationMixin, {});

// Handle any other customization or functionality you need

// Handle any cleanup or additional setup as needed

// For more advanced usage and customization, refer to the Cesium documentation.
