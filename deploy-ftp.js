const FtpDeploy = require("ftp-deploy");
const ftpDeploy = new FtpDeploy();

const config = {
  user: process.env.FTP_USERNAME,
  password: process.env.FTP_PASSWORD,
  host: process.env.FTP_HOST,
  port: process.env.FTP_PORT || 21,
  localRoot: __dirname + "/build",
  remoteRoot: "/public_html/React/Build",
  include: ["*", "**/*"],      // upload all files recursively
  deleteRemote: false,         // do not delete existing files at destination
  forcePasv: true              // use passive mode
};

ftpDeploy.deploy(config, function(err) {
  if (err) {
    console.log(err);
    process.exit(1);
  } else {
    console.log("Deployment finished");
    process.exit(0);
  }
});


console.log('Starting FTP deployment with config:', config);

ftpDeploy.on('uploading', function(data) {
  console.log(`Uploading ${data.transferredFileCount} of ${data.totalFilesCount} files`);
  console.log(`Current file: ${data.filename}`);
});

ftpDeploy.on('uploaded', function(data) {
  console.log(`Uploaded ${data.filename}`);
});

ftpDeploy.on('log', function(data) {
  console.log(data);
});

ftpDeploy.on('upload-error', function(data) {
  console.error(`Upload error for file ${data.filename}: ${data.err}`);
});

ftpDeploy.deploy(config)
  .then(res => {
    console.log('Deployment finished:', res);
    process.exit(0);
  })
  .catch(err => {
    console.error('Deployment error:', err);
    process.exit(1);
  });