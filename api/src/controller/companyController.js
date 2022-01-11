const config = require('config');
const express = require('express');
const fs = require('fs');

const companyController = express();

companyController.get(
  '/companies',
  (req, res) => {
    // TODO: may change to use async method readFile; change along with the express router
    const rawdata = fs.readFileSync(config.dataFilePath);
    let entries = JSON.parse(rawdata);

    if (req.query) {
      const { name, specialties, page, size } = req.query; // TODO: paging
      if (name) {
        // case insensitive compare
        entries = entries.filter((e) => e?.name?.toUpperCase().indexOf(name.toUpperCase()) > -1);
      }
      if (specialties) {
        // determine if it is single or multi filter
        if (Array.isArray(specialties)) {
          entries = entries.filter((e) => specialties.every((val) => e?.specialties?.includes(val)));
        } else {
          entries = entries.filter((e) => e?.specialties?.indexOf(specialties) > -1);
        }
      }
    }

    res.json(entries);
  },
);

module.exports = { companyController };
