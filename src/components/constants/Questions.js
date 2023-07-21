import { v4 as uuidv4 } from "uuid";

export const QuestionDescriptions = [
  {
    text: "Single Line Text",
    type: "SINGLE_LINE_TEXT",
  },
  {
    text: "Multiple Line Text",
    type: "MUTLI_LINE_TEXT",
  },
  {
    text: "Multiple Choice",
    type: "MULTI_CHOICE",
  },
  {
    text: "Checkboxes",
    type: "CHECKBOXES",
  },
  {
    text: "Dropdown",
    type: "DROPDOWN",
  },
];

export const QuestionTypes = {
  SINGLE_LINE_TEXT: "SINGLE_LINE_TEXT",
  MUTLI_LINE_TEXT: "MUTLI_LINE_TEXT",
  MULTI_CHOICE: "MULTI_CHOICE",
  CHECKBOXES: "CHECKBOXES",
  DROPDOWN: "DROPDOWN",
};

export const InitQuestions = {
  [QuestionTypes.MULTI_CHOICE]: () => ({
    _id: uuidv4(),
    type: QuestionTypes.MULTI_CHOICE,
    title: "Select a choice",
    options: [
      {
        _id: uuidv4(),
        content: "First choice",
      },
      {
        _id: uuidv4(),
        content: "Second choice",
      },
      {
        _id: uuidv4(),
        content: "Third choice",
      },
    ],
  }),
  [QuestionTypes.CHECKBOXES]: () => ({
    _id: uuidv4(),
    type: QuestionTypes.CHECKBOXES,
    title: "Check All That Apply",
    options: [
      {
        _id: uuidv4(),
        content: "First choice",
      },
      {
        _id: uuidv4(),
        content: "Second choice",
      },
      {
        _id: uuidv4(),
        content: "Third choice",
      },
    ],
  }),
  [QuestionTypes.SINGLE_LINE_TEXT]: () => ({
    _id: uuidv4(),
    type: QuestionTypes.SINGLE_LINE_TEXT,
    title: "Untitled",
    placeholder: "",
  }),
  [QuestionTypes.MUTLI_LINE_TEXT]: () => ({
    _id: uuidv4(),
    type: QuestionTypes.MUTLI_LINE_TEXT,
    title: "Untitled",
    placeholder: "",
  }),
  [QuestionTypes.DROPDOWN]: () => ({
    _id: uuidv4(),
    type: QuestionTypes.DROPDOWN,
    title: "Select a choice",
    options: [
      {
        _id: uuidv4(),
        content: "First choice",
      },
      {
        _id: uuidv4(),
        content: "Second choice",
      },
      {
        _id: uuidv4(),
        content: "Third choice",
      },
    ],
  }),
  abc: () => ({
    _id: uuidv4(),
    type: "MULTI_CHOICE",
    title: "Evaluate the following statements",
    questions: [
      {
        _id: uuidv4(),
        content: "First Question",
      },
      {
        _id: uuidv4(),
        content: "Second Question",
      },
      {
        _id: uuidv4(),
        content: "Third Question",
      },
    ],
    options: [
      {
        _id: uuidv4(),
        content: "First choice",
      },
      {
        _id: uuidv4(),
        content: "Second choice",
      },
      {
        _id: uuidv4(),
        content: "Third choice",
      },
    ],
  }),
};
