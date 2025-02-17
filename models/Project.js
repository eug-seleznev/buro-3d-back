const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  stage: {
    type: String,
    required: true,
  },

  about: {
    type: String,
    default: "a",
  },
  dateStart: {
    type: Date,
  },
  dateFinish: {
    type: Date,
    default: null,
  },
  par: {
    type: String,
    required: true,
  },
  team: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "user",
      default: [],
    },
  ],
  sprints: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "sprint",
      default: [],
    },
  ],
  customer: [
    {
      email: {
        type: String,
      },
      phone: {
        type: String,
      },
      name: {
        type: String,
      },
    },
  ],
  city: {
    type: String,
  },
  area: {
    type: Number,
  },
  crypt: {
    type: String,
  },
  crypter: {
    type: String,
  },
  status: {
    type: Boolean,
    default: false,
  },
  rocketchat: {
    type: String,
  },
  tags: [
    {
      type: String,
    },
  ],
  urn: {
    type: String,
  },
  urnDate: {
    type: Date,
  },
  obj: {
    type: String,
  },
  mtl: {
    type: String,
  },
  release: [
    {
      version: {
        type: Number,
        default: 1,
      },
      publicId: {
        type: String,
      },
      urn: {
        type: String,
      },
      approve: {
        type: String,
        default: "unapproved",
      },
      edits: {
        type: String,
      }
    },
  ],
  infoRes: [
    {
      description: {
        type: String,
      },
      name: {
        type: String,
      },
      content: {
        type: String,
      },
      type: {
        type: String,
      },
    },
  ],
});

module.exports = Project = mongoose.model("project", ProjectSchema);
