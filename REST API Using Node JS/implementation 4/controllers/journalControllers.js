import Journal from "../entity/journal.js";

export const getAllJournals = async (req, res) => {
  try {
    const journals = await Journal.find();
    res.json(journals);
  } catch (e) {
    res.json(e);
  }
};

export const getJournalById = async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await Journal.findById(id);
    if (!journal) res.json({ message: "the journal was not found" });
    res.json(journal);
  } catch (e) {
    res.json(e);
  }
};

export const createJournal = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newJournal = new Journal({ title, content });
    await newJournal.save();
    res.json(newJournal);
  } catch (e) {
    res.json(e);
  }
};

export const deleteJournalById = async (req, res) => {
  try {
    const { id } = req.params;
    const journal = await Journal.findOneAndDelete({ _id: id });
    if (!journal) res.json({ message: "the journal was not found" });
    res.send({ message: "journal deleted sucessfully", journal });
  } catch (e) {
    res.json(e);
  }
};

export const updateJournalById = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, content } = req.body;
    const journal = await Journal.findById(id);

    if (title) journal.title = title;
    if (content) journal.content = content;

    await journal.save();
    res.send({ message: "The updation has been made", journal });
  } catch (e) {
    res.json(e);
  }
};
