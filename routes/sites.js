const express = require("express");
const router = express.Router();
const Site = require("../models/site");

//Getting all
router.get("/", async (req, res) => {
  try {
    const sites = await Site.find();
    res.json(sites);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Getting one
router.get("/:id", getSite, (req, res) => {
  res.json(res.site);
});

//creating one
router.post("/postData", async (req, res) => {
  // console.log(req.body);
  const site = new Site({
    name: req.body.obj.name,
    description: req.body.obj.description,
    img: req.body.obj.img,
  });

  try {
    // console.log(site);

    const newSite = await site.save();
    res.status(201).json(newSite);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//Deleting one
router.delete("/:id", getSite, async (req, res) => {
  try {
    await res.site.remove();
    res.json({ message: "deleted site" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getSite(req, res, next) {
  let site;
  try {
    site = await Site.findById(req.params.id);
    if (site == null) res.status(404).json({ message: "cannot find site" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
  res.site = site;
  next();
}

module.exports = router;
