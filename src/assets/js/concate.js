const fs = import('fs');

const filesToConcatenate = [
  './bootstrap.min.js',
'./jquery.downCount.js',
'./custom.js',
'./fotorama.js',
'./jquery-1.12.3.min.js',
'./jquery-ui.min.js',
'./jquery.magnific-popup.js',
'./owl.carousel.min.js',
  // Add more files as needed
];

let concatenatedContent = '';

filesToConcatenate.forEach((file) => {
  const content = fs.
  concatenatedContent += content + '\n';
});

fs.writeFileSync('index.js', concatenatedContent);
