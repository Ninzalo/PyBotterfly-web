const defaultPhotoExtensions = [
  {
    id: "png",
    isChecked: false,
  },
  {
    id: "jpg",
    isChecked: false,
  },
  {
    id: "jpeg",
    isChecked: false,
  },
];

const defaultFileExtensions = [
  {
    id: "xls",
    isChecked: false,
  },
  {
    id: "xlsx",
    isChecked: false,
  },
  {
    id: "pdf",
    isChecked: false,
  },
  {
    id: "doc",
    isChecked: false,
  },
  {
    id: "docx",
    isChecked: false,
  },
];

export const emptyButtonData = {
  id: "",
  num: 0,
  label: "Btn",
  isCustomLabel: false,
  color: "primary",
  action: "",
  isCustomAction: false,
};

export const buttonSettingObj = {
  row: 0,
  num: 0,
  button: emptyButtonData,
};

export const emptyRowData = {
  rowNum: 0,
  buttons: [],
};

export const emptyPageData = {
  id: "",
  pageId: "",
  errorsOnPage: [],
  text: "Enter message text",
  keyboardType: "empty",
  rows: [emptyRowData],
};

export const defaultButtonColors = [
  "primary",
  "secondary",
  "negative",
  "positive",
];

export const defaultButtonActions = [];

export const defaultButtonSettings = {
  maxLabelLength: 15,
  colors: defaultButtonColors,
  actions: defaultButtonActions,
};

export const defaultValues = {
  allowEdit: true,
  maxButtonsAmount: 20,
  maxButtonsInRow: 4,
  maxRows: 6,
  projectName: "Bot Name",
  allowedPhotoExtensions: defaultPhotoExtensions,
  allowedFileExtensions: defaultFileExtensions,
  debugState: false,
  previewMode: false,
  pages: [],
  emptyPageData: emptyPageData,
};
