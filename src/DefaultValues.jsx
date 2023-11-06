const defaultPhotoExtensions = [
  {
    id: 'png',
    isChecked: false,
  },
  {
    id: 'jpg',
    isChecked: false,
  },
  {
    id: 'jpeg',
    isChecked: false,
  },
]

const defaultFileExtensions = [
  {
    id: 'xls',
    isChecked: false,
  },
  {
    id: 'xlsx',
    isChecked: false,
  },
  {
    id: 'pdf',
    isChecked: false,
  },
  {
    id: 'doc',
    isChecked: false,
  },
  {
    id: 'docx',
    isChecked: false,
  },
]

export const emptyButtonData = {
  id: '',
  num: 0,
  label: 'Button',
  color: 'primary',
  action: '',
}

export const emptyRowData = {
  rowNum: 0,
  buttons: [],
}

const emptyPageData = {
  id: '',
  pageId: '',
  text: 'Enter message text',
  keyboardType: 'empty',
  rows: [emptyRowData],
}

export const defaultValues = {
  allowEdit: true,
  maxButtonsAmount: 20,
  maxButtonsInRow: 4,
  maxRows: 6,
  projectName: 'Bot Name',
  allowedPhotoExtensions: defaultPhotoExtensions,
  allowedFileExtensions: defaultFileExtensions,
  debugState: false,
  pages: [],
  emptyPageData: emptyPageData,
}
