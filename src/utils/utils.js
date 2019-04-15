export const categoryOptions = [
  { key: "1", value: "Arts", text: "Arts" },
  { key: "2", value: "Attractions", text: "Attractions" },
  { key: "3", value: "Charity", text: "Charity" },
  { key: "4", value: "Conferences", text: "Conferences" },
  { key: "5", value: "Courses", text: "Courses" },
  { key: "6", value: "Entertainment", text: "Entertainment" },
  { key: "7", value: "Exhibitions", text: "Exhibitions" },
  { key: "8", value: "Festival", text: "Festival" },
  { key: "9", value: "Film", text: "Film" },
  { key: "10", value: "Food & Drink", text: "Food & Drink" },
  { key: "11", value: "Kids", text: "Kids" },
  { key: "12", value: "Memberships", text: "Memberships" },
  { key: "13", value: "Music", text: "Music" },
  { key: "14", value: "Night Life", text: "Night Life" },
  { key: "15", value: "Other", text: "Other" },
  { key: "16", value: "Outdoors", text: "Outdoors" },
  { key: "17", value: "Sport", text: "Sport" },
  { key: "18", value: "Talks", text: "Talks" },
  { key: "19", value: "Theatre", text: "Theatre" }
];

export const handleEnterKeypres = (event, action) => {
  const ENTER_KEY = 13;
  switch (event.keyCode) {
    case ENTER_KEY:
      action();
      break;
    default:
      break;
  }
};
