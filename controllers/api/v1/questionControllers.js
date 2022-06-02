// import models
const Question = require("../../../models/questions");

// create question
module.exports.createQuestion = async function (req, res) {
  try {
    let question = await Question.create(req.body);

    // if question is created then return json response
    if (question) {
      return res.json({
        question,
        data: { message: "question created successfully" },
      });
    } else {
      // if no question created then error in response status
      return res.status(500).json({
        data: { message: "Internal server error" },
      });
    }
  } catch (err) {
    console.log("Error while creating question", err);
    return;
  }
};

// view questions
module.exports.viewQuestions = async function (req, res) {
  try {
    let question = await Question.findById(req.params.id).populate("options");

    return res.json({ question });
  } catch (err) {
    return res.status(500).json({
      data: {
        message: "Internal server error viewing question",
      },
    });
  }
};
