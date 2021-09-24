const express = require("express");
const path = require("path");

// Express config
const app = express();
const port = 3000;

app.use('/static', express.static(
  path.join(__dirname, 'my_pose_model')
));

app.use("/static", express.static(path.join(__dirname, "scripts")));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/model.html'));
});

//connect
app.listen(process.env.PORT || port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
