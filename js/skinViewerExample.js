// !Load Skin

// *var skinViewer = new skinview3d.SkinViewer({
// *    canvas: document.getElementById("skin_container"),
// *    width: 300,
// *    height: 400,
// *    skin: "skins/steve.png"
// *});

// // Change viewer size
// *skinViewer.width = 600;
// *skinViewer.height = 800;

// // Load another skin
// *skinViewer.loadSkin("img/skin2.png");

// // Load a cape
// *skinViewer.loadCape("img/cape.png");

// // Load a elytra (from a cape texture)
// *skinViewer.loadCape("img/cape.png", { backEquipment: "elytra" });

// // Unload(hide) the cape / elytra
// *skinViewer.loadCape(null);

// !Show Animation

// // Add an animation
// *let walk = skinViewer.animations.add(skinview3d.WalkingAnimation);
// // Add another animation
// *let rotate = skinViewer.animations.add(skinview3d.RotatingAnimation);
// // Remove an animation, stop walking dude
// *walk.remove();
// // Remove the rotating animation, and make the player face forward
// *rotate.resetAndRemove();
// // And run for now!
// *let run = skinViewer.animations.add(skinview3d.RunningAnimation);

// // Set the speed of an animation
// *run.speed = 3;
// // Pause single animation
// *run.paused = true;
// // Pause all animations!
// *skinViewer.animations.paused = true;

// !Set Controls

// // Control objects with your mouse!
// *let control = skinview3d.createOrbitControls(skinViewer);
// *control.enableRotate = true;
// *control.enableZoom = false;
// *control.enablePan = false;