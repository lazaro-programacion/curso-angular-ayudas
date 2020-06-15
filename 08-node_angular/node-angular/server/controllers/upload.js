const uploadController = {
  upload: (req, res) => {
    console.log(req.files);

    console.log(Object.keys(req.files));
    const path = req.files[Object.keys(req.files)[0]].path.split("/");
    console.log(path);

    return res.status(200).jsonp({path: "img/"+path[path.length- 1]});
  }
}

module.exports = uploadController;
