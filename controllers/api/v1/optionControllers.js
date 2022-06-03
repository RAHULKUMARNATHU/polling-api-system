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
        "http://localhost:8000/api/v1/options/" + option.id + "/add_vote";
      option.save();
      question.options.push(option);
      question.save();

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

// delete an option on the basis of its id
module.exports.optionDelete = async function (req, res) {
  try {
    let id = req.params.id;

    // finding the option exists or not
    let option = await Option.findById(id);

    // if option is present then check it has vote or not
    // if option has vote then not have to delete it
    if (option.votes > 0) {
      return res.status(404).json({
        data: { message: "can't delete it! It has vote" },
      });
    }
    // delete option from Question.options array also
    await Question.findByIdAndUpdate(option.question, {
      $pull: { options: id },
    });

    // else delete the option from option
    await Option.findByIdAndDelete(id);
    return res.status(200).json({
      data: { message: "Option deleted sucessfully" },
    });
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};

// adding a vote to an option for perticular question
module.exports.addVote = async function (req, res) {
  try {
    let id = req.params.id;

    // find option if present then vote to it
    await Option.findByIdAndUpdate(id, { $inc: { votes: 1 } });

    return res.status(200).json({
      data: { message: "Voted successfully" },
    });
  } catch (err) {
    return res.status(500).json({
      data: { message: "Internal server error" },
    });
  }
};
