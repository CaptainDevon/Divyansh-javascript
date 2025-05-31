export const displayDetails = (req, res) => {
  try {
    const { firstName, lastName, gender, age } = req.body;
    let pronouns = "";
    if (gender === "male") pronouns = "He/ Him";
    else if (gender === "female") pronouns = "She/ Her";
    else pronouns = "They/ Them";
     res.json({
      "first-name": firstName,
      "last-name": lastName,
      "gender": gender,
      "age": age,
      "frontEndMessage": `Hello folks! my name is ${firstName} ${lastName}, my pronouns are ${pronouns} and I am ${age} years old`
    });
  } catch (e) {
    res.json({ message: e });
  }
};
