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
