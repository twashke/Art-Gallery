function showname() {
     var name = document.getElementById('file-upload');
     document.getElementById("file-selected").innerHTML = name.files.item(0).name;
};