var skinViewers = [];
var skinViewerCount = 0;
var skinDiv = document.getElementById("skinDiv");

var bodyPadding = 10;
var skinViewerMargin = 15;
var skinViewerWidth = 300;
var skinViewerHeight = 400;

var canShowPage = true;
var viewersPerRow = 1;
var currentRowViewers = 0;

var fileList = new Array();

$(function () {
  checkScreenSize();
});

window.onresize = function () {
  checkScreenSize();
};

function checkScreenSize() {
  var totalViewerMargin = skinViewerMargin * 2;
  var screenWidth = window.innerWidth - bodyPadding * 2;
  var viewerHeight = skinViewerHeight + totalViewerMargin;
  var viewerWidth = skinViewerWidth + totalViewerMargin;

  if (screenWidth >= viewerWidth && window.innerHeight >= viewerHeight) {
    canShowPage = true;
    viewersPerRow = Math.floor(screenWidth / viewerWidth);
    showSkins();
    $("#smallDevice").removeClass("deviceTooSmall");
  } else {
    canShowPage = false;
    viewersPerRow = 0;
    $("#smallDevice").addClass("deviceTooSmall");
    if (window.innerWidth < window.innerHeight) {
      $("#smallDeviceText").text("Snu skjermen");
    } else {
      $("#smallDeviceText").text("Skjermen er for liten");
    }
  }

  console.log(canShowPage);
  console.log(viewersPerRow);
}

function addSkin(skin) {
  if (!canShowPage) {
    return;
  }
  skinViewerCount++;
  var newSkinViewer = document.createElement("canvas");
  var newSkinViewerId = "skinViewer" + skinViewerCount;
  newSkinViewer.id = newSkinViewerId;
  newSkinViewer.classList.add("skinViewer");
  skinViewers.push(
    new skinview3d.SkinViewer({
      canvas: newSkinViewer,
      width: skinViewerWidth,
      height: skinViewerHeight,
      skin: skin,
    })
  );

  skinDiv.appendChild(newSkinViewer);

  currentRowViewers++;

  if (currentRowViewers == viewersPerRow) {
    $("#skinDiv").append("<br>");
    currentRiwViewers = 0;
  }
}

function addControls() {
  if (!canShowPage) {
    return;
  }
  for (var i = 0; i < skinViewers.length; i++) {
    var control = skinview3d.createOrbitControls(skinViewers[i]);
    control.enableRotate = true;
    control.enableZoom = false;
    control.enablePan = false;
  }
}

const toBase64 = (file) =>
  new Promise((resolve, reject) => {
    if (!canShowPage) {
      return;
    }
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

async function updateSkinArr() {
  if (!canShowPage) {
    return;
  }
  var input = document.getElementById("fileUpload");
  fileList = new Array();

  for (var i = 0; i < input.files.length; i++) {
    var file = input.files.item(i);
    fileList.push(await toBase64(file));
  }

  showSkins();
}

function showSkins() {
  if (!canShowPage) {
    return;
  }
  skinViewers = new Array();
  skinViewerCount = 0;
  currentRowViewers = 0;
  $("#skinDiv").html("");

  for (var i = 0; i < fileList.length; i++) {
    addSkin(fileList[i]);
  }

  addControls();
}
