function uploadFile() {
  var fileInput = document.getElementById('fileInput');
  var fileList = document.getElementById('fileList');

  var file = fileInput.files[0];
  var fileName = file.name;

  var li = document.createElement('li');
  var a = document.createElement('a');
  a.href = URL.createObjectURL(file);
  a.download = fileName;
  a.textContent = fileName;

  li.appendChild(a);
  fileList.appendChild(li);

  // Clear the file input
  fileInput.value = '';
}
