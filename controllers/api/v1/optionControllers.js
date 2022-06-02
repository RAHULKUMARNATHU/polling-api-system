// importing models
const Question = require("../../../models/questions");
const Option = require("../../../models/options");

// create option for the question on the basis of id
module.exports.createOption = async function (req, res) {
  try {
    let question = await Question.findById(req.params.id);
    if (question) {
      let option = await Option.create({
        content: req.body.content,
        votes: req.body.votes,
        question: req.params.id,
      });
      option.link_vote =
        "http://localhost:8000/api/v1/options/" + option.id + "add_vote";
      option.save();

      return res.json({
        option,
        data: {
          message: "option created",
        },
      });
    }
    return res.json({ question });
  } catch (err) {
    console.log("Error : ", err);
    return;
  }
};
