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
export const defaultValues = {
  maxButtonsInRow: 4,
  maxRows: 6,
  projectName: 'Bot Name',
  allowedPhotoExtensions: defaultPhotoExtensions,
  allowedFileExtensions: defaultFileExtensions,
}
